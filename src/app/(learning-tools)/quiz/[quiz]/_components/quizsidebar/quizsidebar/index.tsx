import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { useState, useRef, useLayoutEffect } from "react";
import QuestionList from "../questionlist";
import { Badge } from "@/components/ui/badge";
import { useSelector } from "react-redux";
import { quizSelector } from "@/app/state/slices/quizSlice";

export default function QuizSidebar({ btn, setter, children }: any) {
  const window = useWindowDimensions();
  const { questionlist } = useSelector(quizSelector);
  const ref: any = useRef(null);
  const [height, setHeight] = useState(0);
  useLayoutEffect(() => {
    setHeight(ref.current.offsetHeight);
  }, []);
  const isMobile = window.width < 768;

  return (
    <div
      className="bg-white max-md:absolute w-[25rem] z-10 overflow-hidden max-md:w-screen max-md:z-20"
      style={
        isMobile ? { height: `calc(100vh - ${btn}px)` } : { height: "100vh" }
      }
    >
      <div ref={ref}>
        {children}
        <div className="px-[1rem] pt-[0.5rem] border-r">
          <p className="text-[#03080E] text-[1.125rem] font-[600]">
            Assignment title here
          </p>
          <div className="flex justify-between text-[0.875rem] max-md:w-[100%] text-gray-600 font-[600] py-2">
            Questions:
            <Badge className=" bg-gray-100 text-gray-600 text-[0.75rem] font-[600]">
              {questionlist.length} Questions
            </Badge>
          </div>
        </div>
      </div>
      <div
        className="max-md:pl-[2rem] px-[1rem] pb-3 border-r overflow-y-scroll scrollbar-w-6"
        style={
          isMobile
            ? { height: window.height - height - btn }
            : { height: window.height - height }
        }
      >
        <QuestionList setter={setter} />
      </div>
    </div>
  );
}
