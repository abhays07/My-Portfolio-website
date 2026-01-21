import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import {
  FaHome,
  FaUserAlt,
  FaProjectDiagram,
  FaTools,
  FaCertificate,
  FaGraduationCap,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";
import Logo from "../assets/icons/A.svg";
import { motion } from "framer-motion";
 
 const menuItems = [
   { href: "home", icon: <FaHome size={20} />, label: "Home" },
   { href: "about", icon: <FaUserAlt size={20} />, label: "About" },
   { href: "skills", icon: <FaTools size={20} />, label: "Skills" },
   { href: "projects", icon: <FaProjectDiagram size={20} />, label: "Projects" },
   { href: "certifications", icon: <FaCertificate size={20} />, label: "Certifications" },
   { href: "education", icon: <FaGraduationCap size={20} />, label: "Academics" },
   { href: "contact", icon: <FaEnvelope size={20} />, label: "Contact" },
   { href: "/abhay_Resume.pdf", icon: <FaDownload size={20} />, label: " Download Resume", isDownload: true },
 ];
 
 const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navBg, setNavBg] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const inactivityTimer = useRef(null);
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(64);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const linkProps = {
    smooth: true,
    duration: 500,
    spy: true,
    offset: -30,
  };

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.getBoundingClientRect().height);
    }

    const resetInactivityTimer = () => {
      setIsVisible(true);
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
      inactivityTimer.current = setTimeout(() => {
        setIsVisible(false);
      }, 40000);
    };

    const handleScroll = () => {
      if (!isVisible) setIsVisible(true);

      setNavBg(window.scrollY >= navHeight);

      resetInactivityTimer();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", resetInactivityTimer);
    window.addEventListener("keydown", resetInactivityTimer);

    if (window.scrollY >= navHeight) setNavBg(true);

    resetInactivityTimer();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", resetInactivityTimer);
      window.removeEventListener("keydown", resetInactivityTimer);
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    };
  }, [isVisible, navHeight]);

  /* menuItems moved outside component */

  return (
    <nav
      ref={navRef}
      className={`fixed w-full z-50 top-0 left-0 transform transition-transform duration-700 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
        } ${navBg ? "bg-yellow-400 text-[#092A2F] shadow-md" : "bg-transparent text-white"}`}
      style={{ height: `${navHeight}px`, lineHeight: `${navHeight}px` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center mt-1 cursor-pointer transition-transform duration-300"
            offset={-navHeight}
          >
            <motion.img
              src={Logo}
              alt="Abhay Logo"
              className="h-20 w-auto"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            />
          </Link>

          {/* Desktop Icons Menu */}
          <div className="hidden md:flex space-x-6 text-lg">
            {menuItems.map(({ href, icon, label, isDownload }) =>
              isDownload ? (
                <a
                  key={label}
                  href={href}
                  download
                  className={`cursor-pointer p-2 rounded hover:bg-yellow-300 hover:text-[#092A2F] transition-transform duration-300 ${navBg ? "text-[#092A2F]" : "text-white"
                    }`}
                  title={label}
                >
                  {icon}
                </a>
              ) : (
                <Link
                  key={label}
                  to={href}
                  {...linkProps}
                  className={`cursor-pointer p-2 rounded hover:bg-yellow-300 hover:text-[#092A2F] transition-transform duration-300 ${navBg ? "text-[#092A2F]" : "text-white"
                    }`}
                  title={label}
                >
                  {icon}
                </Link>
              )
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} aria-label="Toggle Menu" className="focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden px-4 py-4 space-y-4 text-lg transition-colors duration-300 ${navBg ? "bg-yellow-400 text-[#092A2F]" : "bg-[#072429] text-white"
            }`}
        >
          {menuItems.map(({ href, label, isDownload }) =>
            isDownload ? (
              <a
                key={label}
                href={href}
                download
                className="block cursor-pointer hover:text-yellow-700"
                onClick={closeMenu}
              >
                {label.charAt(0).toUpperCase() + label.slice(1)}
              </a>
            ) : (
              <Link
                key={label}
                to={href}
                {...linkProps}
                className="block cursor-pointer hover:text-yellow-700"
                onClick={closeMenu}
              >
                {label.charAt(0).toUpperCase() + label.slice(1)}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
