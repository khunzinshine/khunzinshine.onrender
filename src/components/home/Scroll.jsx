import { motion } from "framer-motion";

const Scroll = () => {
  return (
    <motion.div
      className="home__scroll"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <a href="#about" className="home__scroll-button button--flex">
        <svg
          width="32px"
          height="32px"
          className="home__scroll-mouse"
          viewBox="0 0 247 390"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "1.5",
          }}
        >
          <motion.path
            className="wheel"
            d="M123.359,79.775l0,72.843"
            style={{
              fill: "none",
              stroke: "var(--title-color)",
              strokeWidth: "20px",
            }}
            animate={{
              y: [0, 15, 0], // bounce effect
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <path
            id="mouse"
            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
            style={{
              fill: "none",
              stroke: "var(--title-color)",
              strokeWidth: "20px",
            }}
          />
        </svg>
        <span className="home__scroll-name">Scroll Down</span>
        <motion.i
          className="uil uil-arrow-down home__scroll-arrow"
          animate={{ y: [0, 2, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </a>
    </motion.div>
  );
};

export default Scroll;
