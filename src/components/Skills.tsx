import React from "react";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      level: 95,
      category: "Frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      level: 90,
      category: "Frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Tailwind CSS",
      level: 95,
      category: "Frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "JavaScript",
      level: 90,
      category: "Frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      level: 85,
      category: "Frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      level: 80,
      category: "Backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "MongoDB",
      level: 75,
      category: "Database",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Firebase",
      level: 80,
      category: "Backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "REST API",
      level: 85,
      category: "Backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    },
  ];

  const categories = ["Frontend", "Backend", "Database"];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-custom-bg to-green-100"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">
            My <span className="text-custom-primary">Skills</span>
          </h2>
        </div>

        {/* Category-based Skill Bars */}
        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                {category}
              </h3>
              <div className="space-y-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <span className="text-custom-primary font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-custom-primary to-custom-primary-dark h-3 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-custom-primary to-custom-primary-dark rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transform transition duration-300">
                  <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
