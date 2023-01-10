import React from 'react';
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper"
import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
  whileInView:{
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
}

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1]}}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">ESTÁS ATERRIZANDO EN:</p>
              <h1 className="head-text">GLOBAL LANGUAGE CENTER</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">EL MEJOR CENTRO ONLINE DE IDIOMAS</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="app__header-img"
      >
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }} 
          src={images.profile} 
          alt="profile_bg" 
        />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>
      <motion.div
       variant={scaleVariants}
       whileInView={scaleVariants.whileInView}
       className="app__header-circles"
      >
        <motion.div whileHover={{ scale:1.3 }} transition={{ duration: 0.5, type: "tween" }} className="circle-cmp app__flex" key={`circle-0`}>
        <a href="https://thegloballanguagecenter.studio/" className="app__flex">
          <img src={images.spanish} alt="circle" />
        </a>
        </motion.div>
        <motion.div whileHover={{ scale:1.3 }} transition={{ duration: 0.5, type: "tween" }} className="circle-cmp app__flex" key={`circle-1`}>
        <a href="https://degloballanguagecenter.tech" className="app__flex">
          <img src={images.german} alt="circle" />
        </a>
        </motion.div>
        <motion.div whileHover={{ scale:1.3 }} transition={{ duration: 0.5, type: "tween" }} className="circle-cmp app__flex" key={`circle-2`}>
        <a href="https://engloballanguagecenter.studio/" className="app__flex">
          <img src={images.english} alt="circle" />
        </a>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, "inicio");