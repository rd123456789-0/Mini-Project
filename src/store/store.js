import qnaSlice from "./qnaSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    qna: qnaSlice,
  },
});
