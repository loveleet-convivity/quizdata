"use client";
import { combineReducers } from "redux";
import { apiSlice } from "./slices/apiSlice";
import toggleSliceReducer from "./slices/toggleSlice";
import quizReducer from "./slices/quizSlice";

const combinedReducers = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  quiz: quizReducer,
  toggle: toggleSliceReducer,
});
// console.log("combinedReducers", apiSlice.useGetLessonQuery);
export default combinedReducers;
