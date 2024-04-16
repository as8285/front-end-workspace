import { configureStore } from "@reduxjs/toolkit";
import counter from "./counter";
// counter에 정의  해놓은걸 입력 한다. counter.js
const store = configureStore({
  reducer: {
    counter: counter.reducer,
  },
});

export default store;
