import { Button } from "@/components/ui/button";
import CircularProgress from "@/components/ui/circularprogress";
import { Bookmark, Check, X } from "lucide-react";

export default function QuestionListItems({ data, setter }: any) {
  return (
    <Button
      onClick={() => setter(data)}
      className=" max-lg:w-auto border-[0.0625rem] border-gray-200  rounded-[0.25rem] py-[0.5rem] pl-[0.75rem] pr-[0.5rem] flex justify-between max-md:gap-[1.5rem]"
    >
      <div className="flex items-center gap-1.5">
        {data.progress === "done" ? (
          <Check color="#3BD6B0" />
        ) : data.attempts === 6 ? (
          <X color="#E95C51" />
        ) : (
          <CircularProgress progress={(data.attempts / 6) * 100} />
        )}
        {data.id}
      </div>

      {data.isflag && data.progress !== "done" ? (
        <Bookmark fill="#F6B14D" color="#F6B14D" />
      ) : null}
    </Button>
  );
}
