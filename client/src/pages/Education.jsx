import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EDUCATION_HISTORY } from "../data/education";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.4 } },
};

const card = {
  hidden: { opacity: 0, x: 70 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Education() {
  const [reloadKey, setReloadKey] = useState(0);

  return (
    <section
      id="education"
      className="bg-[#092A2F] text-white py-14 min-h-screen scroll-mt-[var(--nav-height)]"
      style={{ "--nav-height": "64px" }}
    >
      <div className="mx-auto max-w-full px-18">

        {/* Responsive Heading */}
        <div className="mb-12 text-center flex flex-col items-center w-full gap-4 min-w-0">
          <h2 className="text-2xl sm:text-2xl md:text-5xl font-extrabold text-center">
            My <span className="text-yellow-400">Academics</span> Journey
          </h2>
        </div>

        <div className="relative w-full md:max-w-7xl mx-auto px-2 sm:px-4">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-20 w-1 rounded-full bg-gradient-to-b from-yellow-400 to-yellow-300 shadow-lg" />

          <AnimatePresence mode="wait">
            <motion.ul
              key={reloadKey}
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-20"
            >
              {EDUCATION_HISTORY.map((edu) => (
                <EducationCard key={edu.id} edu={edu} />
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

function EducationCard({ edu }) {
  return (
    <motion.li
      variants={card}
      className="relative md:pl-36"
      style={{ listStyle: "none" }}
    >
      {/* Timeline Dot */}
      <span className="hidden md:block absolute left-12 top-10 w-8 h-8 rounded-full bg-yellow-400 shadow-lg ring-4 ring-[#092A2F]" />

      {/* Card Container */}
      <div className="bg-[#002324] backdrop-blur-md rounded-3xl p-8 shadow-xl max-w-4xl mx-auto md:mx-0">
        <div className="flex flex-wrap justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-yellow-400 max-w-[60%]">{edu.course}</h3>

          <span className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-300 text-black font-bold text-sm py-2 px-6 rounded-full shadow-lg">
            {edu.from} - {edu.to}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          {/* Left Column */}
          <div className="space-y-2">
            <p className="font-semibold text-lg text-white/90">{edu.institute}</p>
            {edu.location && <p className="text-gray-300 text-sm">{edu.location}</p>}
            {edu.score && (
              <p className="inline-block bg-yellow-400 text-black px-3 py-1 rounded-full font-semibold text-sm mt-2">
                {edu.score}
              </p>
            )}
            {edu.branch && (
              <p className="text-white/80 mt-3">
                <span className="font-semibold">Branch:</span> {edu.branch}
              </p>
            )}
            {edu.specialization && (
              <p className="text-white/80">
                <span className="font-semibold">Specialization:</span> {edu.specialization}
              </p>
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-3 text-gray-300 text-sm md:text-base">
            {edu.subjects && (
              <div>
                <p className="font-semibold text-white mb-1">Subjects Covered:</p>
                <ul className="list-disc list-inside space-y-1">
                  {edu.subjects.map((subj, i) => (
                    <li key={i}>{subj}</li>
                  ))}
                </ul>
              </div>
            )}

            {edu.skills && (
              <div>
                <p className="font-semibold text-white mb-1">Skills Acquired:</p>
                <ul className="flex flex-wrap gap-3">
                  {edu.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-yellow-400 text-black rounded-full px-3 py-1 text-xs font-medium shadow"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {edu.description && <p className="mt-4 leading-relaxed">{edu.description}</p>}
          </div>
        </div>
      </div>
    </motion.li>
  );
}
