"use client";
import { Send } from "lucide-react";
import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission (replace with actual submission logic)
    try {
      // Here you would normally send the form data to your backend
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Success response
      setSubmitStatus({
        success: true,
        message: "Your message has been sent. I'll get back to you soon!",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-4 md:mt-6">
      <p className="text-TextGrayWhite mb-6 text-sm md:text-base">
        Feel free to reach out if you have any questions, want to discuss a
        project, or just want to say hello. Ill get back to you as soon as
        possible.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-TextGray text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-PrimaryGray border-TertiaryGray text-TextGrayWhite focus:ring-fgButton focus:border-fgButton rounded-md border p-2 text-sm transition-colors focus:ring-1 focus:outline-none"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label
              htmlFor="email"
              className="text-TextGray text-sm font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-PrimaryGray border-TertiaryGray text-TextGrayWhite focus:ring-fgButton focus:border-fgButton rounded-md border p-2 text-sm transition-colors focus:ring-1 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <label
            htmlFor="subject"
            className="text-TextGray text-sm font-medium"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="bg-PrimaryGray border-TertiaryGray text-TextGrayWhite focus:ring-fgButton focus:border-fgButton rounded-md border p-2 text-sm transition-colors focus:ring-1 focus:outline-none"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label
            htmlFor="message"
            className="text-TextGray text-sm font-medium"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="bg-PrimaryGray border-TertiaryGray text-TextGrayWhite focus:ring-fgButton focus:border-fgButton rounded-md border p-2 text-sm transition-colors focus:ring-1 focus:outline-none"
          />
        </div>

        <div className="flex items-center justify-between pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-TertiaryGray hover:bg-fgButton flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-white transition-colors disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            <Send size={16} />
          </button>

          {submitStatus && (
            <p
              className={`text-sm ${
                submitStatus.success ? "text-green-400" : "text-red-400"
              }`}
            >
              {submitStatus.message}
            </p>
          )}
        </div>
      </form>

      <div className="mt-12 space-y-6">
        <div>
          <h3 className="text-TextGrayWhite text-lg font-semibold">
            Alternative Ways to Reach Me
          </h3>
          <div className="mt-4 space-y-3">
            <div className="text-TextGray flex items-center gap-3">
              <p className="text-TextGrayWhite text-sm font-medium">Email:</p>
              <a
                href="mailto:bartspaans96@gmail.com"
                className="text-fgButton hover:text-fgButtonHover text-sm transition-colors"
              >
                bartspaans96@gmail.com
              </a>
            </div>
            <div className="text-TextGray flex items-center gap-3">
              <p className="text-TextGrayWhite text-sm font-medium">
                LinkedIn:
              </p>
              <a
                href="https://www.linkedin.com/in/bart-spaans"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fgButton hover:text-fgButtonHover text-sm transition-colors"
              >
                linkedin.com/in/bart-spaans
              </a>
            </div>
            <div className="text-TextGray flex items-center gap-3">
              <p className="text-TextGrayWhite text-sm font-medium">GitHub:</p>
              <a
                href="https://github.com/spaansba"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fgButton hover:text-fgButtonHover text-sm transition-colors"
              >
                github.com/spaansba
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
