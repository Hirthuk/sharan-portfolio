import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
  FiSend,
  FiCheckCircle,
  FiTwitter,
  FiInstagram
} from "react-icons/fi";
import { FaPaperPlane, FaDiscord } from "react-icons/fa";
import { useProfile } from "../context/profilecontext";
import emailjs from "emailjs-com"
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef();
  const { darkMode } = useProfile();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    // Replace these with your actual EmailJS IDs
    const SERVICE_ID = "service_17yqup8";
    const TEMPLATE_ID = "template_49esxup";
    const PUBLIC_KEY = "iVSIObIDotzZw_JY7";

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        PUBLIC_KEY
      );
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setIsSending(false);
      formRef.current.reset();
    } catch (error) {
      alert("Failed to send message. Please try again later.");
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className={`min-h-screen py-20 px-4 md:px-16 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } transition-colors duration-500`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-400 to-blue-500">
            Get In Touch
          </h2>
          <p
            className={`text-lg mt-4 max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            } transition-colors duration-300`}
          >
            Whether you have a question, idea, or opportunity — I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                    className={`flex flex-col gap-6 justify-start ${
                      darkMode ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    <div className="space-y-5">
                      <ContactItem
                        Icon={FiMail}
                        text="sharankumarp02@gmail.com"
                        link="mailto:sharankumarp02@gmail.com"
                        darkMode={darkMode}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                      <ContactItem
                        Icon={FiPhone}
                        text="+91 63856 42886"
                        link="tel:+916385642886"
                        darkMode={darkMode}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                      <ContactItem
                        Icon={FiMapPin}
                        text="Bengaluru / Chennai / Hyderabad"
                        darkMode={darkMode}
                      />
                    </div>
                    <div className="flex gap-4 mt-6">
                      <SocialLink
                        Icon={FiLinkedin}
                        href="https://www.linkedin.com/in/sharankumar-p-g3/"
                        label="LinkedIn"
                        darkMode={darkMode}
                      />
                      <SocialLink
                        Icon={FiGithub}
                        href="https://github.com/Hirthuk"
                        label="GitHub"
                        darkMode={darkMode}
                      />
                      <SocialLink
                        Icon={FiTwitter}
                        href="https://x.com/Sharankuma61629" // Add your Twitter link here
                        label="Twitter"
                        darkMode={darkMode}
                      />
                      <SocialLink
                        Icon={FiInstagram}
                        href="https://www.instagram.com/sharan_13_09/" // Add your Instagram link here
                        label="Instagram"
                        darkMode={darkMode}
                      />
                      <SocialLink
                        Icon={FaDiscord}
                        href="https://discord.com/users/ereneager8497" // Add your Discord link here
                        label="Discord"
                        darkMode={darkMode}
                      />
                    </div>
                  </motion.div>

                  {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className={`${
                darkMode
                  ? "bg-[#1c1c2d]/60 border-gray-700 shadow-[0_0_15px_rgba(139,92,246,0.1)]"
                  : "bg-white/60 border-gray-200 shadow-lg"
              } backdrop-blur-md p-8 rounded-3xl border hover:shadow-xl transition-all duration-500`}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <FiCheckCircle className="text-5xl text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-green-600">Message Sent!</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Thank you for reaching out. I'll get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300 font-medium hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <div className="space-y-6">
                  <FloatingLabelInput
                    name="name"
                    label="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    darkMode={darkMode}
                  />
                  <FloatingLabelInput
                    name="email"
                    label="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    darkMode={darkMode}
                  />
                  <FloatingLabelTextarea
                    name="message"
                    label="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    darkMode={darkMode}
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSending}
                    className="w-full mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium text-lg shadow-lg hover:from-purple-600 hover:to-blue-600 transition-all relative overflow-hidden"
                  >
                    <div className="flex justify-center items-center gap-2 relative z-10">
                      {isSending ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="text-white" />
                          Send Message
                        </>
                      )}
                    </div>
                    {isSending && (
                      <motion.div
                        className="absolute top-0 left-0 h-full bg-white/10"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    )}
                  </motion.button>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Contact Item with more animations
const ContactItem = ({ Icon, text, link, darkMode }) => (
  <motion.div
    whileHover={{ x: 5 }}
    whileTap={{ scale: 0.98 }}
    className="flex items-center gap-4 group"
  >
    <motion.div
      whileHover={{ rotate: [0, -10, 10, -5, 0] }}
      transition={{ duration: 0.5 }}
      className={`p-2 ${
        darkMode
          ? "bg-purple-900/20 group-hover:bg-purple-800/30"
          : "bg-purple-100 group-hover:bg-purple-200"
      } rounded-full transition-colors duration-300 shadow-md hover:shadow-lg`}
    >
      <Icon className="text-xl text-purple-500 group-hover:text-purple-400 transition-colors" />
    </motion.div>
    {link ? (
      <a
        href={link}
        className={`text-base md:text-lg ${
          darkMode ? "hover:text-purple-400 text-white" : "hover:text-purple-600 text-black"
        } transition-colors duration-300`}
      >
        {text}
      </a>
    ) : (
      <span className={`text-base md:text-lg ${darkMode ? "text-white" : "text-black"}`}>{text}</span>
    )}
  </motion.div>
);

// Enhanced Social Link with improved animations
const SocialLink = ({ Icon, href, label, darkMode }) => (
  <motion.a
    whileHover={{ y: -3, scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`p-3 ${
      darkMode
        ? "bg-[#252538] hover:bg-purple-700 text-white"
        : "bg-gray-100 hover:bg-purple-600 text-black"
    } rounded-full hover:text-white transition-all duration-300 relative group shadow-md hover:shadow-lg`}
    aria-label={label}
  >
    <Icon className="text-xl" />
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileHover={{ opacity: 1, y: 0 }}
      className="absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded whitespace-nowrap shadow-lg"
    >
      {label}
    </motion.span>
  </motion.a>
);

// Enhanced Floating Label Input
const FloatingLabelInput = ({ label, name, value, onChange, type = "text", darkMode }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required
        placeholder=" "
        className={`peer w-full px-4 py-3 rounded-lg border ${
          darkMode
            ? "border-gray-700 bg-[#23233a] text-gray-100"
            : "border-gray-300 bg-white text-gray-900"
        } focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 shadow-sm focus:shadow-md`}
      />
      <motion.label
        className={`absolute left-4 text-sm ${
          darkMode ? "text-gray-400" : "text-gray-500"
        } peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 pointer-events-none origin-left`}
        animate={{
          y: focused || value ? -20 : 12,
          scale: focused || value ? 0.85 : 1
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {label}
      </motion.label>
    </div>
  );
};

// Enhanced Floating Label Textarea
const FloatingLabelTextarea = ({ label, name, value, onChange, darkMode }) => {
  const [focused, setFocused] = useState(false);
  const maxLength = 500;

  return (
    <div className="relative">
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required
        maxLength={maxLength}
        rows={4}
        placeholder=" "
        className={`peer w-full px-4 py-3 rounded-lg border ${
          darkMode
            ? "border-gray-700 bg-[#23233a] text-gray-100"
            : "border-gray-300 bg-white text-gray-900"
        } focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none transition-all duration-300`}
      />
      <motion.label
        className={`absolute left-4 text-sm ${
          darkMode ? "text-gray-400" : "text-gray-500"
        } peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 pointer-events-none origin-left`}
        animate={{
          y: focused || value ? -20 : 12,
          scale: focused || value ? 0.85 : 1
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {label}
      </motion.label>
      <div className="absolute bottom-2 right-2 text-xs text-gray-400">
        {value.length}/{maxLength}
      </div>
    </div>
  );
};

export default Contact;