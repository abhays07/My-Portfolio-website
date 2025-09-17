import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEye } from "react-icons/fa";
import { CERTIFICATIONS } from "../data/certifications";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 }
  }
};

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function Certifications() {
  const [reloadKey, setReloadKey] = useState(0);

  return (
    <section
      id="certifications"
      className="bg-[#092A2F] text-white py-8 lg:py-14 scroll-mt-[var(--nav-height)]"
      style={{ "--nav-height": "64px" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Updated header section */}
        <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.36 }}
            transition={{ duration: 0.7 }}
            className="text-center sm:text-left flex-1 min-w-0"
          >
            <h2 className="text-2xl sm:text-2xl md:text-5xl  font-extrabold whitespace-nowrap overflow-hidden text-ellipsis">
              My <span className="text-yellow-400">Certifications</span> Journey
            </h2>
          </motion.div>

          <button
            onClick={() => setReloadKey((k) => k + 1)}
            className="rounded-lg bg-white/5 px-4 py-2 text-sm font-semibold border border-white/10 hover:bg-white/10 hover:border-yellow-400 transition-colors duration-300"
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
            viewport={{ once: false, amount: 0.22 }}
            className="grid mt-12 gap-8 md:grid-cols-3"
          >
            {CERTIFICATIONS.map((cert) => (
              <CertificationCard key={cert.id} cert={cert} />
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </section>
  );
}

function CertificationCard({ cert }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.li
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      variants={card}
      whileHover={{ y: -6, boxShadow: "0 18px 44px rgba(0,0,0,0.19)" }}
      className="group relative rounded-2xl bg-yellow-400/90 text-black px-7 py-9 shadow-sm transition duration-300 flex flex-col items-start hover:bg-yellow-300"
      style={{ overflow: "visible" }}
    >
      {/* Eye icon top-right corner */}
      {cert.certificateUrl && (
        <a
          href={cert.certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View certificate for ${cert.name}`}
          className="
            absolute top-5 right-5 text-[#092A2F] text-lg p-2 rounded
            border border-transparent
            hover:border-emerald-900
            hover:shadow-md hover:shadow-emerald-700/40
            transition-colors duration-500 ease-in-out
            focus:outline-none focus:ring-2 focus:ring-emerald-900
          "
          onClick={(e) => e.stopPropagation()}
        >
          <FaEye />
        </a>
      )}

      {/* Animated dark border outline on hover */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={hovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-0 z-10 rounded-2xl border-2 border-[#092A2F]"
        style={{
          boxShadow: hovered
            ? "0 0 0 2px #092A2F, 0 4px 16px 0 rgba(16,16,32,0.14)"
            : "none"
        }}
      />

      {/* Logo */}
      <div className="mb-5">
        <span className="w-14 h-14 flex items-center justify-center rounded-full bg-[#092A2F]">
          <img src={cert.logo} alt={`${cert.name} logo`} className="h-8 w-8" draggable="false" />
        </span>
      </div>

      {/* Name */}
      <div className="mb-2 text-xl font-semibold font-sans" style={{ fontFamily: "inherit" }}>
        {cert.name}
      </div>

      {/* Skills (badges) */}
      <div className="mb-4 flex gap-2 flex-wrap">
        {cert.skills.map((skill) => (
          <span
            key={skill}
            className="inline-block rounded-md bg-white/90 text-[#092A2F] px-2.5 py-0.5 text-xs font-semibold"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Description */}
      <div className="text-sm leading-relaxed text-black/90">{cert.description}</div>
    </motion.li>
  );
}
