import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[#0f0f0f] p-8 rounded-2xl border border-gray-800 w-[90%] max-w-2xl shadow-2xl text-white"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">About Us</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition text-lg"
              >
                ✕
              </button>
            </div>

            <p className="text-gray-300 leading-relaxed">
              We’re a creative team passionate about building sleek, fast, and
              modern websites that help businesses stand out online.
            </p>

            <p className="text-gray-400 mt-3">
              From personal portfolios to full-scale business platforms, we
              handle everything — design, development, SEO, and performance
              optimization. Every project we make blends style with function.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-[#141414] rounded-xl border border-gray-700"
              >
                <h3 className="text-white font-semibold mb-1">🚀 Fast Websites</h3>
                <p className="text-gray-400 text-sm">Built for speed and efficiency.</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-[#141414] rounded-xl border border-gray-700"
              >
                <h3 className="text-white font-semibold mb-1">🎨 Modern Design</h3>
                <p className="text-gray-400 text-sm">Clean, responsive, and beautiful.</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
