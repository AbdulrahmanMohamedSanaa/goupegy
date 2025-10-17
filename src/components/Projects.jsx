import { motion } from "framer-motion";
import project1 from "../assets/left.jpg";
import project2 from "../assets/left.jpg";
import project3 from "../assets/left.jpg";

export default function Projects({ onContact }) {
  const projects = [
    { id: 1, image: project1, title: "Project One" },
    { id: 2, image: project2, title: "Project Two" },
    { id: 3, image: project3, title: "Project Three" },
  ];

  return (
    <section className="flex flex-col items-center py-16 bg-black text-white">
      <h2 className="text-4xl font-bold mb-10 text-center">Our Projects</h2>

      {/* Projectzz cards */}
      <div className="relative flex justify-center items-center gap-6 flex-wrap md:flex-nowrap">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            className="relative w-64 h-80 md:w-72 md:h-96 bg-gray-900 rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all"
            whileHover={{
              scale: 1.1,
              zIndex: 10,
            }}
            style={{
              zIndex: i === 1 ? 5 : 1, 
              transform: i === 1 ? "scale(1.05)" : "scale(1)",
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 w-full bg-black/60 text-center py-3 text-lg font-semibold">
              {project.title}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Buttons sectioun */}
      <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
<button
  onClick={onContact}
  className="px-8 py-3 bg-white text-black font-semibold rounded-xl transition-transform transform hover:scale-105 hover:bg-gray-200 active:scale-95 shadow-lg cursor-pointer"
>
  Start Your Project
</button>

<button
  onClick={() => window.open('', '_blank')}
  className="px-8 py-3 border border-gray-400 text-white font-semibold rounded-xl transition-transform transform hover:scale-105 hover:bg-gray-800 active:scale-95 cursor-pointer"
>
  View More Work
</button>

      </div>
    </section>
  );
}
