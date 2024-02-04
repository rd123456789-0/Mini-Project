import qnaSlice from "./qnaSlice";
import { configureStore } from "@reduxjs/toolkit";

// const { configureStore } = require("@reduxjs/toolkit");

export default configureStore({
  reducer: {
    qna: qnaSlice,
  },
});
