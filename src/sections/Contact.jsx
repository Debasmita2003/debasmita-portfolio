import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ynftfpm",
        "template_hei2h1k",
        form.current,
        "tZO5SgH4s7IvDSivy"
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message.");
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >

      <div className="max-w-4xl mx-auto w-full">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >

          <p className="text-sky-400 uppercase tracking-[4px] mb-4">
            Contact Me
          </p>

          <h2 className="text-5xl font-bold">
            Let's Build Something
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-sky-300 bg-clip-text text-transparent">
              {" "}Amazing
            </span>
          </h2>

        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}

          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}

          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-[0_0_50px_rgba(59,130,246,0.15)]"
        >

          {/* Name */}
          <div className="mb-6">

            <label className="block mb-3 text-gray-300">
              Your Name
            </label>

            <input
              type="text"
              name="from_name"
              placeholder="Enter your name"
              required
              className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-sky-400 outline-none text-white placeholder-gray-500 transition duration-300"
            />

          </div>

          {/* Email */}
          <div className="mb-6">

            <label className="block mb-3 text-gray-300">
              Your Email
            </label>

            <input
              type="email"
              name="from_email"
              placeholder="Enter your email"
              required
              className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-sky-400 outline-none text-white placeholder-gray-500 transition duration-300"
            />

          </div>

          {/* Message */}
          <div className="mb-8">

            <label className="block mb-3 text-gray-300">
              Message
            </label>

            <textarea
              rows="6"
              name="message"
              placeholder="Write your message..."
              required
              className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-sky-400 outline-none text-white placeholder-gray-500 resize-none transition duration-300"
            ></textarea>

          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-violet-500 via-blue-500 to-sky-400 text-white font-semibold hover:scale-[1.02] transition duration-300 shadow-[0_0_30px_rgba(59,130,246,0.3)]"
          >

            Send Message

          </button>

        </motion.form>

      </div>

    </section>
  );
};

export default Contact;