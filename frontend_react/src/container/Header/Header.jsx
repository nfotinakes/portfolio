import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

function Header() {
  return (
    <div id='home' className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          
            
            <div className="app__header-main" >
              
              <h1>NICK FOTINAKES</h1>
            </div>
          
          <div className="app__header-container">

          
            <h2>Full Stack Developer </h2> 
    
            
            <h3>React // Node // SQL </h3>
          </div>

            </div>
          
        </div>
      </motion.div>

      {/* Background pic and circle image */}
      {/* <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay_circle"
          src={images.circle}
          alt="profile_circle"
        />
      </motion.div> */}

      {/* <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.react, images.node, images.figma].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`cirlce-${index}`}>
            <img src={circle} alt="profile_bg" />
          </div>
        ))}
      </motion.div> */}
    </div>
  );
}

export default AppWrap(Header, 'home');
