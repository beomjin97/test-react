import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from "./App";

test("버튼의 초기색상과 클릭시에 변경된 색상 테스트", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  expect(colorButton).toHaveStyle({
    backgroundColor: "red",
  });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  expect(colorButton).toHaveTextContent("Change to red");
});

test("초기 조건", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("체크박스 선택시 버튼 비활성화", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const button = screen.getByRole("button", { name: "Change to blue" });

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

test("disable 버튼은 gray 배경색을 갖고 있고 red로 바뀜", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color: gray");

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color: red");
});

test("gray 배경색을 가지고 있는 disabled button이 클릭되면 blue로 전환됨", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  fireEvent.click(colorButton);

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color: gray");

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle("background-color: blue");
});

describe("spaces before camel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });

  test("Works for on inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Works for multiple inner capital letter", () => {
    expect(replaceCamelWithSpaces("MediumVoiletRed")).toBe("Medium Voilet Red");
  });
});
