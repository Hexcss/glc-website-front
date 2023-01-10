import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Work.scss";

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{y: 100, opacity: 0}]);

    setTimeout(() => {
      setAnimateCard([{y: 0, opacity: 1}]);

      if (item === "Todos") {
        setFilterWork(works);
      }else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  }

  return (
    <>
      <h2 className="head-text title-work">
          Mira Nuestras
          <span> Mejores Clases</span>
          <br />
          Con Nuestros
          <span> Mejores Alumnos</span>
        </h2>
        <div className="app__work-filter">
          {["Español", "Inglés", "Alemán", "Francés", "Todos"].map((item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${activeFilter === item ? "item-active" : ""}`}
            >
              {item}
            </div>
          ))}
        </div>
        <motion.div
        className="app__work-portfolio"
          animate={animateCard}
          transition={{duartion: 0.5, delayChildren: 0.5}}
        >
          {filterWork.map((work, index) => (
            <div className="app__work-item app__flex" key={index}>
              <div className="app__work-img app__flex">
                <iframe  src={`https://www.youtube.com/embed/${work.projectLink}`} frameborder="0" allowFullScreen="true" title="video" webkitallowfullscreen="true"></iframe>
              </div>
              <div className="app__work-content app__flex">
                <h4 className="bold-text">{work.title}</h4>
                <p className="p-text" style={{marginTop: 10}}>{work.description}</p>
                <div className="app__work-tag app__flex">
                  <p className="p-text">{work.tags[0]}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Work, "app__works"), 
  "videos",
  "app__primarybg"
);