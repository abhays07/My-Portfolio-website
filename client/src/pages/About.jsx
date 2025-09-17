import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/images/profile.png";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25, delayChildren: 0.2 } } // aligned with home section
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } // matching navbar and home animation timing
  }
};

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#092A2F] text-white scroll-mt-[var(--nav-height)] min-h-screen flex items-center "
      style={{ "--nav-height": "64px",
       }} // consistent scroll offset variable
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-2 lg:px-2 w-full">
        {/* Section Title */}
        <motion.div
          className="text-center mb-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            className="text-4xl sm:text-5xl tracking-wide text-white font-bold"
            variants={fadeUp}
          >
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: "700" }}>About </span><span className="text-yellow-400">Me</span>
          </motion.p>
        </motion.div>

        {/* Grid Layout */}
        <motion.div
          className="grid gap-4 lg:gap-8 lg:grid-cols-12 items-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left: Profile Image */}
          <motion.div
            className="lg:col-span-5 flex justify-center"
            variants={fadeUp}
          >
            <div className="relative overflow-hidden rounded-xl ring-1 ring-white/10 shadow-2xl w-full max-w-sm">
              <img
                src={profile}
                alt="Profile"
                className="w-full h-auto object-contain rounded-2xl"
              />
              <div className="absolute -mt-16 left-20 translate-y-1/2">
                <span className="inline-flex items-center gap-2 rounded-full bg-yellow-400 text-black px-4 py-1 text-sm font-semibold shadow-lg">
                  Available for Work
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-800 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-800" />
                  </span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div className="lg:col-span-6" variants={fadeUp}>
            <h1 className="mb-3 mt-4 text-2xl sm:text-2xl font-extrabold leading-snug">
              Enthusiastic <span className="text-yellow-400">Computer Science</span> student transforming ideas into{" "}
              <span className="text-yellow-400">smart applications</span>.
            </h1>

            <p className="mb-6 max-w-2xl text-sm sm:text-base text-teal-100/80">
              Hello! I’m Abhay, a Computer Science engineer with expertise in Java, Data Structures & Algorithms, Web Development, MySQL, and AWS Cloud Foundations. Passionate about delivering innovative solutions.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400 text-xl">→</span>
                  <span className="text-base">Programming</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400 text-xl">→</span>
                  <span className="text-base">Web Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400 text-xl">→</span>
                  <span className="text-base">Cloud Computing</span>
                </li>
              </ul>

              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400 text-xl">→</span>
                  <span className="text-base">Graphics Designing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400 text-xl">→</span>
                  <span className="text-base">Social Media Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-400 text-xl">→</span>
                  <span className="text-base">Digital Marketing</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 max-w-md">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-yellow-500 px-5 py-2 text-black font-semibold hover:bg-yellow-400 transition-colors"
              >
                Let’s Work Together
              </a>
              <a
                href="/abhay_Resume.pdf"
                download
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-2 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
