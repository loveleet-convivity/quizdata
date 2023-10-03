import { FormEvent, useEffect, useRef, useState } from "react";
import { ComputeEngine } from "@cortex-js/compute-engine";
import { MathfieldElement } from "mathlive";
import { useSelector } from "react-redux";
import { quizSelector } from "@/app/state/slices/quizSlice";

function Equation({ data }: any) {
  const ce = new ComputeEngine();
  const { questionlist } = useSelector(quizSelector);
  const question = questionlist[7]?.answer[0]?._answer;
  const found = question?.includes("placeholder");
  console.log(found, "<<<<<<typefound");

  const mf: any = useRef();

  const [mathModule, setMathModule] = useState(null);

  const [value, setValue] = useState("");

  // Customize the mathfield when it is created
  useEffect(() => {
    let parsedVal = MathfieldElement?.computeEngine?.parse(question);
    console.log("mf", mf?.current?.expression?.isSame(parsedVal));
    console.log("cur", mf?.current?.value);
    console.log("question", question);
    console.log("getstate", mf?.current?.getAllPrompts());
    // console.log(
    // //   "mf.current.expression",
    // //   mf.current.value,
    // //   "value",
    // //   value,
    // //   "mf.current.value==value",
    // //   mf.current.value.toString() == value.toString()
    // // );
  }, [value]);

  useEffect(() => {
    async function loadMathModule() {
      try {
        // Dynamically import the mathlive module
        // @ts-ignore
        const mathLiveModule = await import("https://unpkg.com/mathlive");

        // Set the math module in state
        setMathModule(mathLiveModule);

        // Now you can use mathLiveModule for further processing
      } catch (error) {
        console.error("Error loading mathlive module:", error);
      }
    }

    // Call the function to load the module
    loadMathModule();
  }, []);
  const handleInputChange = (evt: FormEvent<HTMLInputElement>) => {
    const newValue = evt.currentTarget.value;
    setValue(newValue);
  };
  return (
    <div className="App">
      {question && (
        <math-field
          readOnly
          ref={mf}
          className="block"
          style={{ display: "block" }}
          onInput={(evt) => handleInputChange(evt)}
        >
          {found ? question : value}
        </math-field>
      )}
    </div>
  );
}

export default Equation;
