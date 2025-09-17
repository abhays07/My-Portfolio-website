import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILLS } from "../data/skills";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 } // aligned stagger timing with other sections
  }
};

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } // 0.7s duration consistent with others
  }
};

export default function Skills() {
  const [reloadKey, setReloadKey] = useState(0);

  return (
    <section
      id="skills"
      className="bg-[#092A2F] text-white py-12 lg:py-14 scroll-mt-[var(--nav-height)]"
      style={{ "--nav-height": "64px" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold"
          >
             My <span className="text-yellow-400">Skills</span> & Experience
          </motion.h2>

          <button
            onClick={() => setReloadKey((k) => k + 1)}
            className="rounded-lg bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10 border border-white/10 hover:border-yellow-400 transition-colors duration-300"
            title="Replay animations"
          >
            Reload Animations
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.ul
            key={reloadKey}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {SKILLS.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </section>
  );
}

function SkillCard({ skill }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.li
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      variants={card}
      whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(0,0,0,0.35)" }}
      className="group relative rounded-2xl bg-white/5 ring-1 ring-white/10 p-3 transition-shadow duration-300"
      style={{ overflow: "visible" }}
    >
      {/* Animated yellow border outline on hover */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={hovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-0 z-10 rounded-2xl border-yellow-400"
        style={{
          boxShadow: hovered
            ? "0 0 0 2px #FACC15, 0 4px 16px 0 rgba(255,220,70,0.18)"
            : "none"
        }}
      />

      <div className="flex flex-col items-center gap-3 relative z-20">
        <img src={skill.icon} alt={skill.name} className="h-12 w-12" draggable="false" />
        <p className="text-lg font-semibold">{skill.name}</p>
      </div>

      {/* Progress bar with ARIA */}
      <div
        className="mt-6 ml-4 w-7/8 rounded-full bg-black/20 "
        role="progressbar"
        aria-label={`${skill.name} proficiency`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={skill.percent}
      >
        <motion.div
          initial={{ width: "0%" }}
          whileInView={{ width: `${skill.percent}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ backgroundColor: hovered ? "#000000" : skill.color }}
          className="relative h-8 rounded-full"
        >
          <span
            className={`absolute inset-0 grid place-items-center font-bold transition-colors duration-500 ${
              hovered ? "text-white" : "text-black"
            }`}
          >
            {skill.percent}%
          </span>
        </motion.div>
      </div>

      {/* Gradient ring on hover */}
      <div className="pointer-events-none mt-4 rounded-xl opacity-0 transition-opacity group-hover:opacity-100 duration-700">
        <div className="h-1 rounded-full bg-gradient-to-r from-yellow-400/40 via-emerald-300/30 to-cyan-300/40 blur-md" />
      </div>
    </motion.li>
  );
}
