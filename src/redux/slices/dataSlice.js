import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
     status: '',
     datas: [],
     page: 1,
     show:false,
}

export const getData = createAsyncThunk('datas/getDatas', async (pageNumber) => {
     await new Promise((resolve) => setTimeout(resolve, 1000));
     const response = await fetch(`http://localhost:3033/details/?_page=${pageNumber}&_limit=20`);
     const result = response.json();
     return result;

});


const dataSlice = createSlice({
     name: 'data',
     initialState,
     reducers: {
          addPageNumber: (state) => {
               state.page = state.page +=1;
          },
          showModal:(state)=>{
               state.show = !state.show;
          }
     },
     extraReducers: (builder) => {
          builder
               .addCase(getData.pending, (state) => {
                    state.status = 'loading';
               })
               .addCase(getData.fulfilled, (state, action) => {
                    state.status = 'success';
                    state.datas = [...state.datas,...action.payload];
               })
               .addCase(getData.rejected, (state, action) => {
                    state.status = 'failed';
                    state.error = action.error.message;
               });
     }
})
export const {addPageNumber,showModal}=dataSlice.actions;
export default dataSlice.reducer;

