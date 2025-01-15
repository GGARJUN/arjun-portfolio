import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";
import { links } from "../constants";

const Footer = () => {
  return (
    <div className="mb-8 ">
      <div className="flex items-center justify-center">
        <motion.img
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          src={logo}
          width={200}
          className="my-20"
        />
      </div>
      {/* <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <motion.a
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 , delay:index*0.4}}
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </motion.a>
        ))}
      </div> */}
      <motion.div 

      className="flex items-center justify-center w-full">
        <FloatingDock
          mobileClassName="translate-y-20" // only for demo, remove for production
          items={links}
        />
      </motion.div>
      <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
        &copy;compiletap. All right reserved.
      </p>
    </div>
  );
};

export default Footer;
