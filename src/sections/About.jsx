import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaCode } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
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
            About Me
          </p>

          <h2 className="text-5xl font-bold">
            Passionate About Building
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-sky-300 bg-clip-text text-transparent">
              {" "}Modern Web Experiences
            </span>
          </h2>

        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <p className="text-gray-300 text-lg leading-relaxed mb-6">

              I’m Debasmita Jana, a passionate frontend and fullstack developer
              who loves creating elegant, responsive, and user-friendly web applications.
              I enjoy blending creativity with technology to build visually engaging
              digital experiences.

            </p>

            <p className="text-gray-400 leading-relaxed">

              My interests include modern UI/UX design, frontend development,
              fullstack web applications, animations, and interactive user experiences.
              I’m continuously learning new technologies and improving my development skills.

            </p>

          </motion.div>

          {/* Right Side Cards */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="grid gap-6"
          >

            {/* Education Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:scale-105 transition duration-500">

              <div className="flex items-center gap-4 mb-4">

                <div className="p-4 rounded-2xl bg-gradient-to-r from-violet-500 to-sky-400 text-white text-2xl">
                  <FaGraduationCap />
                </div>

                <h3 className="text-2xl font-semibold">
                  Education
                </h3>

              </div>

              <p className="text-gray-300 leading-relaxed">
                Computer Science student and continuously learning
                modern web technologies, UI/UX design, and fullstack development.
              </p>

            </div>

            {/* Experience Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:scale-105 transition duration-500">

              <div className="flex items-center gap-4 mb-4">

                <div className="p-4 rounded-2xl bg-gradient-to-r from-violet-500 to-blue-500 text-white text-2xl">
                  <FaLaptopCode />
                </div>

                <h3 className="text-2xl font-semibold">
                  Experience
                </h3>

              </div>

              <p className="text-gray-300 leading-relaxed">
                Built responsive websites, creative UI designs,
                portfolio projects, and fullstack applications using
                modern technologies and frameworks.
              </p>

            </div>

            {/* Skills Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-[0_0_30px_rgba(56,189,248,0.15)] hover:scale-105 transition duration-500">

              <div className="flex items-center gap-4 mb-4">

                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-sky-400 text-white text-2xl">
                  <FaCode />
                </div>

                <h3 className="text-2xl font-semibold">
                  Development
                </h3>

              </div>

              <p className="text-gray-300 leading-relaxed">
                Skilled in React, JavaScript, HTML, CSS, Tailwind CSS,
                responsive design, animations, and frontend development.
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default About;