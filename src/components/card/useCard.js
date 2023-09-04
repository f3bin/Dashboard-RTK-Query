import { useDispatch } from "react-redux";
import { showModal,setNoteUserId } from "../../redux/slices/dataSlice";
const useCard = () => {

     const dispatch = useDispatch();

     const handleShowModal =(id) =>{
          dispatch(showModal());
          dispatch(setNoteUserId(id));
     }
  return {handleShowModal}
}

export default useCard
