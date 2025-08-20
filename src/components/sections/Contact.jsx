import { useState } from "react";
import { RevealOnScroll } from "./RevealOnScroll";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Oops! Something went wrong, Please try again.");
      });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="px-4 w-full max-w-lg">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* From Name */}
            <input
              type="text"
              name="from_name"   // Must match template {{from_name}}
              required
              value={formData.name}
              placeholder="Name"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white"
            />

            {/* Email */}
            <input
              type="email"
              name="email"   // Must match template {{email}}
              required
              value={formData.email}
              placeholder="example@gmail.com"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white"
            />

            {/* Message */}
            <textarea
              name="message"   // Must match template {{message}}
              required
              rows={5}
              value={formData.message}
              placeholder="Your message..."
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white"
            />

            {/* Submit */}
            <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium">
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
