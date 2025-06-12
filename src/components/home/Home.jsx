import "./home.scss";
import { motion } from "framer-motion";

import Data from "./Data";
import ProfileImg from "../../assets/profile.jpg";
import Scroll from "./Scroll";
import Social from "./Social";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <motion.div
          className="home__content grid"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Social />

          <motion.img
            alt="profile"
            className="home__img"
            src={ProfileImg}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          />

          <Data />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Scroll />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
