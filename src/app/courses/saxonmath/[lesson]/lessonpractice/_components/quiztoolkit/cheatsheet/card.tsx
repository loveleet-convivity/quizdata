import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowDownToLine, File } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function card() {
  return (
    <div>
      <Card className="w-[303px] mx-auto rounded-[0.75rem] overflow-hidden border-[#F7F5F1] ">
        <CardContent className="bg-[#FBFAF8] flex items-center gap-[12px] px-3 py-2">
          <div className="bg-[#F7F5F1] h-[2.5rem] w-[2.5rem] rounded-[50%] p-[0.25rem]">
            <div className="h-full w-full rounded-[50%] bg-[#EBE6DC] flex justify-center items-center">
              <File color="#6E6960" />
            </div>
          </div>
          <div className="flex flex-col gap-[2px]">
            <p className="text-sm font-semibold leading-5 text-gray-600">
              Document Name here.PDF
            </p>
            <span className="text-gray-400 leading-5 text-xs font-[400] ">
              256mbs
            </span>
          </div>
          <Button className="p-0">
            <ArrowDownToLine />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
