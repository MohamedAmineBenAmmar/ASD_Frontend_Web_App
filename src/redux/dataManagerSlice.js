import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const dataMangerSlice = createSlice({
  name: "dataManager",
  initialState: {
    words: [],
    tree: [],
  },
  reducers: {
    getData: (state, action) => {
      state.tree = action.payload;
    },
  },
});

// ACTIONS exports
export const { getData } = dataMangerSlice.actions;

export const fetchAllWords = (file) => async dispach => {
    axios.post("/extract_words", file, {
        headers: {
          "Content-Type": "multipart/form-data",
        }})
    .then(res => {     
      dispach(getData(res.data))
    })
    .catch(err => console.log(err))
}


export default dataMangerSlice.reducer;