import React from "react";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const SidebarNavigation = () => {
  return (
    <div className="text-gray-600 text-[1rem] px-[1rem] py-[0.5rem] gap-[0.25rem] font-[400] items-center flex p-2 bg-gray-50 border-y-[0.0625rem] border-gray-200">
      <Button className="p-0">
        <ChevronLeft />
        Lesson 5
      </Button>
    </div>
  );
};

export default SidebarNavigation;
