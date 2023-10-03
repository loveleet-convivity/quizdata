import { setInputAnswer } from "@/app/state/slices/quizSlice";
import { Button } from "@/components/ui/button";
import CircularProgress from "@/components/ui/circularprogress";
import { Bookmark, Check, X } from "lucide-react";
import { useDispatch } from "react-redux";

export default function QuestionListItems({ data, setter }: any) {
  const dispatch = useDispatch();

  const handleClick = (questionId: any) => {
    setter(questionId);
    dispatch(
      setInputAnswer(
        data.studentAttempts > 0 ? data.studentAnswer[data.studentAttempts - 1] : null
      )
    );
  };
  return (
    <Button
      onClick={() => handleClick(data.id)}
      className=" max-lg:w-auto border-[0.0625rem] border-gray-200  rounded-[0.25rem] py-[0.5rem] pl-[0.75rem] pr-[0.5rem] flex justify-between max-md:gap-[1.5rem]"
    >
      <div className="flex items-center gap-1.5 text-black">
        {data.status==="CORRECT" ? (
          <Check color="#3BD6B0" />
        ) : data.studentAttempts === data.questionAttempts ? (
          <X color="#E95C51" />
        ) : (
          <CircularProgress progress={(data.studentAttempts / data.questionAttempts) * 100} />
        )}
        {data.title.split("Q")[1]}
      </div>

      {data.status==="FLAGGED" ? (
        <Bookmark fill="#F6B14D" color="#F6B14D" />
      ) : null}
    </Button>
  );
}
