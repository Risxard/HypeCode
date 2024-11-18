import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { fetchFormData } from "../../../../../services/fetchForm";
import { useEffect, useState } from "react";
import StatusComponent from "../StatusComponents/StatusComponents";
import { limparInputs } from "./scripts/scripts";

export default function FormComponent() {
  const [status, setStatus] = useState("");

  const { t } = useTranslation();
  const { formTranslation, errorMessages } = t("contact");

  const schema = z
    .object({
      firstName: z.string().min(3, errorMessages.name),
      lastName: z.string().min(3, errorMessages.name),
      email: z
        .string()
        .min(1, errorMessages.email.err1)
        .email(errorMessages.email.err2)
        .toLowerCase(),
        tel: z
        .string()
        .min(7, errorMessages.tel)
        .regex(/^\d+$/, errorMessages.tel),
      message: z.string().min(10, errorMessages.message),
      agree: z.boolean(),
      _template: z.string(),
    })
    .refine((fields) => fields.agree === true, {
      path: ["agree"],
      message: errorMessages.agree,
    });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "all",
    criteriaMode: "all",
    reValidateMode: "onChange",
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      tel: "",
      email: "",
      message: "",
      agree: false,
      _template: "table",
    },
  });

  const handleSubmitForm = async (data) => {
    setStatus("isLoading");
    try {
      const formDataProcessedSuccessfully = await fetchFormData(data);
      if (formDataProcessedSuccessfully === true) {
        setStatus("success");
        limparInputs();
      }
    } catch (error) {
      console.error("Erro ao processar dados:", error);
      setStatus("error");
    }
  };

  useEffect(() => {
    if (status === "success" || status === "error") {
      setTimeout(() => {
        setStatus("");
      }, 4000);
    }
  }, [status]);

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="contact-form"
      noValidate
    >
      {status && <StatusComponent status={status} />}

      <div className="row">
        <div className="form-name p-right">
          <div className="form-inner">
            <label htmlFor="first-name">{formTranslation.firstName}</label>
            <div className="input-group">
              <input
                type="text"
                id="first-name"
                aria-label="first-name"
                placeholder={formTranslation.firstNamePlaceholder}
                {...register("firstName")}
              />
              {errors.firstName && (
                <p className="error-message">{errors.firstName.message}</p>
              )}
            </div>
          </div>
        </div>
        <div className="form-name">
          <div className="form-inner p-remove">
            <label htmlFor="last-name">{formTranslation.lastName}</label>
            <div className="input-group">
              <input
                type="text"
                id="last-name"
                aria-label="last-name"
                placeholder={formTranslation.lastNamePlaceholder}
                {...register("lastName")}
              />
              {errors.lastName && (
                <p className="error-message">{errors.lastName.message}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="form-tel">
        <div className="form-inner">
          <label htmlFor="tel">{formTranslation.tel}</label>
          <div className="input-group p-remove">
            <input
              type="tel"
              id="tel"
              aria-label="tel"
              placeholder={formTranslation.telPlaceholder}
              {...register("tel")}
            />
            {errors.tel && (
              <p className="error-message">{errors.tel.message}</p>
            )}
          </div>
        </div>
      </div>

      <div className="form-email">
        <div className="form-inner">
          <label htmlFor="email" required>
            {formTranslation.email}
          </label>
          <div className="input-group p-remove">
            <input
              type="text"
              id="email"
              aria-label="email"
              placeholder={formTranslation.emailPlaceholder}
              {...register("email")}
            />
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </div>
        </div>
      </div>

      <div className="form-text-area">
        <div className="form-inner">
          <label htmlFor="message">{formTranslation.message}</label>
          <div className="input-group p-remove">
            <textarea
              required
              placeholder={formTranslation.messagePlaceholder}
              id="message"
              name="message"
              aria-label="message"
              {...register("message")}
            />

            {errors.message && (
              <p className="error-message">{errors.message.message}</p>
            )}
          </div>
        </div>
      </div>
      <div className="terms-and-conditions p-remove">
        <span>
          <input type="checkbox" {...register("agree")} aria-label="agree" />
          <p>
            {formTranslation.terms1}
            <a href="./Downloads/Termos.pdf" target="_blank">
              {formTranslation.terms2}
            </a>
          </p>
        </span>

        {errors.agree && (
          <p className="error-message">{errors.agree.message}</p>
        )}
      </div>

      {!status && <input className="submit-button" type="submit" />}
    </form>
  );
}
