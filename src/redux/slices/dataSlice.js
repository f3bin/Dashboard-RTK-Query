import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
     status: '',
     pageData:[],
     data:[],
     page: 1,
     show: false,
     noteUserId:0
}
export const getData = createAsyncThunk('datas/getData', async () => {
     try {
       const response = await fetch('http://localhost:3033/details');
       const result = await response.json(); 
       return result;
     } catch (error) {
      console.log(error)
       throw error;
     }
   });
   
   export const getPageData = createAsyncThunk('datas/getPageDatas', async(pageNumber) => {
     try {
       await new Promise((resolve) => setTimeout(resolve, 1000));
       const response = await fetch(`http://localhost:3033/details/?_page=${pageNumber}&_limit=20`);
       const result = await response.json(); 
       return result;
     } catch (error) {
       console.error(error); 
       throw error; 
     }
   });
   


const dataSlice = createSlice({
     name: 'data',
     initialState,
     reducers: {
          addPageNumber: (state) => {
               state.page = state.page += 1;
          },
          showModal: (state) => {
               state.show = !state.show;
          },
          setNoteUserId:(state,action) =>{
               state.noteUserId = action.payload 
          }
     },
     extraReducers: (builder) => {
          builder
               .addCase(getPageData.pending, (state) => {
                    state.status = 'loading';
               })
               .addCase(getPageData.fulfilled, (state, action) => {
                    state.status = 'success';
                    state.pageData = [...state.pageData, ...action.payload];
               })
               .addCase(getPageData.rejected, (state, action) => {
                    state.status = 'failed';
                    state.error = action.error.message;
               })
               .addCase(getData.pending,(state)=>{
                    state.status = 'loading';
               })
               .addCase(getData.fulfilled,(state,action)=>{
                    state.status = 'success';
                    state.data = action.payload;
               })
               .addCase(getData.rejected,(state,action)=>{
                    state.status = 'failed';
                    state.error = action.error.message;
               });
     }
})
export const { addPageNumber, showModal,setNoteUserId } = dataSlice.actions;
export default dataSlice.reducer;

