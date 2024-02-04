import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  qna: [],
};

export const qnaSlice = createSlice({
  name: "qna",
  initialState,
  reducers: {
    updateQnaList: function (state, action) {
        return { qna:  action.payload.qna }
    },
  },
});

export const { updateQnaList } = qnaSlice.actions;

const qnaReducer = qnaSlice.reducer;
export default qnaReducer;
