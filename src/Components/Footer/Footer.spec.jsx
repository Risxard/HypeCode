import { render, screen, fireEvent } from "@testing-library/react";
import Footer from "./Footer";
import { scrollTo } from "../../utils/scrollTo";

jest.mock("../../utils/scrollTo", () => ({
  scrollTo: jest.fn(),
}));

jest.mock("i18next", () => ({
    changeLanguage: jest.fn(),
    language: "pt-BR",
    t: (key) => key,
  }));


describe("Footer", () => {
  it("should call scrollTo with correct id when menu items are clicked", () => {
    render(<Footer />);

    fireEvent.click(screen.getByLabelText("Home"));
    expect(scrollTo).toHaveBeenCalledWith("Header");

    fireEvent.click(screen.getByLabelText("AboutUs"));
    expect(scrollTo).toHaveBeenCalledWith("about");

    fireEvent.click(screen.getByLabelText("OurServices"));
    expect(scrollTo).toHaveBeenCalledWith("ourServices");

    fireEvent.click(screen.getByLabelText("Portfolio"));
    expect(scrollTo).toHaveBeenCalledWith("portfolio");
  });

  it("should open the correct links in a new tab", () => {
    render(<Footer />);


    const instagramLink = screen.getByLabelText("Instagram");
    const whatsappLink = screen.getByLabelText("WhatsApp");
    const githubLink = screen.getByLabelText("GitHub");

    expect(instagramLink).toHaveAttribute("target", "_blank");
    expect(whatsappLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("target", "_blank");

    expect(instagramLink).toHaveAttribute("href", "https://www.instagram.com/hypecode.softh/");
    expect(whatsappLink).toHaveAttribute(
      "href",
      "https://api.whatsapp.com/send/?phone=5527999769330&text=Tenho+interesse+em+criar+um+projeto+com+a+HypeCode.+Tem+um+horário+disponível?&type=phone_number&app_absent=0"
    );
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/HypeCodeSoftwareHouse"
    );
  });
});
