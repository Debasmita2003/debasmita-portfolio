import { motion } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

// IMPORT IMAGES
import portfolioImg from "../assets/Portfolio.jpg";
import memoziImg from "../assets/Memozi.jpg";
import uptoskillImg from "../assets/Uptoskill.jpg";

const projects = [
  {
    title: "Modern Portfolio",
    image: portfolioImg,

    description:
      "A modern responsive developer portfolio with animations, glassmorphism.",

    tech: ["React", "Tailwind", "Framer Motion"],

    github: "https://github.com/Debasmita2003/debasmita-portfolio",
    live: "https://debasmita-jana-portfolio.vercel.app/",
  },

  {
    title: "Memozi",
    image: memoziImg,

    description:
      "A modern productivity and learning platform designed to help users organize notes and bookmarks.",

    tech: ["React", "Next.js", "MongoDB"],

    github: "https://github.com/Debasmita2003/Memozi",
    live: "https://memozi-project.vercel.app/",
  },

  {
    title: "Uptoskill Hiring Dashboard",
    image: uptoskillImg,

    description:
      "A modern hiring dashboard for Uptoskill with real-time analytics and candidate management.",

    tech: ["React", "OpenAI API", "Tailwind"],

    github: "https://github.com/",
    live: "https://vercel.com/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-7xl mx-auto w-full">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="text-sky-400 uppercase tracking-[4px] mb-4">
            My Projects
          </p>

          <h2 className="text-5xl font-bold">
            Featured
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-sky-300 bg-clip-text text-transparent">
              {" "}Projects
            </span>
          </h2>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}

              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}

              whileHover={{
                scale: 1.05,
                y: -10,
              }}

              className="group relative"
            >

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-blue-500 to-sky-400 rounded-3xl blur-2xl opacity-10 group-hover:opacity-30 transition duration-500"></div>

              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.15)]">

                {/* Project Image */}
                <div className="overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition duration-700"
                  />

                </div>

                {/* Content */}
                <div className="p-6">

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 mb-6">

                    {project.tech.map((tech, i) => (

                      <span
                        key={i}
                        className="px-4 py-2 rounded-full text-sm bg-white/10 border border-white/10 text-sky-300"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">

                    {/* GitHub */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 transition duration-300"
                    >

                      <FaGithub />

                      GitHub

                    </a>

                    {/* Live Demo */}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-violet-500 to-sky-400 text-white hover:scale-105 transition duration-300"
                    >

                      <FaExternalLinkAlt />

                      Live Demo

                    </a>

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;