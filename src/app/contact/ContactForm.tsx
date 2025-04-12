"use client";
import { useForm } from "@tanstack/react-form";
import { Send } from "lucide-react";
import FieldInfo from "./FieldInfo";
import { useState } from "react";
import { contactFormSchema } from "./schema";
import ContactLinks from "./ContactLinks";

function ContactForm() {
  // State to track submission success
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const form = useForm({
    defaultValues: { name: "", email: "", subject: "", message: "" },
    onSubmit: async ({ value }) => {
      try {
        setIsLoading(true);
        setErrorMessage(null);

        // Send data to our API route
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(value),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to send message");
        }

        setSubmitSuccess(true);
        form.reset();

        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } catch (error) {
        setErrorMessage(
          error instanceof Error ? error.message : "An unknown error occurred",
        );
        console.error("Error sending message:", error);
      } finally {
        setIsLoading(false);
      }
    },
    validators: {
      onSubmit: contactFormSchema,
    },
  });

  return (
    <>
      <p className="text-TextGrayWhite mb-6 text-sm md:text-base">
        Feel free to reach out if you have any questions, want to discuss a
        project. Ill get back to you as soon as possible.
      </p>

      <form
        className="flex flex-col space-y-4"
        onChange={() => {
          if (submitSuccess) {
            setSubmitSuccess(false);
          }
          if (errorMessage) {
            setErrorMessage(null);
          }
        }}
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col space-y-2">
            <form.Field name="name">
              {(field) => (
                <>
                  <label
                    htmlFor={field.name}
                    className="text-TextGray text-sm font-medium"
                  >
                    Name *
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="bg-PrimaryGray border-TertiaryGray text-TextGrayWhite focus:ring-fgButton focus:border-fgButton border p-2 text-sm transition-colors focus:ring-1 focus:outline-none"
                  />
                  <FieldInfo field={field} />
                </>
              )}
            </form.Field>
          </div>

          <div className="flex flex-col space-y-2">
            <form.Field name="email">
              {(field) => (
                <>
                  <label
                    htmlFor={field.name}
                    className="text-TextGray text-sm font-medium"
                  >
                    Email *
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="bg-PrimaryGray border-TertiaryGray text-TextGrayWhite focus:ring-fgButton focus:border-fgButton border p-2 text-sm transition-colors focus:ring-1 focus:outline-none"
                  />
                  <FieldInfo field={field} />
                </>
              )}
            </form.Field>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <form.Field name="subject">
            {(field) => (
              <>
                <label
                  htmlFor={field.name}
                  className="text-TextGray text-sm font-medium"
                >
                  Subject *
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="bg-PrimaryGray border-TertiaryGray text-TextGrayWhite focus:ring-fgButton focus:border-fgButton border p-2 text-sm transition-colors focus:ring-1 focus:outline-none"
                />
                <FieldInfo field={field} />
              </>
            )}
          </form.Field>
        </div>

        <div className="flex flex-col space-y-2">
          <form.Field name="message">
            {(field) => (
              <>
                <label
                  htmlFor={field.name}
                  className="text-TextGray text-sm font-medium"
                >
                  Message *
                </label>
                <textarea
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  rows={6}
                  className="bg-PrimaryGray border-TertiaryGray text-TextGrayWhite focus:ring-fgButton focus:border-fgButton border p-2 text-sm transition-colors focus:ring-1 focus:outline-none"
                />
                <FieldInfo field={field} />
              </>
            )}
          </form.Field>
        </div>
        <div className="flex flex-row items-center justify-between gap-4 pt-2">
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
          >
            {([canSubmit]) => (
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  disabled={!canSubmit || isLoading}
                  onMouseDown={form.handleSubmit}
                  className="bg-TertiaryGray hover:text-fgButton flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-colors disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>

                {submitSuccess && (
                  <span className="ml-4 text-sm text-green-400 transition-opacity duration-300">
                    Message sent successfully!
                  </span>
                )}

                {errorMessage && (
                  <span className="ml-4 text-sm text-red-400 transition-opacity duration-300">
                    {errorMessage}
                  </span>
                )}
              </div>
            )}
          </form.Subscribe>
          <ContactLinks />
        </div>
      </form>
    </>
  );
}

export default ContactForm;
