import { fireEvent, screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import LanguageSelector from "./LanguageSelector";

describe("LanguageSelector component", () => {
  it("Should open and close language list when button is clicked", () => {
    render(<LanguageSelector />);

    expect(screen.queryByTestId("dropdown-lng-list")).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button"));
    expect(screen.queryByTestId("dropdown-lng-list")).toBeVisible();

    fireEvent.click(screen.getByRole("button"));
    expect(screen.queryByTestId("dropdown-lng-list")).not.toBeInTheDocument();
  });

  it("Should switch the language when a language is selected", () => {
    render(<LanguageSelector />);

    fireEvent.click(screen.getByRole("button"));
    expect(screen.queryByTestId("dropdown-lng-list")).toBeVisible();

    expect(screen.queryByTestId("dropdown-btn-pt")).toBeVisible();
    fireEvent.click(screen.queryByTestId("dropdown-btn-pt"));
    expect(screen.queryByTestId("dropdown-lng-list")).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button"));
    expect(screen.queryByTestId("dropdown-lng-list")).toBeVisible();

    expect(screen.queryByTestId("dropdown-btn-en")).toBeVisible();
    fireEvent.click(screen.queryByTestId("dropdown-btn-en"));
    expect(screen.queryByTestId("dropdown-lng-list")).not.toBeInTheDocument();
  });
});
