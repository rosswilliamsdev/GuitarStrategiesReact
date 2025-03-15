import React, { useState, useEffect } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // Track form submission state
  const [showDelayMessage, setShowDelayMessage] = useState(false); // Track delayed message

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSubmitting) {
      timer = setTimeout(() => setShowDelayMessage(true), 3000); // Show message after 5 seconds
    } else {
      setShowDelayMessage(false); // Hide message when submission completes
    }

    return () => clearTimeout(timer); // Cleanup timer
  }, [isSubmitting]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable button & show loading state

    try {
      const response = await fetch(
        "https://guitarstrategiesreact.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
          mode: "cors",
        }
      );

      const data = await response.json();
      if (data.success) {
        window.alert("Message sent successfully! ✅"); // Alert on success
        setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
      } else {
        window.alert("⚠️ Failed to send message. Try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      window.alert(
        "❌ Error: Unable to connect. Please check your internet or try again later."
      );
    } finally {
      setIsSubmitting(false); // Re-enable button
    }
  };

  return (
    <div>
      <h2 className="contact-me-header">Contact</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Enter a message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </form>
      {isSubmitting && showDelayMessage && (
        <p>(Sometimes it can take a moment!)</p>
      )}
    </div>
  );
};

export default ContactForm;
