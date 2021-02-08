import React from "react";
import BtwShow from "../complements/BtwShow";
import Switch from "./Switch";

import "./style.css"

const mb10 = {
  marginBottom: "10px",
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <h2 style={mb10}>Some Things I’ve Built</h2>
      <Switch />
      <BtwShow value="projects" />
    </section>
  );
};

export default Portfolio;