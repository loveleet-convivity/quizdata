import { createSlice } from "@reduxjs/toolkit";
// @ts-ignore
import ReactHtmlParser from "react-html-parser";

const initialState = {
  questionlist: [],
  inputAnswer: null,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setter: (state, action) => {
      state.questionlist = action.payload.map((question: any) => ({
        ...question,
        studentAnswer: [],
        studentAttempts: 0,
        correct: null,
        questionAttempts: 6,
        status:"NEVERATTEMPTED",
      }));
    },
    flagQuestion: (state, action) => {
      const question: any = state.questionlist.find(
        (q: any) => q.id === action.payload.questionId
      );
      if (question && question.status!=="FLAGGED") {
        question.status = "FLAGGED";
      }
      else if(question.studentAttempts===0){
        question.status = "NEVERATTEMPTED";
      }
      else if(question.studentAttempts<question.questionAttempts){
        question.status = "INCORRECT";
      }
    },
    addAnswer: (state, action) => {
      const question: any = state.questionlist.find(
        (q: any) => q.id === action.payload.questionId
      );
      if (question) {
        question.studentAnswer.push(action.payload.value);
        question.studentAttempts += 1;
      }
    },
    setInputAnswer: (state, action) => {
      state.inputAnswer = action.payload;
    },
    checkcorrect: (state, action) => {
      const question: any = state.questionlist.find(
        (q: any) => q.id === action.payload.questionId
      );
      let ans = true;

      switch (question?.type) {
        case "single":
          question.answer.find(
            (ans: any) => ans._answer === action.payload.value
          )?._correct
            ? (question.status = "CORRECT")
            : (question.status = "INCORRECT");
          break;
        case "cloze_answer":
          const qst = question?.answer[0]._answer;
          let matches = qst
            .match(/\{(.*?)\}/g)
            .map((val: any) => val.replace("{", "").replace("}", ""));
          let subMatches: any = [];
          let otherQVal: any = [];
          let otherMatches =
            matches && matches.length > 0
              ? matches.map((str: any) => {
                  const strMatch = str.match(/\[(.*?)\]/g);
                  if (!strMatch) {
                    subMatches.push({
                      type: "string",
                      val: String(ReactHtmlParser(str)[0]).toLowerCase().trim(),
                    });
                  }
                  if (strMatch && strMatch.length > 0) {
                    strMatch.map((val: any) =>
                      otherQVal.push(
                        String(
                          val.replace("[", "").replace("]", "")
                        ).toLowerCase()
                      )
                    );
                    subMatches.push({
                      type: "array",
                      val: otherQVal.map((val: any) =>
                        String(ReactHtmlParser(val)[0]).toLowerCase().trim()
                      ),
                    });
                    otherQVal = [];
                  }
                  return str;
                })
              : [];
          let qCheck = true;
          if (
            subMatches.length === action.payload.value.length &&
            otherMatches
          ) {
            subMatches.forEach((match: any, i: any) => {
              if (
                match.type === "string" &&
                String(action.payload.value[i]).toLowerCase().trim() ===
                  match.val &&
                qCheck
              ) {
                qCheck = true;
              } else if (
                match.type === "array" &&
                match.val.includes(
                  String(action.payload.value[i]).toLowerCase().trim() || ""
                ) &&
                qCheck
              ) {
                qCheck = true;
              } else {
                qCheck = false;
              }
            });
          } else if (subMatches.length !== action.payload.value.length) {
            qCheck = false;
          }
          ans = qCheck;
          question.status = ans?"CORRECT":"INCORRECT";
          break;
        case "free_answer":
          let answer =
            question.answer[0] && question.answer[0]._answer
              ? question.answer[0]._answer
              : "";
          let answerValues = answer.trim().split("\n");
          ans = false;
          answerValues.forEach((ansVal: any) => {
            if (
              !ans &&
              String(ansVal).toLowerCase().trim() ===
                String(action.payload.value).toLowerCase().trim()
            ) {
              ans = true;
            }
          });
          question.status = ans?"CORRECT":"INCORRECT";
          break;
        case "sort_answer":
          let answerarray = question.answer?.map((item: any) => item._answer);
          answerarray.every(
            (element: any, index: any) =>
              element === action.payload.value[index]
          )
            ? (question.status = "CORRECT")
            : (question.status = "INCORRECT");
          break;
        case "multiple":
          let checkMultiple = "";
          let correntAns = question?.answer
            .filter((ans: any) => ans._correct)
            .map((obj: any) => obj._answer.trim());
          if (correntAns && correntAns.length === action.payload.value.length) {
            checkMultiple = correntAns.find(
              (ans: any) => !action.payload.value.includes(ans.trim())
            );
          }
          ans = checkMultiple === undefined ? true : false;
          question.status = ans?"CORRECT":"INCORRECT";
          break;
        case "matrix_sort_answer":
          let userdata = action.payload.value?.map((data: any) =>
            data.text.trim()
          );
          let correctAns = question?.answer?.map((data: any) =>
            data._sortString.trim()
          );
          if (correctAns && correctAns.length === userdata.length) {
            correctAns.every(
              (element: any, index: any) => element === userdata[index]
            )
              ? (question.status = "CORRECT")
              : (question.status = "INCORRECT");
          }
      }
    },
  },
});

export const { setter, flagQuestion, addAnswer, checkcorrect, setInputAnswer } =
  quizSlice.actions;
export const quizSelector = (state: any) => state.quiz;
export default quizSlice.reducer;
