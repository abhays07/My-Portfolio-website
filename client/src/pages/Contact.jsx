import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { CONTACT_DETAILS } from "../data/contactDetails";
import toast from 'react-hot-toast';

const SOCIALS = [
  { name: "WhatsApp", href: "https://wa.me/9340056987", key: "wa" },
  { name: "Instagram", href: "https://www.instagram.com/itsrajput_abhaysingh/", key: "ig" },
  { name: "Facebook", href: "https://www.facebook.com/abhay.singh.rajput.516610/", key: "fb" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/abhays07/", key: "li" },
];

const footerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const footerFade = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3, delayChildren: 0.1 } },
};
const fadeIn = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Contact() {
  const [reloadKey, setReloadKey] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  function updateField(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function resetForm() {
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  }

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_6yw96lv",
        "template_b5d4oat",
        e.target,
        "K9Kqckkx9mp0THsL9"
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Message sent successfully!");
          resetForm();
        },
        (error) => {
          setLoading(false);
          toast.error("Failed to send message. Please try again.");
          console.error("EmailJS error:", error.text);
        }
      );
  };

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <section
        id="contact"
        className="bg-[#092A2F] text-white py-8 lg:py-14 scroll-mt-[var(--nav-height)]"
        style={{ "--nav-height": "64px" }}
      >
        <div>
          <motion.div
            variants={fadeContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
           
            <motion.h3
              variants={fadeIn}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold"
            >
              Let's
             <span className="text-yellow-400"> Start</span> a conversation👋
            </motion.h3>
          </motion.div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 lg:gap-0">
          {/* Contact info & summary */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeContainer}
            className="flex-1 lg:pr-20"
          >
            <AnimatePresence mode="wait">
              <motion.ul
                key={reloadKey}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeContainer}
                className="space-y-8"
              >
                {CONTACT_DETAILS.map((d, i) => (
                  <motion.li
                    key={i}
                    variants={fadeIn}
                    className="flex items-center gap-5"
                  >
                    <span className="w-12 h-12 rounded-full border-2 border-yellow-400 flex items-center justify-center bg-[#092A2F]">
                      <img src={d.icon} alt="" className="w-9 h-9" />
                    </span>
                    <div>
                      <span className="font-semibold text-lg">{d.label}</span>
                      <div className="text-base text-white/90">{d.value}</div>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
            variants={fadeContainer}
            className="flex-1"
          >
            <form onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-2 gap-5">
                <motion.div variants={fadeIn}>
                  <label
                    className="block mb-2 text-base font-medium"
                    htmlFor="name"
                  >
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      name="name"
                      value={form.name}
                      onChange={updateField}
                      required
                      placeholder="Enter name"
                      className="w-full rounded-md border-none py-3 pl-5 pr-10 bg-white/95 text-black/90 font-medium outline-none focus:ring-2 focus:ring-yellow-400"
                      disabled={loading}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-teal-600">
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 12c2.7 0 4.2-2.2 4.2-4.3C16.2 5.6 14.7 3.4 12 3.4c-2.7 0-4.2 2.2-4.2 4.3 0 2.1 1.5 4.3 4.2 4.3zm0 2c-3.5 0-10 1.8-10 5.3v2.4C2 20.6 6.5 22 12 22c5.5 0 10-1.4 10-2.3v-2.3c0-3.5-6.5-5.3-10-5.3z" />
                      </svg>
                    </span>
                  </div>
                </motion.div>
                <motion.div variants={fadeIn}>
                  <label
                    className="block mb-2 text-base font-medium"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={updateField}
                      required
                      placeholder="Enter email"
                      className="w-full rounded-md border-none py-3 pl-5 pr-10 bg-white/95 text-black/90 font-medium outline-none focus:ring-2 focus:ring-yellow-400"
                      disabled={loading}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-teal-600">
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4 4h16v16H4V4zm0 4l8 6 8-6" />
                      </svg>
                    </span>
                  </div>
                </motion.div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <motion.div variants={fadeIn}>
                  <label
                    className="block mb-2 text-base font-medium"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={updateField}
                      required
                      placeholder="Enter phone"
                      className="w-full rounded-md border-none py-3 pl-5 pr-10 bg-white/95 text-black/90 font-medium outline-none focus:ring-2 focus:ring-yellow-400"
                      disabled={loading}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-teal-600">
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 16.92V19a2 2 0 01-2.18 2A19.72 19.72 0 013 5.32a2 2 0 012-2h2.09a2 2 0 012 1.72c.13 1.02.2 2.5-2.18 3.28a17.65 17.65 0 0012.49 12.49c.78-2.38 2.26-2.31 3.28-2.18a2 2 0 011.72 2.09z" />
                      </svg>
                    </span>
                  </div>
                </motion.div>
                <motion.div variants={fadeIn}>
                  <label
                    className="block mb-2 text-base font-medium"
                    htmlFor="subject"
                  >
                    Subject
                  </label>
                  <div className="relative">
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={updateField}
                      required
                      placeholder="Enter subject"
                      className="w-full rounded-md border-none py-3 pl-5 pr-10 bg-white/95 text-black/90 font-medium outline-none focus:ring-2 focus:ring-yellow-400"
                      disabled={loading}
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-teal-600">
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4 7h16M4 14h16" />
                      </svg>
                    </span>
                  </div>
                </motion.div>
              </div>
              <motion.div variants={fadeIn}>
                <label
                  className="block mb-2 text-base font-medium"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  required
                  rows={2}
                  placeholder="Type your message..."
                  className="w-full rounded-md border-none py-3 px-5 bg-white/95 text-black/90 font-medium outline-none focus:ring-2 focus:ring-yellow-400"
                  disabled={loading}
                />
              </motion.div>
              <motion.button
                type="submit"
                variants={fadeIn}
                whileHover={{
                  y: -3,
                  boxShadow: "0 4px 24px 0 rgba(250,204,21,0.18)",
                  scale: 1.04,
                }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block font-bold px-8 py-2 rounded-md bg-yellow-400 text-black shadow transition focus:outline-none"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Me Message >"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#092A2F] text-white pt-7 pb-4 relative">
        <div className="mx-auto max-w-7xl px-4 flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={footerContainer}
              className="w-full flex flex-col items-center"
            >
              <motion.p
                variants={footerFade}
                className="text-md font-medium text-center mb-2"
              >
                Copyright @2025,<span className="text-yellow-400"> Abhay Singh. </span> All Rights
                Reserved.
              </motion.p>
              <motion.ul variants={footerContainer} className="flex gap-4 mb-2">
                {SOCIALS.map((soc) => (
                  <motion.li
                    key={soc.key}
                    variants={footerFade}
                    whileHover={{
                      y: -2,
                      color: "#FACC15",
                      scale: 1.2,
                      textShadow: "0 2px 18px #FACC15a3",
                    }}
                    transition={{ duration: 0.19, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <a
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold transition focus:outline-none"
                    >
                      {soc.name}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Scroll to top button */}
        <motion.button
          whileHover={{
            scale: 1.12,
            borderColor: "#FACC15",
            backgroundColor: "rgba(250,204,21,0.08)",
            boxShadow: "0 2px 12px 0 #FACC15a3",
          }}
          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          onClick={scrollTop}
          aria-label="Scroll to top"
          className="fixed bottom-11 right-8 z-40 w-9 h-9 grid place-items-center rounded-full border border-white bg-transparent text-white hover:border-yellow-400 shadow outline-none"
        >
          <svg
            width="16"
            height="16"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
            <path strokeWidth="2" d="M8 13l4-4 4 4" />
          </svg>
        </motion.button>
      </footer>
    </>
  );
}
