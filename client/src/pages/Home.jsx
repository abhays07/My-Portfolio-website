import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { Link } from "react-scroll";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
};

const staggerParent = {
  initial: {},
  animate: { transition: { staggerChildren: 0.25, delayChildren: 0.2 } },
};

export default function Home() {
  const [typeKey, setTypeKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTypeKey((prev) => prev + 1);
    }, 9000); // Reset animation every 9 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="bg-[#092A2F] text-white min-h-screen flex flex-col items-center justify-center scroll-mt-[var(--nav-height)] px-4 sm:px-6 lg:px-8 text-center"
      style={{ "--nav-height": "64px" }}
    >
      {/* Typewriter Greeting */}
     <h2 className="text-white text-base mt-20 opacity-70 sm:text-xl leading-tight inline-flex items-center justify-center">
  <span
    key={typeKey}
    className="overflow-hidden whitespace-nowrap animate-typewriter"
    style={{ fontFamily: "syne", fontWeight: 400 }} // lighter font weight
  >
    Hi! 👋 My name is Abhay...
  </span>
  <span className="inline-block w-[2px] h-[1.25em] bg-white animate-caret" />
</h2>


      {/* Headings + CTA */}
      <motion.div
        variants={staggerParent}
        initial="initial"
        animate="animate"
        className="w-full max-w-5xl flex flex-col items-center mt-4 px-4"
      >
        <motion.h1
          variants={fadeUp}
          className="font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4"
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: "700" }}
        >
          MERN Stack Developer &
        </motion.h1>

        <motion.h1
          variants={fadeUp}
          className="font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8"
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: "700" }}
        >
          <span className="text-yellow-400 mr-2">Cloud Computing</span>
          Enthusiast
        </motion.h1>

        <motion.button
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.9 }}
          className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-lg px-8 py-3 font-semibold shadow-lg max-w-xs w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
        >
          <Link to="contact" smooth={true} duration={500} className="w-full h-full block">
            Get in Touch &gt;
          </Link>
        </motion.button>

        {/* Social Media Icons */}
        <motion.div
          variants={fadeUp}
          className="flex gap-4 items-center bg-gray-700 rounded-2xl px-6 py-3 mt-8 max-w-md w-full justify-center"
        >
          {[
            {
              icon: <FaLinkedin size={20} />,
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/abhays07/",
            },
            {
              icon: <FaGithub size={20} />,
              label: "GitHub",
              href: "https://github.com/abhays07",
            },
            {
              icon: <MdEmail size={20} />,
              label: "Email",
              href: "mailto:itsrajputabhaysingh997@gmail.com",
            },
          ].map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white hover:text-amber-300 transition-transform duration-300 ease-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
            >
              {icon}
              <span>{label}</span>
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
