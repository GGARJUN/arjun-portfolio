
import { SKILLS } from "../constants";
import { motion } from "framer-motion";

const containerVariables = {
  hidden: {opacity: 0, y: 20},
  visible: {opacity: 1, 
  y: 0, 
  transition: {
    duration: 1, 
    staggerChildren: 0.5,
  },
},
} 

const itemVariants = {
  hidden : {
    opacity: 0, x: -20
  },
  visible: {
    opacity: 1, x: 0, trasition: { duration:0.8 }
  },
}

const Skills = () => {

  return (
    <div className="container mx-auto " id="skills">
      <motion.h2 
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mt-20 mb-12 text-4xl font-semibold text-center">Skills</motion.h2>
      <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariables}
      viewport={{once: true}}

      className="flex flex-col px-4 py-2 mx-2 border rounded-3xl lg:px-20 border-stone-50/30">
        {SKILLS.map((skill, index) => (
          <motion.div
          variants={itemVariants}
            key={index}
            className={`py-6 flex items-center justify-center ${
              index !== SKILLS.length - 1 ? "border-b border-stone-50/30" : ""
            }`}
          >
            <div className="flex items-center ">
              {skill.icon}
              <h3 className="px-6 text-lg lg:text-2xl">{skill.name}</h3>
            </div>
            {/* <div className="font-semibold text-md lg:text-xl">
                <span>{skill.experience}</span>
            </div> */}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
