import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import {AppWrap, MotionWrap} from '../../wrapper';
import "./About.scss";
import { urlFor, client } from "../../client";

// const abouts = [
//   {
//     title: "Web Development",
//     description: "I am a good web developer.",
//     imgURL: images.about01,
//   },
//   {
//     title: "Web Design",
//     description: "I am a good web developer.",
//     imgURL: images.about02,
//   },
//   {
//     title: "UI/UX",
//     description: "I am a good web developer.",
//     imgURL: images.about03,
//   },
//   {
//     title: "Web Animations",
//     description: "I am a good web developer.",
//     imgURL: images.about04,
//   },
// ];

function About() {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);
  return (
    <>
      <h2 className="head-text">
        I Know That <span>Good Development</span>
        <br /> means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />

            <h2 className="bold-text" style={{ marginTop: 15, textAlign: "center" }}>
              {" "}
              {about.title}{" "}
            </h2>
            <p className="p-text p-secondary" style={{ marginTop: 10 }}>
              {" "}
              {about.description}{" "}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

// export default AppWrap(About, 'about');

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
