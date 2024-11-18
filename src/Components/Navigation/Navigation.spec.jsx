
import { render, screen, fireEvent } from "@testing-library/react";
import Navigation from "./Navigation";
import HamMenuModal from "./Components/HamMenuModal";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { scrollTo } from "../../utils/scrollTo";

jest.mock("../../utils/scrollTo", () => ({
  scrollTo: jest.fn(),
}));

describe("Navigation", () => {
  it("Should render navigation components correctly", async () => {
    render(
      <Navigation>
        <LanguageSelector />
        <HamMenuModal />
      </Navigation>
    );

    expect(screen.getByText("navigation.home")).toBeInTheDocument();
    expect(screen.getByText("navigation.aboutUs")).toBeInTheDocument();
    expect(screen.getByText("navigation.ourServices")).toBeInTheDocument();
    expect(screen.getByText("navigation.portfolio")).toBeInTheDocument();
    expect(screen.getByText("navigation.contact")).toBeInTheDocument();
    expect(await screen.findByTestId("ham-menu")).toBeVisible();
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(screen.getByTestId("hc-nav-logo")).toBeInTheDocument();
    expect(screen.getByTestId("dropdown-lng")).toBeInTheDocument();
  });

  it("Should open modal when ham-menu is click", async () => {
    render(
      <Navigation>
        <HamMenuModal />
      </Navigation>
    );

    fireEvent.click(await screen.findByTestId("ham-menu"));
    expect(screen.queryByRole("dialog")).toBeInTheDocument();
  });

  it("should call scrollTo with correct id when menu items are clicked", () => {
    render(<Navigation />);

    fireEvent.click(screen.getByLabelText("Home"));
    expect(scrollTo).toHaveBeenCalledWith("Header");

    fireEvent.click(screen.getByLabelText("About Us"));
    expect(scrollTo).toHaveBeenCalledWith("about");

    fireEvent.click(screen.getByLabelText("Our Services"));
    expect(scrollTo).toHaveBeenCalledWith("ourServices");

    fireEvent.click(screen.getByLabelText("Portfolio"));
    expect(scrollTo).toHaveBeenCalledWith("portfolio");

    fireEvent.click(screen.getByLabelText("Contact"));
    expect(scrollTo).toHaveBeenCalledWith("contact");
  });
});
