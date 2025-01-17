import React, { useState, useEffect } from 'react';
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 flex justify-center p-1 items-center w-8 h-8 right-3 border shadow-md bg-white/10  border-stone-50/30  text-white  rounded-full  hover:bg-blue-600 transition duration-300"
        >
          <FaRegArrowAltCircleUp className='h-full w-full' />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
