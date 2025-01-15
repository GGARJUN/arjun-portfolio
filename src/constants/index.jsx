import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaWhatsapp ,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/Project-1.jpeg";
import projectImage2 from "../assets/Project-2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import C1 from "../assets/C1.png";
import C2 from "../assets/C2.png";
import C3 from "../assets/C3.jpeg";
import C4 from "../assets/C4.png";


import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { label: "Bio", href: "#bio" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Work Experience", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Certification", href: "#Certification" },
  { label: "Contact", href: "#contact" },
];

export const CERTIFICATION = [
  { id: 1, src: C1 },
  { id: 2, src: C2 },
  { id: 3, src: C3 },
  { id: 4, src: C4 }
]

export const HERO = {
  name: "ARJUN GG",
  greet: "Hello there! 👋🏻",
  description:
    " A passionate and detail-oriented web developer with a strong foundation in front-end technologies, including HTML, CSS, JavaScript, and modern frameworks like React.js. Skilled in building responsive, user-friendly websites with a focus on clean code and efficient performance. Proficient in utilizing tools like Tailwind CSS and Git for version control. Adept at collaborating with teams to deliver projects on time while continuously learning and adapting to new technologies. Looking to contribute to a dynamic team and further develop skills in full-stack development.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/user/personal-portfolio",
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    githubLink: "https://github.com/user/ecommerce-platform",
  },
  {
    id: 3,
    name: "Task Management Tool",
    description:
      "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards, task assignment, and progress tracking.",
    image: projectImage3,
    githubLink: "https://github.com/user/task-management-tool",
  },
  {
    id: 4,
    name: "Weather App",
    description:
      "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
    image: projectImage4,
    githubLink: "https://github.com/user/weather-app",
  },
  {
    id: 5,
    name: "Blog Platform",
    description:
      "A blogging platform developed with Next.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
    image: projectImage5,
    githubLink: "https://github.com/user/blog-platform",
  },
  {
    id: 6,
    name: "Chat Application",
    description:
      "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
    image: projectImage6,
    githubLink: "https://github.com/user/chat-application",
  },
];

export const BIO = [
  "My name is Arjun G.G, and I am an aspiring web developer with a Bachelor of Technology in Information Technology from Ultra College of Engineering and Technology in Madurai. I have a CGPA of 7.85, which reflects my dedication and hard work throughout my academic career. I also hold a Diploma in Mechanical Engineering from NPR Polytechnic College, which has given me a solid foundation in technical principles and problem-solving skills.",
  "During my academic journey, I have actively engaged in personal projects that have allowed me to apply my theoretical knowledge in practical settings. One of my notable projects is developing a deep learning model for detecting diseases in tea leaves using Python, Flask, and TensorFlow. Additionally, I created a Meeting Schedule web application using Next.js, Firebase, JavaScript, and TailwindCSS, showcasing my ability to build functional and user-friendly web applications.",
  "I am proficient in various technical skills, including HTML, CSS, JavaScript, ReactJs, NextJs, and TailwindCSS. I am also familiar with tools and databases like Node.js, VScode, Git, GitHub, MongoDB, Firebase, and PostgreSQL. I am particularly interested in web development and front-end development, and I am always eager to learn new technologies and improve my skills. I believe my strong technical background, combined with my problem-solving abilities and adaptability, make me a strong candidate for this position.",


];

export const SKILLS = [
  {
    icon: <FaHtml5  className="text-4xl text-orange-600 lg:text-5xl" />,
    name: "HTML5",
    experience: "1+ years",
  },
  {
    icon: <FaCss3Alt  className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "CSS3",
    experience: "1+ years",
  },
  {
    icon: <RiJavascriptFill className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "JavaScript",
    experience: "1+ years",
  },
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "1+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "NextJs",
    experience: "1+ year",
  },
  {
    icon: <RiTailwindCssFill className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "TailwindCSS",
    experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "NodeJs",
    experience: "0.5+ years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "+ year",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "0.5+ years",
  },
];

export const EXPERIENCES = [
  {
    title: "Web development and designing",
    company: "Oasis Infobyte Internship",
    duration: "Feb - May 2024",
    description:
      "This internship is observed by Oasis Infobyte as being a learning opportunity for you, spanning a duration of 1 month.. Proficient in designing, deploying, and managing fault-tolerant, highly available, and scalable Oasis Infobyte. In essence, your internship will embrace orientation and give emphasis on learning new skills with a deeper under standing of concepts through hands-on application of the knowledge you gained as an intern.",
  },
  {
    title: "Web development",
    company: "Bharat Intern Virtual Internship",
    duration: "Jan - Feb 2024",
    description:
      "Full-Stack Exposure: Get hands-on experience in both front-end and back-end development. Real-world Projects: Work on projects that make a real impact and contribute to your professional portfolio.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology (Information Technology)",
    institution: "Ultra College of Engineering and Technology, Madurai",
    duration: "July 2021 - June 2024",
    description:
      "A Bachelor of Technology in Information Technology (B.Tech IT) is a comprehensive undergraduate program that combines theoretical knowledge with practical skills to equip students for the dynamic field of IT. This program typically spans four years and covers a wide range of subjects, including programming, software development, database management, network security, and web technologies.",
  },
  {
    degree: "Diploma Mechanical Engineering",
    institution: "NPR Polytechnic College, Dindigul",
    duration: "july 2018 - June 2020",
    description:
      "A Diploma in Mechanical Engineering is a technical education program designed to provide students with a strong foundation in the principles and practices of mechanical engineering. Typically spanning three years, this program equips students with the practical skills and theoretical knowledge needed to design, analyze, and maintain mechanical systems and machinery.",
  },
  {
    degree: "+2 Computer Science Higher Secondary School",
    institution: "Sourashtra Higher Secondary School",
    duration: "June 2017 - june 2018",
    description:
      "Completing +2 Higher Secondary School with a focus on Computer Science equips students with foundational knowledge and skills in computing, programming, and information technology. This specialization prepares students for higher education in computer science and related fields or for entry-level positions in the IT industry.",
  },
  {
    degree: "10th SSLC",
    institution: "Balamandiram Higher Secondary School",
    duration: "June 2015 - June 2016",
    description:
      "The 10th Standard Secondary School Leaving Certificate (SSLC) is a crucial milestone in a student's educational journey, typically marking the completion of secondary education. The SSLC is pivotal as it sets the foundation for higher secondary education and various career paths",
  },
];

// export const SOCIAL_MEDIA_LINKS = [
//   {
//     href: "https://wa.link/06atv0",
//     icon: <FaWhatsapp  fontSize={25} className="hover:opacity-80" />,
//   },
//   {
//     href: "https://discord.com/channels/@me",
//     icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
//   },
//   {
//     href: "https://www.instagram.com/ns_boy_arjun/",
//     icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
//   },
//   {
//     href: "https://x.com/",
//     icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
//   },
//   {
//     href: "https://github.com/GGARJUN",
//     icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
//   },
//   {
//     href: "https://www.linkedin.com/in/arjun-2085-ganesh/",
//     icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
//   },
// ];

export const links = [
  {
    title: "Whatsapp",
    icon: (
      <FaWhatsapp className="h-full w-full text-white" />
    ),
    href: "https://wa.link/06atv0",
  },

  {
    title: "Discord",
    icon: (
      <FaDiscord className="h-full w-full text-white" />
    ),
    href: "https://discord.com/channels/@me",
  },
  {
    title: "Instagram",
    icon: (
      <FaInstagram className="h-full w-full text-white" />
    ),
    href: "https://www.instagram.com/ns_boy_arjun/",
  },
  {
    title: "Twitter",
    icon: (
      <FaXTwitter className="h-full w-full text-white" />
    ),
    href: "https://x.com/",
  },

  {
    title: "GitHub",
    icon: (
      <FaGithub className="h-full w-full text-white" />
    ),
    href: "https://github.com/GGARJUN",
  },
  {
    title: "LinkedIn",
    icon: (
      <FaLinkedin className="h-full w-full text-white" />
    ),
    href: "https://www.linkedin.com/in/arjun-2085-ganesh/",
  },
];


