import { motion } from "framer-motion";
import "./skills.scss";

import Backend from "./Backend";
import Frontend from "./Frontend";

const Skills = () => {
  return (
    <motion.section
      className="skills section"
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Skills</span>
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </motion.section>
  );
};

export default Skills;
