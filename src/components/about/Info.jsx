import { motion } from "framer-motion";

const Info = () => {
  return (
    <div className="about__info grid">
      <motion.div
        className="about__box"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">5+ Years</span>
      </motion.div>

      <motion.div
        className="about__box"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <i className="bx bx-briefcase about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">20+ Projects</span>
      </motion.div>

      <motion.div
        className="about__box"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </motion.div>
    </div>
  );
};

export default Info;
