"use client";

import { motion } from "framer-motion";
import left from "../assets/left.jpg";
import middle from "../assets/middle.jpg";
import right from "../assets/right.jpg";

const projects = [
  { id: 1, title: "Left Project", img: left },
  { id: 2, title: "Middle Project", img: middle },
  { id: 3, title: "Right Project", img: right },
];

export default function ProjectShowcase() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 relative w-full sm:w-auto justify-center">
        {projects.map((p, index) => (
          <motion.div
            key={p.id}
            className={`relative w-full sm:w-60 md:w-72 lg:w-80 h-64 sm:h-80 rounded-xl overflow-hidden cursor-pointer transition-transform`}
            initial={{
              scale: index === 1 ? 1 : 0.9,
              zIndex: index === 1 ? 20 : 10,
              y: index === 1 ? -10 : 0,
            }}
            whileHover={{
              scale: 1.05,
              zIndex: 30,
              y: -15,
              transition: { duration: 0.3 },
            }}
          >
            <img
              src={p.img}
              alt={p.title}
              className="absolute inset-0 w-full h-full object-cover opacity-90 hover:opacity-100 transition"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-center p-3">
              <h3 className="text-base sm:text-lg font-semibold">{p.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
