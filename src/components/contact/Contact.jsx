import "./Contact.scss";
import "react-toastify/dist/ReactToastify.css";

import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY } =
  process.env;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        REACT_APP_SERVICE_ID,
        REACT_APP_TEMPLATE_ID,
        form.current,
        REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          form.current.reset();
          toast("Email has been sent successfully!");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <ToastContainer />
      <section className="contact section" id="contact">
        <motion.h2
          className="section__title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.h2>

        <motion.span
          className="section__subtitle"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeUp}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Get in touch
        </motion.span>

        <div className="contact__container container grid">
          <motion.div
            className="contact__content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <h3 className="contact__title">Talk to me</h3>

            <div className="contact__info">
              {[
                {
                  icon: "bx bx-mail-send",
                  title: "Email",
                  href: "mailto:khunzinshine@gmail.com",
                },
                {
                  icon: "bx bxl-linkedin",
                  title: "Linkedin",
                  href: "https://www.linkedin.com/in/khun-zin-shine/",
                },
                {
                  icon: "bx bxl-whatsapp",
                  title: "WhatsApp",
                  href: "https://web.whatsapp.com/",
                },
              ].map(({ icon, title, href }, i) => (
                <motion.div
                  key={title}
                  className="contact__card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                >
                  <i className={`${icon} contact__card-icon`}></i>
                  <h3 className="contact__card-title">{title}</h3>
                  <a
                    href={href}
                    className="contact__button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Direct Message
                    <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="contact__content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeUp}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h3 className="contact__title">Write me your project</h3>

            <form ref={form} className="contact__form" onSubmit={sendEmail}>
              <div className="contact__form-div">
                <label htmlFor="" className="contact__form-tag">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="contact__form-input"
                  placeholder="Insert your name"
                />
              </div>

              <div className="contact__form-div">
                <label htmlFor="" className="contact__form-tag">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  required
                  className="contact__form-input"
                  placeholder="Insert your email"
                />
              </div>

              <div className="contact__form-div contact__form-area">
                <label htmlFor="" className="contact__form-tag">
                  Project
                </label>
                <textarea
                  name="project"
                  className="contact__form-input"
                  cols="30"
                  required
                  rows="10"
                  placeholder="Write your project overview"
                ></textarea>
              </div>

              <button
                href="#contact"
                className="button button--flex contact__button-send"
              >
                Send Message
                <svg
                  className="button__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                    fill="var(--container-color)"
                  ></path>
                  <path
                    d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                    fill="var(--container-color)"
                  ></path>
                </svg>
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
