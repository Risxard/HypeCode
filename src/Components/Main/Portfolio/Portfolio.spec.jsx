import { render, screen, waitFor } from "@testing-library/react";
import Portfolio from "./Portfolio";

jest.mock("../../../lib/dato-cms");

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key) => {
      if (key === "portfolio") {
        return { title: "Portfolio", text: "Check out our awesome projects!" };
      }
      return key;
    },
    i18n: { language: "en" },
  }),
}));

describe("Portfolio Component", () => {
  it("should render portfolio projects", async () => {
    render(<Portfolio />);

    await waitFor(() => screen.getByText("Project 1"));

    expect(screen.getByText("Project 1")).toBeInTheDocument();
    expect(screen.getByText("Description of Project 1")).toBeInTheDocument();
    expect(screen.getByText("Project 2")).toBeInTheDocument();
    expect(screen.getByText("Description of Project 2")).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /project 1/i })).toHaveAttribute(
      "href",
      "https://example.com"
    );
    expect(screen.getByRole("link", { name: /project 2/i })).toHaveAttribute(
      "href",
      "https://example2.com"
    );

    expect(screen.getByText("Portfolio")).toBeInTheDocument();
    expect(
      screen.getByText("Check out our awesome projects!")
    ).toBeInTheDocument();
  });
});
