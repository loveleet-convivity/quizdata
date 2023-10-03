import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import React from "react";

export default function homeworkrightbar() {
  return (
    <div className=" p-6 flex flex-col gap-[12px] border-[1px]  ">
      <div className="text-[#03080E] font-semibold text-[24px] leading-8">
        Homework Help
      </div>
      <div className="text-[16px] leading-6 text-[#465F82]">
        Have you checked the solutions manual yet? If not, please take a look
        before posting. Let us know which part of the problem you're struggling
        with, and we'll help you out.
      </div>
      <div className="flex flex-col">
        <div>Discussion Title</div>
        <Input
          placeholder="enter here ... "
          className="p-4 rounded-[8px] border-[1px]"
        ></Input>
      </div>
      <div className="flex flex-col">
        <div>Message</div>
        <Textarea
          placeholder="leave a message..."
          className="rounded-[8px]"
        ></Textarea>
      </div>
      <div className="bg-gray-200 flex flex-col items-center gap-[16px] px-6 py-4 rounded-[8px]">
        <svg
          width="47"
          height="46"
          viewBox="0 0 47 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="3.5" y="3" width="40" height="40" rx="20" fill="#F2F4F7" />
          <path
            d="M20.166 26.3333L23.4993 23M23.4993 23L26.8327 26.3333M23.4993 23V30.5M30.166 26.9524C31.1839 26.1117 31.8327 24.8399 31.8327 23.4167C31.8327 20.8854 29.7807 18.8333 27.2493 18.8333C27.0673 18.8333 26.8969 18.7383 26.8044 18.5814C25.7177 16.7374 23.7114 15.5 21.416 15.5C17.9642 15.5 15.166 18.2982 15.166 21.75C15.166 23.4718 15.8622 25.0309 16.9885 26.1613"
            stroke="#475467"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <rect
            x="3.5"
            y="3"
            width="40"
            height="40"
            rx="20"
            stroke="#F9FAFB"
            stroke-width="6"
          />
        </svg>
        <div className="text-gray-600 text-sm">
          <Link href="/quiziconsidebar" className="text-blue-400 text-sm">
            Click to upload
          </Link>{" "}
          or drag and drop{" "}
        </div>
        <div className="text-[12px] leading-5 text-gray-600">
          SVG, PNG, JPG or GIF (max. 800x400px)
        </div>
      </div>
      <div className="flex gap-[8px]">
        <Checkbox className="rounded-[3px]" />
        <div className="flex flex-col gap-[4px]">
          <div className="font-bold leading-5 text-sm text-gray-700">
            Notify me of replies via email
          </div>
          <div className=" leading-5 text-sm text-gray-600">
            Other content here
          </div>
        </div>
      </div>
      <div className="flex gap-[8px]">
        <Checkbox className="rounded-[3px]" />
        <div className="font-bold leading-5 text-sm text-gray-700">
          You agree to be our friend
          <Link href="/">
            {" "}
            <u>privacy policy</u>
          </Link>
        </div>
      </div>
      <div className="flex-end mt-[32px]">
        <div className="flex flex-col  gap-[8px] ">
          <Button className="bg-blue-700 rounded-[8px]">send </Button>
          <Button className="bg-gray-200 rounded-[8px]">cancel</Button>
        </div>
      </div>
    </div>
  );
}
