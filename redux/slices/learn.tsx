import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import { Lesson } from "../../utils/types";
import { LESSONS_DATA } from "../../data/lessons";
import { RootState } from "../store";

interface LearnState {
  lessonsData: Lesson[];
}

const initialState: LearnState = {
  lessonsData: LESSONS_DATA,
};

export const lessonsSlice = createSlice({
  name: "Lessons",
  initialState,
  reducers: {
    markLessonAsComplete: (state, action: PayloadAction<Lesson>) => {
      state.lessonsData.forEach((lesson) => {
        if (lesson.id === action.payload.id) {
          lesson.isCompleted = true;
        }
      });
    },
    markLessonAsIncomplete: (state, action: PayloadAction<Lesson>) => {
      state.lessonsData.forEach((lesson, index) => {
        if (lesson.id === action.payload.id) {
          state.lessonsData[index - 1].isCompleted = false;
        }
      });
    },
  },
});

export const { markLessonAsComplete, markLessonAsIncomplete } =
  lessonsSlice.actions;

export const lessonsData = (state: RootState) => state.Lessons.lessonsData;

export default lessonsSlice.reducer;
