import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4, // delay between children
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Social = () => {
  return (
    <motion.div
      className="home__social"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {[
        {
          href: "https://github.com/khunzinshine",
          icon: "uil uil-github",
        },
        {
          href: "https://www.linkedin.com/in/khun-zin-shine/",
          icon: "uil uil-linkedin",
        },
        {
          href: "https://join.skype.com/invite/dBb8BnLPCvOo",
          icon: "uil uil-skype",
        },
        {
          href: "https://www.instagram.com/khunzinshine/",
          icon: "uil uil-instagram-alt",
        },
      ].map((item, index) => (
        <motion.a
          key={index}
          href={item.href}
          className="home__social-icon"
          target="_blank"
          rel="noreferrer"
          variants={itemVariants}
        >
          <i className={item.icon}></i>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Social;
