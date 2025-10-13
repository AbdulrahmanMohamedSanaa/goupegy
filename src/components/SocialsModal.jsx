import { motion, AnimatePresence } from "framer-motion";

export default function SocialsModal({ open, onClose }) {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        onClick={onClose} // closes when clicking outside
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="bg-gray-900 text-white rounded-2xl p-8 shadow-2xl w-80 relative"
          onClick={(e) => e.stopPropagation()} // prevents click bubbling
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Connect With Us</h2>

          <div className="flex flex-col gap-4">
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition text-center"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition text-center"
            >
              Facebook
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition text-center"
            >
              LinkedIn
            </a>
            <a
              href="mailto:youremail@example.com"
              className="hover:text-green-400 transition text-center"
            >
              Email Us
            </a>
          </div>

          <button
            onClick={onClose}
            className="mt-6 w-full py-2 rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition cursor-pointer"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
