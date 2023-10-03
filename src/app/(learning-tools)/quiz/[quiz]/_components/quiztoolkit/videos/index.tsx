import React from "react";
import Videocard from "./videocard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VideosIcon } from "@/app/assets/svgs/svg";

export default function Videos() {
  return (
    <div>
      <div className="flex gap-[4px] items-center px-2 bg-gray-200 pb-4">
        <VideosIcon />
        <span className="text-[#03080E] text-xl font-semibold leading-8">
          Videos
        </span>
      </div>
      <Tabs defaultValue="related" className="">
        <TabsList className="px-2 bg-[#ffffff] w-full grid grid-cols-2">
          <TabsTrigger
            className="data-[state=active]:shadow-lg"
            value="related"
          >
            Related
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:shadow-lg"
            value="videolibrary"
          >
            Video Library
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="related"
          className="h-[80vh] overflow-y-scroll scrollbar-w-6"
        >
          <div className="w-full flex flex-col gap-[0.75rem]">
            <Videocard />
            <Videocard />
            <Videocard />
            <Videocard />
            <Videocard />
          </div>
        </TabsContent>
        <TabsContent
          value="videolibrary"
          className="h-[80vh] overflow-y-scroll scrollbar-w-6"
        >
          <Videocard />
        </TabsContent>
      </Tabs>
    </div>
  );
}
