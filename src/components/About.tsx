import React from 'react';
import { Code, Coffee, Globe, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            About <span className="text-custom-primary">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Crafting Digital Experiences
              </h3>
              {/* <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a passionate mern stack developer with over 3 years of experience in creating 
                robust web applications. I love turning complex problems into simple, beautiful 
                designs that provide meaningful user experiences.
              </p> */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                My journey in web development started with curiosity and has evolved into a 
                deep passion for building scalable applications using modern technologies. 
                I enjoy working with both frontend and backend technologies, always staying 
                up-to-date with the latest industry trends.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-custom-bg to-green-100 p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-custom-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code size={24} className="text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Clean Code</h4>
                <p className="text-sm text-gray-600">Writing maintainable and scalable code</p>
              </div>

              <div className="bg-gradient-to-br from-custom-bg to-green-100 p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-custom-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe size={24} className="text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Web Apps</h4>
                <p className="text-sm text-gray-600">Full stack web applications</p>
              </div>

              <div className="bg-gradient-to-br from-custom-bg to-green-100 p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-custom-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee size={24} className="text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Problem Solving</h4>
                <p className="text-sm text-gray-600">Creative solutions for complex challenges</p>
              </div>

              <div className="bg-gradient-to-br from-custom-bg to-green-100 p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-custom-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart size={24} className="text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">User Focus</h4>
                <p className="text-sm text-gray-600">Building with users in mind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;