import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false
    },
    reducers: {
        toogleGptSearchView : (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        }
    }
});

export default gptSlice.reducer;
export const { toogleGptSearchView } = gptSlice.actions;