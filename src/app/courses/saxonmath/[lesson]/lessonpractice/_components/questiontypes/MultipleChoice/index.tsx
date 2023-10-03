import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
const MultipleChoice = ({
  question_no = "Q1",
  question = "Add 5+5",
  options = [
    { value: "8", label: "8" },
    { value: "10", label: "10" },
  ],
  value,
  setter,
  hello,
}: any) => {
  return (
    <div>
      {options.map((option: any, index: any) => (
        <div key={index} className="flex gap-[10px]">
          <Checkbox
            id={`${question_no}-${index}`} // Use a unique ID for each checkbox
            onChange={(isChecked) => {
              if (isChecked) {
                // If checkbox is checked, add the value to the selected values
                setter([...value, option.value]);
              } else {
                // If checkbox is unchecked, remove the value from the selected values
                setter(value.filter((val: string) => val !== option.value));
              }
            }}
          />
          <Label
            htmlFor={`${question_no}-${index}`} // Use the same ID as the corresponding checkbox
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {option.label}
          </Label>
        </div>
      ))}
    </div>
  );
};

export default MultipleChoice;
