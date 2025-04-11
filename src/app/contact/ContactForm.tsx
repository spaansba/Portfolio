"use client";
import { useForm } from "@tanstack/react-form";
import { Send } from "lucide-react";
import { z } from "zod";
import FieldInfo from "./FieldInfo";
import { useState } from "react";

function ContactForm() {
  // State to track submission success
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Define Zod schema for form validation
  const formSchema = z.object({
    name: z
      .string()
      .min(1, "Name is required")
      .max(100, "Name cant be longer than 100 characters"),

    email: z
      .string()
      .min(1, "Email is required")
      .max(320, "Email cant be longer than 320 characters")
      .email("Please enter a valid email address"),

    subject: z
      .string()
      .min(1, "Subject is required")
      .max(200, "Subject cant be longer than 200 characters"),
    message: z
      .string()
      .min(1, "message is required")
      .max(3000, "Message cant be longer than 3000 characters"),
  });

  const form = useForm({
    defaultValues: { name: "", email: "", subject: "", message: "" },
    onSubmit: async ({ value }) => {
      setSubmitSuccess(true);
      form.reset();
    },
    validators: {
      onSubmit: formSchema,
    },
  });

  return (
    <div className="mt-4 md:mt-6">
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
                    className="bg-PrimaryGray border-TertiaryGray text-TextGrayWhite focus:ring-fgButton focus:border-fgButton rounded-md border p-2 text-sm transition-colors focus:ring-1 focus:outline-none"
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
                    className="bg-PrimaryGray border-TertiaryGray text-TextGrayWhite focus:ring-fgButton focus:border-fgButton rounded-md border p-2 text-sm transition-colors focus:ring-1 focus:outline-none"
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
                  className="bg-PrimaryGray border-TertiaryGray text-TextGrayWhite focus:ring-fgButton focus:border-fgButton rounded-md border p-2 text-sm transition-colors focus:ring-1 focus:outline-none"
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
                  className="bg-PrimaryGray border-TertiaryGray text-TextGrayWhite focus:ring-fgButton focus:border-fgButton rounded-md border p-2 text-sm transition-colors focus:ring-1 focus:outline-none"
                />
                <FieldInfo field={field} />
              </>
            )}
          </form.Field>
        </div>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => (
            <div className="flex items-center justify-between pt-2">
              <button
                type="submit"
                disabled={!canSubmit}
                onMouseDown={form.handleSubmit}
                className="bg-TertiaryGray hover:bg-fgButton flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-white transition-colors disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>

              {submitSuccess && (
                <span className="ml-4 text-sm text-green-400 transition-opacity duration-300">
                  Message sent successfully!
                </span>
              )}
            </div>
          )}
        </form.Subscribe>
      </form>
    </div>
  );
}

export default ContactForm;
