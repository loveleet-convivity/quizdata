import React from "react";
import dynamic from "next/dynamic";
import { CalculatorIcon } from "@/app/assets/svgs/svg";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ToolkitSidebar({
  showSidebar,
  setShowSidebar,
  sidebarContent,
  setSidebarContent,
}: any) {
  const getDynamicComponent = (c: any) =>
    dynamic(() => import(`../${c}`), {
      ssr: false,
      loading: () => (
        <p className="flex justify-center h-full items-center text-gray-800 text-[14px] font-[600]">
          Loading...
        </p>
      ),
    });
  let ToolType = getDynamicComponent(sidebarContent);
  return (
    <>
      {showSidebar ? (
        <div className="flex flex-col h-[100vh] max-md:ml-[2.5rem] max-md:z-10 max-md:absolute max-md:w-[calc(100%-40px)]">
          <div className=" bg-gray-200 text-gray-600 leading-5 text-sm font-semibold">
            <Button
              variant="link"
              onClick={() => {
                setShowSidebar(false);
                setSidebarContent("");
              }}
              className="flex gap-[8px] p-2 justify-start hover:no-underline"
            >
              <X />
              Close
            </Button>
          </div>
          <div className=" border-[1px] w-[335px] max-md:w-[100%] h-[100%] bg-white overflow-y-scroll no-scrollbar">
            <ToolType />
          </div>
        </div>
      ) : (
        ""
      )}
    </>

    // <div className='w-[355px] bg-white h-[100vh] overflow-y-scroll'>
    //   <Homework/>
    // </div>
  );
}
