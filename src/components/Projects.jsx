
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";


const Projects = () => {
  return (
    <section className="pt-20" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-10 text-3xl text-center lg:text-4xl"
      >
        Projects
      </motion.h2>



      {/* <div className="grid grid-cols-3   gap-10">
        <CardContainer className=" w-96">
          <CardBody className="border shadow-md bg-white/10  border-stone-50/30 relative group/card sm:w-[30rem] h-[400px] rounded-xl p-5   ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold  text-white"
            >
              Make things float in air
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className=" text-sm max-w-sm mt-2 text-neutral-300"
            >
              Hover over this card to unleash the power of CSS perspective.Hover over this card to unleash the power of CSSHover over this card to unleash the power of CSS perspectiveperspective
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={p1}
                className="h- w-96 object-cover  rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-5 ">
              <CardItem
                translateZ={20}
                // as={Link}
                href="https://twitter.com/mannupaaji"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white bg-black"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Sign up
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className=" w-96">
          <CardBody className="border shadow-md bg-white/10  border-stone-50/30 relative group/card sm:w-[30rem] h-[350px] rounded-xl p-5   ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold  text-white"
            >
              Make things float in air
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className=" text-sm max-w-sm mt-2 text-neutral-300"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={p1}
                className="h- w-96 object-cover  rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-5">
              <CardItem
                translateZ={20}
                // as={Link}
                href="https://twitter.com/mannupaaji"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white bg-black"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Sign up
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="w-96">
          <CardBody className="border shadow-md bg-white/10  border-stone-50/30 relative group/card sm:w-[30rem] h-[350px] rounded-xl p-5   ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold  text-white"
            >
              Make things float in air
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className=" text-sm max-w-sm mt-2 text-neutral-300"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={p1}
                className="h- w-96 object-cover  rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-5">
              <CardItem
                translateZ={20}
                // as={Link}
                href="https://twitter.com/mannupaaji"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white bg-black"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Sign up
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className=" w-96">
          <CardBody className="border shadow-md bg-white/10  border-stone-50/30 relative group/card sm:w-[30rem] h-[350px] rounded-xl p-5   ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold  text-white"
            >
              Make things float in air
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className=" text-sm max-w-sm mt-2 text-neutral-300"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={p1}
                className="h- w-96 object-cover  rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-5">
              <CardItem
                translateZ={20}
                // as={Link}
                href="https://twitter.com/mannupaaji"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white bg-black"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Sign up
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className=" w-96">
          <CardBody className="border shadow-md bg-white/10  border-stone-50/30 relative group/card sm:w-[30rem] h-[350px] rounded-xl p-5   ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold  text-white"
            >
              Make things float in air
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className=" text-sm max-w-sm mt-2 text-neutral-300"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={p1}
                className="h- w-96 object-cover  rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-5">
              <CardItem
                translateZ={20}
                // as={Link}
                href="https://twitter.com/mannupaaji"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white bg-black"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Sign up
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className=" w-96">
          <CardBody className="border shadow-md bg-white/10  border-stone-50/30 relative group/card sm:w-[30rem] h-[350px] rounded-xl p-5   ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold  text-white"
            >
              Make things float in air
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className=" text-sm max-w-sm mt-2 text-neutral-300"
            >
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={p1}
                className="h- w-96 object-cover  rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-5">
              <CardItem
                translateZ={20}
                // as={Link}
                href="https://twitter.com/mannupaaji"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white bg-black"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Sign up
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

      </div> */}



      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3  px-10 relative">
        
        {PROJECTS.map((project) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale1: 1.05 }}
            className=""
            key={project.id}
          >
            <CardContainer className=" w-96">
              <CardBody className="border shadow-md bg-white/10  border-stone-50/30 relative group/card sm:w-[30rem] h-[400px] rounded-xl p-5   ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold  text-white"
                >
                  {project.name}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className=" text-sm max-w-sm mt-2 text-neutral-300"
                >
                  {project.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={project.image}
                    className="h- w-96 object-cover  rounded-xl group-hover/card:shadow-xl"
                    alt={project.name}
                  />
                </CardItem>
                <div className="flex justify-center items-center mt-5 ">
                  <CardItem
                    translateZ={20}
                    // as={Link}
                    href="https://meeting-schedule-tan.vercel.app/"
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-sm font-semibold  dark:text-white border shadow-md bg-white/10  border-stone-50/30 hover:bg-white/20"
                  >
                    <a target="__blank" href={project.githubLink}>Visit the Link</a>
                    
                  </CardItem>
                  {/* <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Sign up
                  </CardItem> */}
                </div>
              </CardBody>
            </CardContainer>
            


            {/* <motion.img
              src={project.image}
              alt={project.name}
              className="object-cover w-96 h-96 "
            /> */}
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
