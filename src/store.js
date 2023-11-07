import { configureStore } from "@reduxjs/toolkit";
import buyProduct from "./redux";
import changer from "./reduxDark";
export default configureStore({
    reducer: {
        shopping: buyProduct,
        theme: changer,
    }
})