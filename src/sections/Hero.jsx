import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-10 pt-24 overflow-hidden"
    >

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >

          {/* Intro */}
          <p className="mb-4 text-violet-400 font-medium text-sm sm:text-base tracking-wide">
            Hello, I'm
          </p>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">

            Debasmita{" "}

            <span className="bg-gradient-to-r from-violet-500 via-blue-500 to-sky-400 bg-clip-text text-transparent">
              Jana
            </span>

          </h1>

          {/* Roles */}
          <h2 className="mt-5 text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">

            Web Developer | Frontend Developer | Fullstack Developer

          </h2>

          {/* Description */}
          <p className="mt-6 text-gray-400 leading-relaxed max-w-xl mx-auto md:mx-0 text-sm sm:text-base">

            I build beautiful modern websites with elegant user experiences,
            smooth animations, and responsive designs.

          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">

            {/* Resume Button */}
            <a
              href="/Debasmita_Jana_Resume.pdf"
              download
              className="px-7 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-violet-500 to-sky-400 text-white font-medium hover:scale-105 transition duration-300 inline-block text-center shadow-[0_0_30px_rgba(59,130,246,0.3)]"
            >
              Download Resume
            </a>

            {/* Contact Button */}
            <a
              href="#contact"
              className="px-7 sm:px-8 py-3 sm:py-4 rounded-full border border-violet-500 hover:bg-violet-500/20 transition duration-300 inline-block text-center"
            >
              Contact Me
            </a>

          </div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <div className="w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] lg:w-[380px] lg:h-[380px] rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-sky-400 p-1 shadow-[0_0_60px_rgba(59,130,246,0.35)]">

            <img
              src={import.meta.env.BASE_URL + "src/assets/Coder.jpg"}
              alt="Debasmita Jana"
              className="w-full h-full object-cover rounded-full"
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;