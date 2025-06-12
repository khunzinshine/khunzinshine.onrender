import "./qualification.scss";
import { motion } from "framer-motion";

const Qualification = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="qualification section">
      <motion.h2
        className="section__title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        Qualification
      </motion.h2>

      <motion.span
        className="section__subtitle"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        My Journey
      </motion.span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <motion.div
            className="qualification__button qualification__active button--flex"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </motion.div>

          <motion.div
            className="qualification__button qualification__active button--flex"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </motion.div>
        </div>

        <div className="qualification__sections">
          <motion.div
            className="qualification__content qualification__content-active"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
              hidden: {},
            }}
          >
            {[
              {
                title: "Senior Frontend Developer",
                subtitle: "Codigo",
                calendar: "Nov 2023 - Present",
                left: true,
              },
              {
                title: "Computer Science",
                subtitle: "University of Computer Studies, Taunggyi",
                calendar: "Dec 2014 - Sep 2019",
                left: false,
              },
              {
                title: "Full Stack Developer",
                subtitle: "City Holdings Limited",
                calendar: "Jan 2023 - Oct 2023",
                left: true,
              },
              {
                title: "The Complete Node.js Developer",
                subtitle: "Udemy",
                calendar: "Feb 2021",
                left: false,
              },
              {
                title: "Frontend Developer",
                subtitle: "AYA Bank (AYA Innovation Labs)",
                calendar: "Mar 2021 - Dec 2022",
                left: true,
              },
              {
                title: "React - The Complete Guide",
                subtitle: "Udemy",
                calendar: "Feb 2021",
                left: false,
              },
              {
                title: "QA Tester",
                subtitle: "AYA Bank (AYA Innovation Labs)",
                calendar: "Mar 2020 - Feb 2021",
                left: true,
              },
              {
                title: "The Agile Sumurai Bootcamp",
                subtitle: "Udemy",
                calendar: "Sep 2020",
                left: false,
              },
              {
                title: "Web Developer Internship",
                subtitle: "Acroquest Myanmar Technology",
                calendar: "May 2019 - July 2019",
                left: true,
              },
            ].map(({ title, subtitle, calendar, left }, i) => (
              <motion.div
                className="qualification__data"
                key={i}
                variants={itemVariants}
              >
                {left ? (
                  <>
                    <div>
                      <h3 className="qualification__title">{title}</h3>
                      <span className="qualification__subtitle">
                        {subtitle}
                      </span>
                      <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i> {calendar}
                      </div>
                    </div>

                    <div>
                      <span className="qualification__rounder"></span>
                      <span className="qualification__line"></span>
                    </div>
                  </>
                ) : (
                  <>
                    <div></div>

                    <div>
                      <span className="qualification__rounder"></span>
                      <span className="qualification__line"></span>
                    </div>

                    <div>
                      <h3 className="qualification__title">{title}</h3>
                      <span className="qualification__subtitle">
                        {subtitle}
                      </span>
                      <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i> {calendar}
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
