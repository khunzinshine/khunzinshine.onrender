import "./home.scss";

import Data from "./Data";
import ProfileImg from "../../assets/profilePhoto.jpeg";
import React from "react";
import Scroll from "./Scroll";
import Social from "./Social";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <img alt="profile" className="home__img" src={ProfileImg} />
          <Data />
        </div>
        <Scroll />
      </div>
    </section>
  );
};

export default Home;
