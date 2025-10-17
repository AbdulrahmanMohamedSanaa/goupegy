import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactModal({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_5jcymuz",
        "template_sqv6mcl",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "LIn-OcgGiZKxa2-ws"
      );

      setSubmitted(true);
    } catch (error) {
      console.error("Email send failed:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-[#0f0f0f] p-6 rounded-lg border border-gray-800 w-[90%] max-w-md">
        <button onClick={onClose} className="text-gray-400 mb-3">Close</button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-2 rounded bg-[#0b0b0b] border border-gray-700"
              placeholder="Name"
            />
            <input
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-2 rounded bg-[#0b0b0b] border border-gray-700"
              placeholder="Email / Phone Number"
            />
            <textarea
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full p-2 rounded bg-[#0b0b0b] border border-gray-700"
              placeholder="Message"
              rows="4"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 rounded bg-white text-black hover:bg-gray-200 transition"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        ) : (
          <div className="text-center text-white">
            Thanks — your message has been sent!
          </div>
        )}
      </div>
    </div>
  );
}
