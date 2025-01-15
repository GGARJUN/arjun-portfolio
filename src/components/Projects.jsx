
import { PROJECTS } from "../constants";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="pt-20" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-3xl text-center lg:text-4xl"
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 px-10">
        {PROJECTS.map((project) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale1: 1.05 }}
            className="relative overflow-hidden group rounded-2xl"
            key={project.id}
          >
            <motion.img
              src={project.image}
              alt={project.name}
              className="object-cover w-96 h-96 "
            />
            {/* <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ opacity: 1}}
             className="absolute  flex flex-col items-center justify-center top-0 ">
              <h1>Hello</h1>
              {/* <h3 className="mb-2 text-xl font-semibold">{project.name}</h3> */}
              {/* <p className="p-4 mb-12">{project.description}</p> */}
              {/* <div className="flex items-center justify-between gap-5">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-black bg-white rounded-full hover:bg-gary-300"
                >
                  <div className="flex items-center">
                    <span className="font-medium">GitHub</span>
                    <MdArrowOutward />
                  </div>
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-black bg-white rounded-full hover:bg-gary-300"
                >
                  <div className="flex items-center">
                    <span className="font-medium">Live Link</span>
                    <MdArrowOutward />
                  </div>
                </a>
              </div> */}
            {/* </motion.div>  */}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
