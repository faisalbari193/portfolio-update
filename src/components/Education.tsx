import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Electrical Engineering',
      institution: 'Bangladesh Army University Of Engineering and Technology',
      year: '2018 - 2022',
      description: 'Specialized in Automation. Graduated with honors.',
      achievements: ['Dean\'s List', 'Best Final Project Award', 'Automation Contest Winner']
    },
    {
      degree: 'MERN Stack Web Development Bootcamp',
      institution: 'PH Academy',
      year: '2025',
      description: 'Intensive 6-month program focusing on modern web development technologies.',
      achievements: ['Top 5% of class', 'Capstone Project Excellence', 'Industry Certification']
    },
    {
      degree: 'JavaScript Algorithms and Data Structures',
      institution: 'freeCodeCamp',
      year: '2025',
      description: 'Comprehensive certification covering advanced JavaScript concepts and problem-solving.',
      achievements: ['300+ coding challenges completed', 'Advanced algorithms mastery']
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            My <span className="text-custom-primary">Education</span>
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-custom-primary"></div>

            {education.map((item, index) => (
              <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-custom-primary rounded-full border-4 border-white shadow-lg"></div>
                
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-gradient-to-br from-custom-bg to-green-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    {/* Year Badge */}
                    <div className="flex items-center mb-4">
                      <Calendar size={16} className="text-custom-primary mr-2" />
                      <span className="text-custom-primary font-semibold">{item.year}</span>
                    </div>

                    {/* Degree and Institution */}
                    <div className="flex items-start mb-4">
                      <GraduationCap size={24} className="text-custom-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{item.degree}</h3>
                        <p className="text-custom-primary-dark font-medium">{item.institution}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>

                    {/* Achievements */}
                    <div className="flex items-start">
                      <Award size={16} className="text-custom-primary mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Key Achievements:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {item.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm">{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;