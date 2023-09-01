import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/dataSlice";
import { dataApi } from "./queries/dataApi";

export const store = configureStore({
     reducer: {
          data: dataReducer,
          [dataApi.reducerPath]: dataApi.reducer,
     },
     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dataApi.middleware)

})