import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactModal({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[#0f0f0f] p-6 rounded-2xl border border-gray-800 w-[90%] max-w-md shadow-2xl"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <button
              onClick={onClose}
              className="text-gray-400 mb-3 hover:text-white transition"
            >
              ✕ Close
            </button>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full p-2 rounded bg-[#0b0b0b] border border-gray-700 focus:border-white outline-none"
                  placeholder="Name"
                />
                <input
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full p-2 rounded bg-[#0b0b0b] border border-gray-700 focus:border-white outline-none"
                  placeholder="Email / Phone Number"
                />
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full p-2 rounded bg-[#0b0b0b] border border-gray-700 focus:border-white outline-none"
                  placeholder="Message"
                  rows="4"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full py-2 rounded bg-white text-black font-semibold"
                >
                  Send
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-white"
              >
                Thanks — your message has been queued ✅
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
