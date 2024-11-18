import { render, screen, fireEvent } from "@testing-library/react";
import FormComponent from "./FormComponent";


jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key) => key === "contact" ? {
      formTranslation: {
        firstName: "First Name",
        firstNamePlaceholder: "Enter your first name",
        lastName: "Last Name",
        lastNamePlaceholder: "Enter your last name",
        tel: "Telephone",
        telPlaceholder: "Enter your phone number",
        email: "Email",
        emailPlaceholder: "Enter your email",
        message: "Message",
        messagePlaceholder: "Enter your message",
        terms1: "I agree to the terms ",
        terms2: "and conditions",
      },
      errorMessages: {
        name: "Name is too short",
        email: { err1: "Email is required", err2: "Invalid email format" },
        tel: "Phone number is too short",
        message: "Message is too short",
        agree: "You must agree to continue",
      },
    } : {}
  }),
}));



describe("FormComponent", () => {
  it("should renders the form inputs", () => {

    render(
      <FormComponent>

      </FormComponent>
    );

    const firstNameInput = screen.getByLabelText("first-name");
    const lastNameInput = screen.getByLabelText("last-name");
    const telInput = screen.getByLabelText("tel");
    const emailInput = screen.getByLabelText("email");
    const messageInput = screen.getByLabelText("message");
    const agreeCheckbox = screen.getByLabelText("agree");

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(telInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    expect(agreeCheckbox).toBeInTheDocument();
  });

  it("should submits the form with valid data", () => {
    render(<FormComponent />);

    const firstNameInput = screen.getByLabelText("first-name");
    const lastNameInput = screen.getByLabelText("last-name");
    const telInput = screen.getByLabelText("tel");
    const emailInput = screen.getByLabelText("email");
    const messageInput = screen.getByLabelText("message");
    const agreeCheckbox = screen.getByLabelText("agree");
    const submitButton = screen.getByRole("button", { type: "submit" });

    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.change(telInput, { target: { value: "123456789" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(messageInput, { target: { value: "This is a message" } });
    fireEvent.click(agreeCheckbox);

    fireEvent.click(submitButton);
  });
});
