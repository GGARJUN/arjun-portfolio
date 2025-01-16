import React from "react";
import { BIO } from "../constants";
import { motion } from "framer-motion";
import arjunImg from "../assets/Arjun.png";
import arjunD from "../assets/Shadow.png";

const Bio = () => {
  return (
    <section className="flex  flex-col gap-12 pt-20" id="bio">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-3xl lg:text-4xl"
      >
        Bio
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, }}
          className="  text-justify "
        >
          {/* {bio} */}
          <div className="md:flex justify-center items-center gap-5">

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }} className="relative">
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                src={arjunImg} alt="" className="object-cover w-[300px]  md:ml-0 ml-10  md:mr-24 " />
              <div className="h-80 w-80 rounded-full bg-blue-500 absolute top-0 blur-2xl -z-50"></div>
              <div className="h-[300px] w-[300px] bg-gradient-to-t from-blue-700 to-pink-700 rounded-full absolute top-0 left-0 blur-3xl animated -z-10"></div>
              <img src={arjunD} alt="" className="absolute md:-left-14 -left-3 -bottom-12  " />
            </motion.div>


            <div className="grid md:grid-cols-2  mt-20  justify-center items-center gap-5 ">
              {BIO.map((bio, index) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale1: 1.05 }}
                  key={index} className='p-3  w-96 border shadow-md bg-white/10 border-stone-50/30 rounded-xl flex flex-col gap-2'>
                  <img src={bio.image} alt="" className="w-16 h-16 rounded-full" />
                  <h1 className="text-xl font-bold">{bio.title}</h1>
                  <p className="text-base">{bio.decs}</p>
                  
                </motion.div>
              ))}
                      <div className="h-[300px] w-[300px] bg-gradient-to-t from-blue-700 to-pink-700 rounded-full absolute top-0 left-0 blur-3xl animated -z-10"></div>


            </div>




          </div>

        </motion.div>
        {/* ))} */}
      </motion.div>
    </section>
  );
};

export default Bio;
