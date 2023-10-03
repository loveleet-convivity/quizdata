import React from "react";
import { Label } from "@/components/ui/label";
import * as Switch from "@radix-ui/react-switch";
import QuizSubmit from "../quizsubmit";

const QuizFooter = () => {
  return (
    <footer className="flex px-[1rem] py-[0.75rem] justify-between max-w-[1440px] bg-white border-t-[0.0625rem] border-gray-200 max-md:flex-col-reverse max-md:gap-[0.5rem] items-center md:-ml-14">
      <div className="flex items-center gap-[0.5rem]">
        <Switch.Root
          className="w-[42px] h-[25px] rounded-full relative data-[state=checked]:bg-[#0000BF] bg-gray-200 outline-none cursor-default"
          id="sound-mode"
        >
          <Switch.Thumb className="flex items-center justify-center w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA7 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.87395 2.49996C10.5826 3.48508 11 4.69378 11 5.99996C11 7.30615 10.5826 8.51485 9.87395 9.49996M7.87266 3.99996C8.26809 4.56688 8.5 5.25634 8.5 5.99996C8.5 6.74359 8.26809 7.43305 7.87266 7.99996M4.81716 2.68281L3.23431 4.26565C3.14784 4.35213 3.1046 4.39536 3.05414 4.42628C3.00941 4.4537 2.96063 4.4739 2.90962 4.48615C2.85207 4.49996 2.79092 4.49996 2.66863 4.49996H1.8C1.51997 4.49996 1.37996 4.49996 1.273 4.55446C1.17892 4.6024 1.10243 4.67889 1.0545 4.77297C1 4.87992 1 5.01994 1 5.29996V6.69996C1 6.97999 1 7.12 1.0545 7.22696C1.10243 7.32104 1.17892 7.39753 1.273 7.44547C1.37996 7.49996 1.51997 7.49996 1.8 7.49996H2.66863C2.79092 7.49996 2.85207 7.49996 2.90962 7.51378C2.96063 7.52603 3.00941 7.54623 3.05414 7.57364C3.1046 7.60457 3.14784 7.6478 3.23431 7.73428L4.81716 9.31712C5.03135 9.53131 5.13844 9.6384 5.23039 9.64564C5.31016 9.65192 5.38813 9.61963 5.4401 9.55877C5.5 9.48864 5.5 9.33719 5.5 9.03428V2.96565C5.5 2.66274 5.5 2.51129 5.4401 2.44115C5.38813 2.3803 5.31016 2.34801 5.23039 2.35429C5.13844 2.36152 5.03135 2.46862 4.81716 2.68281Z"
                stroke="#465F82"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Switch.Thumb>
        </Switch.Root>
        <Label
          htmlFor="sound-mode"
          className="text-[0.875rem] font-[400] text-[#03080E]"
        >
          Correct answer sound on
        </Label>
      </div>
      <QuizSubmit />
    </footer>
  );
};

export default QuizFooter;
