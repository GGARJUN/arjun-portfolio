import React, { useState } from "react";
import { motion } from "framer-motion";
import { CERTIFICATION } from "../constants/index";

const Certification = () => {
    const [selectedImage, setSelectedImage] = useState(null);

      const handleOpen = (image) => {
        setSelectedImage(image);
      };
    
      const handleClose = () => {
        setSelectedImage(null);
      };
  return (
    <section id="Certification" className="pt-20 max-w-5xl">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-4xl font-semibold tracking-tighter"
      >
        Certification
      </motion.h2>
      <div className="grid sm:grid-cols-2 gap-4 pt-10">
        {CERTIFICATION.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={`Thumbnail ${image.id}`}
            className="rounded-lg sm:w-[500px] w-96 sm:h-[350px] cursor-pointer object-cover"
            onClick={() => handleOpen(image.src)}
          />
        ))}
      </div>

      {/* Popup Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <motion.div
            className="relative p-4 bg-white  rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            {/* Popup Image */}
            <img
              src={selectedImage}
              alt="Popup Image"
              className="rounded-lg sm:w-[650px] w-96 sm:h-[450px]"
            />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute -top-1 right-1 text-gray-900 text-2xl hover:text-red-500"
            >
               &times;
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Certification;
