import { useState } from "react";
import { showModal, setNoteUserId } from "../../redux/slices/dataSlice";
import { useSelector, useDispatch } from "react-redux";
import {
     useAddNotesMutation,
     useGetAllDetailsQuery,
     useUpdateNotesMutation,
     useDeleteNotesMutation,
} from "../../redux/queries/dataApi";
import { v4 as uuidv4 } from "uuid";

const useModals = () => {

     const dispatch = useDispatch();
     const { refetch, data: users } = useGetAllDetailsQuery();
     const { show, noteUserId } = useSelector((state) => state.data);
     const [addNotes] = useAddNotesMutation();
     const [updateNotes] = useUpdateNotesMutation();
     const [deleteNotes] =useDeleteNotesMutation();
     const selectUser = users?.filter((user) => user.id === noteUserId);
     const choosenUser = users && selectUser[0];



     const [notes, setNotes] = useState({
          id: uuidv4(),
          content: "",
          status: "not-noted",
     });

     const handleNoteInput = (e) => {
          setNotes((prevTodos) => ({
               ...prevTodos,
               content: e.target.value,
          }));
     };

     // const handleAddNote = () => {
     //      const updatedUser = {
     //           ...choosenUser,
     //           notes: [...choosenUser.notes, notes],
     //      };

     //      addNotes(updatedUser).then((res) => {
     //           if (res) {
     //                refetch();
     //                setNotes({
     //                     id: "",
     //                     content: "",
     //                     status: "",
     //                });
     //           }
     //      });
     // };

     const handleAddNote = () =>{
          
     }

     const handleClose = () => {
          dispatch(showModal());
          dispatch(setNoteUserId(0));
     };

     const handleMakeNoted = (choosenNote) => {
          const updatedUser = {
               ...choosenUser,
               notes: choosenUser?.notes.map((note) => {
                    if (note.id === choosenNote.id) {
                         return { ...note, status: note.status === 'not-noted' ? 'noted' : 'not-noted' };
                    }
                    return note;
               }),
          };

          updateNotes(updatedUser).then((res) => {
               if (res) {
                    refetch();
               }
          });
     };

     const handleDeleteNote = (choosenNote) =>{
          const updatedUser = {
               ...choosenUser,
               notes:choosenUser?.notes.filter((note)=>{
                   return note.id !== choosenNote.id;
               })
               
          }

          deleteNotes(updatedUser).then((res)=>{
               if(res){
                    refetch();
               }
          })

     }


     return { choosenUser, notes, handleClose, handleAddNote, handleNoteInput, show, handleMakeNoted ,handleDeleteNote}
}
export default useModals
