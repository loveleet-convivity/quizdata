import { PracticeProblemIcon } from "@/app/assets/svgs/svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RefreshCw } from "lucide-react";
import React from "react";

export default function practice() {
  return (
    <div className="flex flex-col ">
      <div className="flex gap-[8px] items-center px-2 bg-gray-200 pb-4">
        <PracticeProblemIcon />
        <span className="text-[#03080E] text-xl font-semibold leading-8">
          Practice Problem
        </span>
      </div>
      <div className="h-[85vh] flex flex-col justify-between">
        <div className="p-4 flex bg-white flex-col gap-[12px]">
          <div className="flex gap-[12px] justify-between">
            <div className="px-4 py-3 border-[1px] rounded-[12px] w-[145px] flex flex-col justify-center">
              <span className="text-[#475467] leading-5 font-semibold text-sm">
                Correct
              </span>
              <span className="text-green-600 text-[24px] font-[700]">7</span>
            </div>
            <div className="px-4 py-3 border-[1px] rounded-[12px] w-[145px] flex flex-col justify-center">
              <span className="text-[#475467] leading-5 font-semibold text-sm">
                Incorrect
              </span>
              <span className="text-red-600 text-[24px] font-[700]">2</span>
            </div>
          </div>
          <div className=" flex flex-col gap-[12px] border-[1px] px-6 py-4">
            <p className="  text-[#03080E] leading-6 text-[16px] font-semibold">
              Question details here dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt.
            </p>
            <div className="flex flex-col gap-[8px]   ">
              <div className="flex flex-col gap-[9px]">
                <span className="text-[#344054] leading-5 font-bold text-sm">
                  Answer
                </span>
                <Input className="border-[1px] p-4 rounded-[8px]" />
                <Button variant="primary" className="rounded-[8px]">
                  Check
                </Button>
                <Button variant="link" className="hover:no-underline">
                  Skip
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Button
          variant="link"
          className="flex hover:no-underline gap-[8px] justify-start px-[1rem]"
        >
          <RefreshCw />
          Start Over
        </Button>
      </div>
    </div>
  );
}
