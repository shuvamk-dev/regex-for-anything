import { configureStore } from "@reduxjs/toolkit";

import lessonReducer from "../slices/learn";

export const store = configureStore({
  reducer: {
    Lessons: lessonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
