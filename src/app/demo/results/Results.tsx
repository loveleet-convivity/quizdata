import { Button } from "@/components/Button";
import Badge from "../Quiz/Badge";
import Questioncard from "./Questioncard";
import { ChevronRight, ChevronDown } from "lucide-react";
import Attemptcard from "./Attemptcard";
export default function Results({ show }) {
  console.log(show);
  return (
    <div
      className={`flex flex-col mt-10 max-w-[64rem] max-md:w-[100%] mx-auto w-[100%] h-[88vh] overflow-y-scroll no-scrollbar  max-md:left-0 max-md:h-[95vh] ${
        show === false ? "flex" : "max-md:hidden "
      }`}>
      <path className="flex gap-[0.75rem] text-[#475467] text-[14px] font-[600] max-md:hidden">
        <p>Dashboard</p>
        <ChevronRight height={"16px"} width={"16px"} color="#98A2B3" />

        <p>My Courses</p>
        <ChevronRight height={"16px"} width={"16px"} color="#98A2B3" />
        <p className="hover:text-[#0000BF]">Lesson Practice</p>
      </path>
      <p className="hidden px-5 gap-3 text-gray-600 font-[600] text-[0.875rem]  max-md:flex">
        <ChevronRight height={"16px"} width={"16px"} color="#98A2B3" />
        Back
      </p>
      <div className="my-auto mx-auto px-10">
        <div className="flex justify-between">
          <p className="font-[700] text-[1.5rem] text-[#03080E]">Results</p>
          <Button className="text-gray-600 border-none shadow-none font-[600] text-[0.875rem] flex gap-[0.5rem]">
            Version three
            <ChevronDown width={"15px"} />
          </Button>
        </div>
        <div className="flex gap-[20px] w-[100%] max-md:flex-col">
          <Attemptcard />
          <Attemptcard />
          <Attemptcard />
        </div>
        <div className="flex flex-wrap gap-[1rem] py-6 ">
          <Badge />
          <Badge />
          <Badge />
          <Badge />
          <Badge />
          <Badge />
          <Badge />
          <Badge />
          <Badge />
          <Badge />
        </div>
        <div className="border-b-[1px] border-[#EBE6DC]">
          <Questioncard />
          <Questioncard />
          <Questioncard />
          <Questioncard />
          <Questioncard />
        </div>
      </div>
    </div>
  );
}
