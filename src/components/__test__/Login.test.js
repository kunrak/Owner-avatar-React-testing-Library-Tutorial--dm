import { render, screen } from "@testing-library/react";
import { Login, validateEmail } from "../Login";

describe("Test the Login Component", () => {
  test("render the login form with 2 buttons", async () => {
    render(<Login />);
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(2);
  });

  test("should fail on email validation", () => {
    const testEmail = "rakesh.com";
    expect(validateEmail(testEmail)).not.toBe(true);
  });
});
