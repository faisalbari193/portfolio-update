import React from "react";
import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Name */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-custom-primary mb-2">
              Md. Arshadul Bari
            </h3>
            <p className="text-gray-400">MERN Stack Web Developer</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {["About", "Skills", "Education", "Projects", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() =>
                    document
                      .getElementById(item.toLowerCase())
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-gray-300 hover:text-custom-primary transition-colors duration-200"
                >
                  {item}
                </button>
              )
            )}
          </div>

          {/* Copyright */}
          {/* <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 John Doe. All rights reserved.
            </p>
            <p className="text-gray-400 flex items-center">
              Made with <Heart size={16} className="text-red-500 mx-1" /> using React & Tailwind CSS
            </p>
          </div> */}
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 bg-custom-primary hover:bg-custom-primary-dark text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
