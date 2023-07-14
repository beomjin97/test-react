import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";

  const [isDisable, setIsDisable] = useState(false);

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={isDisable}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        onChange={(e) => {
          setIsDisable(e.target.checked);
        }}
      />
    </div>
  );
}

export default App;
