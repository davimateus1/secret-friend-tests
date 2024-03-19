import { UserForm } from "../components";
import { render, screen } from "@testing-library/react";

describe("UserForm", () => {
  it("Should be able to dont add new participant if input is empty", () => {
    render(<UserForm />);

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const button = screen.getByRole("button");

    expect(input).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
});
