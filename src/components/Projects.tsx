import React from "react";
import { ExternalLink, Github, Code, Database, Smartphone } from "lucide-react";

const Projects = () => {
  const projects = [
    // {
    //   title: 'E-Commerce Platform',
    //   description: 'A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration.',
    //   technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    //   features: ['User Authentication', 'Payment Processing', 'Admin Dashboard', 'Responsive Design'],
    //   image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
    //   liveUrl: '#',
    //   githubUrl: '#',
    //   category: 'Full Stack'
    // },
    {
      title: "Gardening-Hub",
      description:
        "A full-featured gardening community web application where users can share, browse, and manage garden tips.",
      technologies: ["React.js","JavaScript", "Firebase", "Tailwind CSS", "Context API"],
      features: [
        "Real-time Updates",
        "Team Collaboration",
        "File Attachments",
        "Progress Tracking",
      ],
      image: "https://i.postimg.cc/FKn282X1/plants-pot-with-watering-can.jpg",
      liveUrl: "https://gardening-hub-2363f.web.app/",
      githubUrl: "https://github.com/faisalbari193/gardening-hub",
      category: "Frontend",
    },
    {
      title: "B2B-Mart",
      description:
        "A full-stack B2B wholesale platform connecting bulk suppliers (manufacturers, distributors) with global retailers, resellers, and institutional buyers. The platform supports multi-category product listings, bulk orders, secure transactions, and logistics management.",
      technologies: [
        "JavaScript",
        "REST API",
        "Node.js",
        "CSS3",
        " MongoDB",
        "Express.js",
        "React.js",
        "Tailwind CSS",
      ],
      features: [
        "Location Detection",
        "Weather Forecasts",
        "Interactive Charts",
        "Responsive UI",
      ],
      image: "https://i.postimg.cc/KvFsqZ3J/142290-OTJ3-R5-100.jpg",
      liveUrl: "https://b2b-mart-5ce62.web.app/",
      githubUrl: "https://github.com/faisalbari193/b2b-mart",
      category: "Frontend",
    },
    // {
    //   title: 'Blog API Backend',
    //   description: 'A RESTful API for a blogging platform with user management, content creation, and comment system.',
    //   technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    //   features: ['User Authentication', 'CRUD Operations', 'Rate Limiting', 'API Documentation'],
    //   image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
    //   liveUrl: '#',
    //   githubUrl: '#',
    //   category: 'Backend'
    // },
    {
      title: "Blood Donate",
      description:
        "A full-featured MERN Stack (MongoDB, Express, React, Node.js) based blood donation platform that connects donors, recipients, volunteers, and admins to make blood donation easier, secure, and efficient.",
      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Framer Motion",
        "firebase",
        "Context API",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      features: [
        "Responsive Design",
        "Smooth Animations",
        "Contact Form",
        "SEO Optimized",
      ],
      image: "https://i.postimg.cc/MZ3Q9LzJ/Screenshot-34.png",
      liveUrl: "https://blood-donate-8c3f0.web.app/",
      githubUrl: "https://github.com/faisalbari193/blood-donate",
      category: "Frontend",
    },
    // {
    //   title: 'Chat Application',
    //   description: 'Real-time chat application with multiple rooms, file sharing, and user presence indicators.',
    //   technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    //   features: ['Real-time Messaging', 'File Sharing', 'User Status', 'Message History'],
    //   image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=600',
    //   liveUrl: '#',
    //   githubUrl: '#',
    //   category: 'Full Stack'
    // }
  ];

  const categories = ["All", "Full Stack", "Frontend", "Backend"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Full Stack":
        return <Code size={16} />;
      case "Frontend":
        return <Smartphone size={16} />;
      case "Backend":
        return <Database size={16} />;
      default:
        return <Code size={16} />;
    }
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-custom-bg to-green-100"
    >
      <div className="container px-4 mx-auto">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-4xl font-bold text-center text-gray-800">
            My <span className="text-custom-primary">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto mb-12 text-center text-gray-600">
            Here are some of the projects I've worked on, showcasing my skills
            in full-stack development.
          </p>

          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="p-2 bg-white rounded-full shadow-lg">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-custom-primary text-white shadow-md"
                      : "text-gray-600 hover:text-custom-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="overflow-hidden transition-all duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl group"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="flex items-center gap-1 px-3 py-1 text-sm font-medium text-white rounded-full bg-custom-primary">
                      {getCategoryIcon(project.category)}
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-gray-800">
                    {project.title}
                  </h3>
                  <p className="mb-4 leading-relaxed text-gray-600">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="mb-2 font-semibold text-gray-800">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm font-medium rounded-full bg-custom-bg text-custom-primary-dark"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="mb-2 font-semibold text-gray-800">
                      Key Features:
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-custom-primary rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      className="flex-1 text-white btn btn-primary btn-sm"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex-1 btn btn-outline btn-sm"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          {/* <div className="mt-12 text-center">
            <button className="px-8 btn btn-outline btn-lg">
              View More Projects
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
