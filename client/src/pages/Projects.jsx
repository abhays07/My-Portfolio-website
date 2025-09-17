import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CATEGORIES, PROJECTS } from "../data/project";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] } // consistent 0.7s duration
  }),
  exit: { opacity: 0, y: -12, transition: { duration: 0.25 } }
};

export default function ProjectsPage() {
  const [active, setActive] = useState("Show All");
  const items = useMemo(
    () => (active === "Show All" ? PROJECTS : PROJECTS.filter((p) => p.tag === active)),
    [active]
  );

  return (
    <section
      id="projects"
      className="bg-[#092A2F] text-white py-12 lg:py-14 scroll-mt-[var(--nav-height)]"
      style={{ "--nav-height": "64px" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          View My Latest <span className="text-yellow-400">Works</span>
        </motion.h2>

        {/* Categories Filter */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative pb-1 font-medium ${
                active === cat ? "text-yellow-400" : "text-teal-100/80 hover:text-white"
              } transition-colors duration-300`}
            >
              {cat}
              {active === cat && <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-yellow-400 rounded" />}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-10 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {items.map((p, i) => (
              <motion.article
                key={p.id}
                layout
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition-shadow duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="relative aspect-[8/5] overflow-hidden">
                  <img
                    src={p.cover}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <div className="p-5">
                  <span className="text-sm text-yellow-400">{p.tag}</span>
                  <h3 className="mt-1 text-lg sm:text-xl font-semibold">{p.title}</h3>
                </div>

                <div className="absolute inset-0 flex items-start p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="ml-auto flex gap-2">
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-yellow-400 px-3 py-2 text-black text-sm font-semibold hover:bg-yellow-300 transition-colors duration-300"
                    >
                      Visit
                    </a>
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-white/30 px-3 py-2 text-sm font-semibold hover:bg-white/10 transition-colors duration-300"
                      >
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
