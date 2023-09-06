import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getData } from "../../redux/slices/dataSlice";
import { addPageNumber } from "../../redux/slices/dataSlice";
import { useGetAllDetailsQuery } from "../../redux/queries/dataApi";
import { useGetPageDetailsQuery } from "../../redux/queries/dataApi";
const useHome = () => {
     // const { data: details } = useGetAllDetailsQuery();
     const scrollableContainerRef = useRef(null);
     const dispatch = useDispatch();
     // const { datas, status, page } = useSelector((state) => state.data);
     const {  status, page } = useSelector((state) => state.data);
     const {data:datas, error} =useGetPageDetailsQuery(page);
     const {data:details} = useGetAllDetailsQuery();

     useEffect(() => {
          function checkScrollEnd() {
               const scrollableContainer = scrollableContainerRef.current;
               if (
                    scrollableContainer.scrollTop + scrollableContainer.clientHeight >=
                    scrollableContainer.scrollHeight
               ) {
                    // Call your function when the scroll reaches the end
                    scrollEndY();
               }
          }
          //function which dispatches after reaching the scroll end
          function scrollEndY() {
               dispatch(addPageNumber());
          }

          const scrollableContainer = scrollableContainerRef.current;
          scrollableContainer.addEventListener("scroll", checkScrollEnd);

          // Clean up the event listener when the component unmounts
          return () => {
               scrollableContainer.removeEventListener("scroll", checkScrollEnd);
          };
     }, [dispatch]);

  
     const isMatched = (detailsLength, datasLength) => {
          console.log(detailsLength, datasLength, "values")
          return detailsLength === datasLength;
        };
        
        const lengthStatus = useMemo(() => {
          return isMatched(details?.length, datas?.length);
        }, [ datas,details]);
        

     //    useEffect(() => {
     //      !lengthStatus && dispatch(getData(page));
     // }, [page]);


     return { datas,details,error, scrollableContainerRef, status, lengthStatus }
}

export default useHome
