import { createSlice } from "@reduxjs/toolkit";

const sliceFilter = createSlice({
    name: "theme",
    initialState: {
        theme: "",
    },
    reducers: {
        darkTheme: (state, action) => {
            localStorage.setItem('bodyColor', JSON.stringify('body-dark'))
            state.theme = "body-dark"
        },
        lightTheme: (state, action) => {
            localStorage.setItem('bodyColor', JSON.stringify('body-light'))
            state.theme = "body-light"
        },
        refResh: (state, action) => {
            const ref = JSON.parse(localStorage.getItem('bodyColor'))
            if (ref) {
                state.theme = ref
            } else {
                state.theme = "body-light"
            }
        }
    }
})
export const { darkTheme, lightTheme, refResh } = sliceFilter.actions
export default sliceFilter.reducer