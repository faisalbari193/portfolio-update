import React from "react";
import { Facebook, Github, Linkedin, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-custom-bg to-green-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-custom-primary rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-custom-primary to-custom-primary-dark rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl overflow-hidden">
              <img
                src="https://i.ibb.co.com/QjHTT5V3/photo-2025-11-18-18-02-53.jpg"
                alt=""
                className="rounded-full object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Hi, I'm <span className="text-custom-primary">Arshadul Bari</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            MERN Stack Web Developer
          </p>

          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional web applications
            using modern technologies. I transform ideas into digital
            experiences that make a difference.
          </p>

          {/* Location */}
          <div className="flex items-center justify-center text-gray-500 mb-8">
            <MapPin size={20} className="mr-2" />
            <span>Available for remote work worldwide</span>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/faisalbari193"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            >
              <Github
                size={24}
                className="text-gray-600 group-hover:text-custom-primary transition-colors"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/faisal-bari-1b7713350/"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin
                size={24}
                className="text-gray-600 group-hover:text-custom-primary transition-colors"
              />
            </a>
            <a
              href="https://www.facebook.com/share/1AiLECmBGM/?mibextid=qi2Omg"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            >
              <Facebook
                size={24}
                className="text-gray-600 group-hover:text-custom-primary transition-colors"
              />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn btn-primary btn-lg text-white px-8"
            >
              View My Work
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn btn-outline btn-lg px-8"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
