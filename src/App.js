import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  const [isDisable, setIsDisable] = useState(false);

  return (
    <div>
      <button
        style={{ backgroundColor: isDisable ? "gray" : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={isDisable}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={isDisabled}
        onChange={(e) => {
          setIsDisable(e.target.checked);
        }}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
