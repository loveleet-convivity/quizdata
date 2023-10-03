"use client";
import React, { useState } from "react";
// import { useQuery } from "react-query";
// import { getQuiz } from "../hooks/getquiz";
// import SingleChoice from "./questiontypes/SingleChoice";
import MultipleChoice from "../../_components/questiontypes/multiple";
import SimpleInput from "../../_components/questiontypes/SimpleInput";
import FillInTheBlank from "../../_components/questiontypes/cloze_answer";
import SortingQuestion from "../../_components/questiontypes/sort_answer";
import MatrixSortingQuestion from "../../_components/questiontypes/matrix_sort_answer";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import MathLiveComponent from "../../_components/questiontypes/Equation";
import FreeChoice from "../../_components/questiontypes/free_answer";
const QuizData = ({ id }: any) => {
  //   const { isLoading, isError, data, error } = useQuery({
  //     queryKey: "sas",
  //     queryFn: () => getQuiz(id),
  //     suspense: true,
  //   });
  const [value, setValue] = useState("10");
  const [selectedOption, setSelectedOption] = useState("10"); // Set the initial selected option

  const [latex, setLatex] = React.useState("f(x)=\\log _10 x");

  const options = [
    { value: "8", label: "8" },
    { value: "10", label: "10" },
  ];

  const [selectedOptions, setSelectedOptions] = useState([]); // Initialize with an empty array for multiple choices

  const handleSelectionChange = (newSelectedOptions: any) => {
    setSelectedOptions(newSelectedOptions);
  };

  return (
    <>
      {/* {data?.map((item: any) => {
        return <p>{JSON.stringify(item)}</p>;
      })} */}
      {/* <SingleChoice setter={setValue} value={value} /> */}
      {/* {value} */}
      {/* <MultipleChoice
        question_no="Q1"
        question="Select all even numbers:"
        options={[
          { value: "2", label: "2" },
          { value: "4", label: "4" },
          { value: "6", label: "6" },
          { value: "8", label: "8" },
        ]}
        value={selectedOptions}
        setter={handleSelectionChange}
      />

      <h2>Selected Options:</h2>
      <ul>
        {selectedOptions.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ul> */}
      {/* <SimpleInput />
      <FillInTheBlank />
      <SortingQuestion /> */}
      {/* <MatchTheFollowing /> */}
      {/* <DndProvider backend={HTML5Backend}>
        <div className="App"> */}
      <MatrixSortingQuestion />
      {/* <FreeChoice /> */}
      {/* </div> */}
      {/* // </DndProvider> */}
      {/* <MathLiveComponent/> */}
    </>
  );
};

export default QuizData;
