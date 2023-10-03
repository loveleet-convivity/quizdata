import React, { useState } from "react";

function FillInTheBlank({ hello }: any) {
  // State to store the user's answers as an array
  const [userAnswers, setUserAnswers] = useState([]);

  // Regular expression to match placeholders inside curly braces
  const placeholderRegex = /\{(\d+(?:\.\d+)?)\}/g;

  // Function to replace placeholders with input fields and handle input changes
  const replacePlaceholders = (question: any) => {
    let lastIndex = 0;
    const inputFields = [];
    const matches: any = [];

    // Find all matches and their indices
    question.replace(placeholderRegex, (match: any, index: any) => {
      matches.push(match);
    });

    // Split the question based on matches and add input fields
    for (let i = 0; i < matches.length; i++) {
      const match: any = matches[i];
      const index = question.indexOf(match, lastIndex);
      const beforeText = question.substring(lastIndex, index);
      if (beforeText) {
        inputFields.push(beforeText);
      }

      const placeholderValue = match.replace("{", "").replace("}", "");
      inputFields.push(
        <input
          key={i}
          type="text"
          placeholder="Enter your answer"
          value={userAnswers[i] || ""}
          onChange={(e) => handleInputChange(e, i)}
        />
      );

      lastIndex = index + match.length;
    }

    // Add any remaining text after the last placeholder
    const remainingText = question.substring(lastIndex);
    if (remainingText) {
      inputFields.push(remainingText);
    }

    return inputFields;
  };

  // Function to handle input changes and update userAnswers
  const handleInputChange = (event: any, index: any) => {
    const newValue = event.target.value;
    setUserAnswers((prevAnswers) => {
      const newAnswers: any = [...prevAnswers];
      newAnswers[index] = newValue;
      return newAnswers;
    });
  };

  const question = "5 + 6 = {11} {5} + 6 = {11.00}";

  return (
    <div>
      <p>{replacePlaceholders(question)}</p>
      {/* <p>Your answers: {userAnswers.join(", ")}</p> */}
    </div>
  );
}

export default FillInTheBlank;
