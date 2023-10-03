import { FormEvent, useEffect, useState } from "react";

function Equation({ hello }: any) {
  const [mathModule, setMathModule] = useState(null);

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
  const [value, setValue] = useState("");
  const handleInputChange = (evt: FormEvent<HTMLInputElement>) => {
    const newValue = evt.currentTarget.value;
    setValue(newValue);
  };
  return (
    <div className="App">
      <math-field
        className="block"
        style={{ display: "block" }}
        onInput={(evt) => handleInputChange(evt)}
      >
        {value}
      </math-field>
    </div>
  );
}

export default Equation;
