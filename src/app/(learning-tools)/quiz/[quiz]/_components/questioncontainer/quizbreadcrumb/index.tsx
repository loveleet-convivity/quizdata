import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const QuizBreadcrumb = () => {
  return (
    <div>
      <div className="flex mt-[0.75rem] gap-[0.75rem] text-gray-400 text-[14px] items-center font-[600] max-md:hidden">
        <Button variant="link" className="hover:no-underline p-0 pt-0">
          Courses
        </Button>
        <ChevronRight />
        <Button variant="link" className="hover:no-underline p-0 pt-0">
          Saxon Math 5/4
        </Button>
        <ChevronRight />
        <Button variant="link" className="hover:no-underline p-0 pt-0">
          Lesson 5
        </Button>
        <ChevronRight />
        <Button
          variant="link"
          className="hover:no-underline p-0 pt-0 text-[#0000BF]"
        >
          Lesson Practice
        </Button>
      </div>
      <div>
        <Button className="hidden gap-3 text-gray-600 font-[600] text-[0.875rem]  max-md:flex max-md:items-center">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.8334 6.99984H1.16675M1.16675 6.99984L7.00008 12.8332M1.16675 6.99984L7.00008 1.1665"
              stroke="#475467"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Back
        </Button>
      </div>
    </div>
  );
};

export default QuizBreadcrumb;
