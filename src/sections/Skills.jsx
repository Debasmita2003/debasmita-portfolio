import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    gradient: "from-orange-500 to-yellow-400",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    gradient: "from-blue-500 to-sky-400",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    gradient: "from-yellow-400 to-orange-400",
  },
  {
    name: "React",
    icon: <FaReact />,
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    gradient: "from-sky-400 to-cyan-500",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
    gradient: "from-green-500 to-lime-400",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    gradient: "from-gray-500 to-gray-300",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    gradient: "from-green-400 to-emerald-500",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    gradient: "from-violet-500 to-blue-500",
  },
  {
    name: "Figma",
    icon: <FaFigma />,
    gradient: "from-pink-500 to-violet-500",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >

          <p className="text-sky-400 uppercase tracking-[4px] mb-4">
            My Skills
          </p>

          <h2 className="text-5xl font-bold">
            Technologies I
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-sky-300 bg-clip-text text-transparent">
              {" "}Work With
            </span>
          </h2>

        </motion.div>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}

              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}

              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}

              whileHover={{
                scale: 1.08,
                rotate: 2,
              }}

              className="group relative"
            >

              {/* Glow */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${skill.gradient} blur-2xl opacity-20 group-hover:opacity-50 transition duration-500`}>
              </div>

              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-sky-400/30 transition duration-500">

                {/* Icon */}
                <div className={`text-5xl p-5 rounded-2xl bg-gradient-to-r ${skill.gradient} text-white shadow-[0_0_30px_rgba(59,130,246,0.3)]`}>
  {skill.icon}
</div>

                {/* Skill Name */}
                <h3 className="text-lg font-semibold text-center">
                  {skill.name}
                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;