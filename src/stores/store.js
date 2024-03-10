import { configureStore } from "@reduxjs/toolkit";
import  HomeJs  from "../reducers/Home/Home";



export const store = configureStore({
  reducer: {

      homes:HomeJs
  },
});




