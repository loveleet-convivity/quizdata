"use client";
import { quizSelector, setInputAnswer } from "@/app/state/slices/quizSlice";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useDispatch, useSelector } from "react-redux";

export default function SingleChoiceQuestion({ currentQuestion }: any) {
  const dispatch = useDispatch();
  const handleOptionChange = (value: any) => {
    dispatch(setInputAnswer(value));
  };
  const { questionlist, inputAnswer } = useSelector(quizSelector);
  const question = questionlist.find((q: any) => q.id === currentQuestion);
  return (
    <div>
      <RadioGroup onValueChange={handleOptionChange}>
        {question?.answer?.map((answerdata: any, index: any) => (
          <div className="flex items-center space-x-2" key={index}>
            <RadioGroupItem
              id={`radio-${index}`}
              value={question?.status==="CORRECT" ? inputAnswer : answerdata._answer}
              checked={inputAnswer === answerdata._answer}
              // onChange={handleOptionChange}
              disabled={
                question?.status==="CORRECT" ||
                question.status==="FLAGGED" ||
                question.studentAttempts >= question.questionAttempts
              }
            />
            <Label htmlFor={`radio-${index}`}>{answerdata._answer}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
