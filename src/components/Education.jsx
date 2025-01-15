import React from "react";
import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="py-8 ">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="m-4 text-center text-3xl font-bold"
      >
        Education
      </motion.h2>
      {EDUCATION.map((edu, index) => (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay:index*0.5 }}
          key={index}
          className="mb-6 px-10 py-5"
        >
          <h3 className="text-xl font-semibold">{edu.degree}</h3>
          <p className="text-lg">{edu.institution}</p>
          <p className="text-sm text-stone-300">{edu.duration}</p>
          <p className="mt-2 text-justify">{edu.description}</p>
        </motion.div>
      ))}
    </section>
  );
};

export default Education;
