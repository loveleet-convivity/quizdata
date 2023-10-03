"use client";
import React, { useState } from "react";
import { evaluate } from "mathjs";
import { Button } from "@/components/ui/button";

const page = ({ change }: any) => {
  const [expression, setExpression] = useState("");
  const [equal, setEqual] = useState("");

  const handleClick = (value: any) => {
    setExpression((prev) => prev + value);
  };

  const handleClear = () => {
    setExpression("");
    setEqual("");
  };
  const handledelete = () => {
    const str = expression.substring(0, expression.length - 1);
    setExpression(str);
  };

  const handleCalculate = () => {
    try {
      const result = evaluate(expression);
      setEqual(result.toString());
    } catch (error) {
      setEqual("Error");
    }
  };

  return (
    <div
      className={`flex flex-col gap-[0.75rem] w-full mx-auto px-[1rem] pt-[2.5rem] pb-[1rem] bg-[#000040] rounded-[0.5rem] text-white`}
    >
      <div className="flex flex-col">
        <input
          className="bg-[#000040] text-[1.5rem] font-[400] text-right"
          type="text"
          value={expression}
          onChange={(e) => setExpression(e.target.value)}
        />
        <input
          className="bg-[#000040] text-[3rem] font-[400] text-right"
          type="text"
          value={equal}
        />
      </div>
      <div className="grid gap-x-[0.5rem] gap-y-[0.75rem] grid-rows-8 grid-cols-4">
        {change == "sci" && (
          <>
            <Button
              className="bg-[#8080FF]"
              onClick={() => handleClick("e")}
              variant="primary"
            >
              e
            </Button>
            <Button
              className="bg-[#8080FF]"
              onClick={() => handleClick("^")}
              variant="primary"
            >
              ^
            </Button>
            <Button
              className="bg-[#8080FF]"
              onClick={() => handleClick("sin(")}
              variant="primary"
            >
              sin
            </Button>
            <Button
              className="bg-[#8080FF]"
              onClick={() => handleClick("cos(")}
              variant="primary"
            >
              cos
            </Button>
            <Button
              className="bg-[#8080FF]"
              onClick={() => handleClick("tan(")}
              variant="primary"
            >
              tan
            </Button>
            <Button
              className="bg-[#8080FF]"
              onClick={() => handleClick("inv(")}
              variant="primary"
            >
              Inv
            </Button>
            <Button
              className="bg-[#8080FF]"
              onClick={() => handleClick("sqrt(")}
              variant="primary"
            >
              √
            </Button>
            <Button
              className="bg-[#8080FF]"
              onClick={() => handleClick("square(")}
              variant="primary"
            >
              x^2
            </Button>
            <Button
              className="bg-[#8080FF]"
              onClick={() => handleClick("pi")}
              variant="primary"
            >
              Pi
            </Button>
            <Button
              className="bg-[#8080FF]"
              onClick={() => handleClick("log(")}
              variant="primary"
            >
              log
            </Button>
            <Button
              className="bg-[#8080FF]"
              onClick={() => handleClick("(")}
              variant="primary"
            >
              (
            </Button>
            <Button
              className="bg-[#8080FF]"
              onClick={() => handleClick(")")}
              variant="primary"
            >
              )
            </Button>
          </>
        )}
        <Button onClick={() => handleClear()} variant="continuebtn">
          AC
        </Button>
        <Button onClick={() => handledelete()} variant="continuebtn">
          ←
        </Button>
        <Button onClick={() => handleClick("/")} variant="continuebtn">
          /
        </Button>
        <Button onClick={() => handleClick("*")} variant="continuebtn">
          *
        </Button>
        <Button onClick={() => handleClick("7")} variant="primary">
          7
        </Button>
        <Button onClick={() => handleClick("8")} variant="primary">
          8
        </Button>
        <Button onClick={() => handleClick("9")} variant="primary">
          9
        </Button>
        <Button onClick={() => handleClick("-")} variant="continuebtn">
          -
        </Button>
        <Button onClick={() => handleClick("4")} variant="primary">
          4
        </Button>
        <Button onClick={() => handleClick("5")} variant="primary">
          5
        </Button>
        <Button onClick={() => handleClick("6")} variant="primary">
          6
        </Button>
        <Button onClick={() => handleClick("+")} variant="continuebtn">
          +
        </Button>
        <Button onClick={() => handleClick("1")} variant="primary">
          1
        </Button>
        <Button onClick={() => handleClick("2")} variant="primary">
          2
        </Button>
        <Button onClick={() => handleClick("3")} variant="primary">
          3
        </Button>
        <Button
          className="row-span-2 h-full"
          onClick={() => handleCalculate()}
          variant="continuebtn"
        >
          =
        </Button>
        <Button
          className="col-span-2"
          onClick={() => handleClick("0")}
          variant="primary"
        >
          0
        </Button>
        <Button onClick={() => handleClick(".")} variant="primary">
          .
        </Button>
      </div>
    </div>
  );
};

export default page;
