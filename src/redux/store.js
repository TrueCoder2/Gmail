import { configureStore } from "@reduxjs/toolkit";
import Slice from "./slice";

const store = configureStore({
    reducer:{
        app:Slice
    }
});

export default store;