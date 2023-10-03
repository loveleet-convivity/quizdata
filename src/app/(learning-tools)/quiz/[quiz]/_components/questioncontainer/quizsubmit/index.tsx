import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertOctagon, Rocket } from "lucide-react";

const QuizSubmit = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="link"
          className="py-[0.5rem] hover:no-underline gap-2 flex px-[0.875rem] rounded-[0.5rem] font-[600] text-[0.875rem] text-[#0000BF] bg-[#E5E5FF] max-md:w-full"
        >
          Submitting the Final Grading
          <Rocket />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white sm:rounded-[0.5rem]">
        <DialogHeader className="gap-[0.75rem]">
          <div className="h-[3rem] w-[3rem] bg-[#FEF3F2] rounded-[50%] p-[0.5rem]">
            <div className="bg-[#FEE4E2] w-full h-full rounded-[50%] flex justify-center items-center">
              <AlertOctagon color="#E95C51" />
            </div>
          </div>
          <DialogTitle>Submit for final grading?</DialogTitle>
          <DialogDescription>
            You have 7 unanswered questions. Do you want to submit anyway?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-between">
          <Button
            variant="outline"
            className="w-full rounded-[0.5rem] border-[#D0D5DD]"
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            type="submit"
            className="w-full rounded-[0.5rem]"
          >
            Confirm and Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default QuizSubmit;
