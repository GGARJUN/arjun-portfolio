import { HERO } from "../constants/index";
// import arjunImg from "../assets/arjun.jpg";
import arjunImg from "../assets/arjun-removebg1.png";
import { motion } from "framer-motion";



const Hero = () => {
  return (
    <section className="flex min-h-screen flex-wrap items-center mt-14 mx-10 ">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2  "
      >
        <h2 className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]">
          {HERO.name}
        </h2>
        <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
          {HERO.greet}
        </p>
        <p className="mb-8 p-2 text-xl text-justify ">{HERO.description}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 lg:p-8"
      >
        <div className="flex justify-center items-center relative ">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src={arjunImg}
            alt="profile"
            width={500}
            height={550}
            className="rounded-3xl md:ml-20  z-10"
          />
          <div className="h-80 w-80 rounded-full bg-blue-500 absolute top-0 blur-2xl "></div>
          <div className="h-[300px] w-[300px] bg-gradient-to-t from-blue-700 to-pink-700 rounded-full absolute top-0 left-0 blur-3xl animated "></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
