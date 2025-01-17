import { useState } from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Proabt",
      description:
        "ProAbt is a community chat app developed entirely in Kotlin which helps in solving programming doubts of an individual.",
      techStack: "Android, Kotlin, Firebase",
      thumbnail: "images/proabt.png",
      liveLink: "",
      githubLink: "https://github.com/animeshsingh75/ProAbt/",
    },
    {
      id: 2,
      title: "FoodFire",
      description:
        "A React app for exploring restaurants, browsing menus, managing a cart with Redux, fast bundling via Parcel, and quality assurance with Jest.",
      techStack: "React, Redux, Parcel, Jest",
      thumbnail: "images/foodfire.png",
      liveLink: "https://foodfire-animesh.vercel.app/",
      githubLink: "https://github.com/animeshsingh75/Food-Ordering-App",
    },
    {
      id: 3,
      title: "Weather App",
      description:
        "It shows the weather and even the forecast for the next 5 days and even important details like humidity, wind speed, pressure, etc. You can select your location by gps or by searching any city.",
      techStack: "Android, Kotlin, MVVM",
      thumbnail: "images/weather.png",
      liveLink: "",
      githubLink: "https://github.com/animeshsingh75/Weather-App-Android",
    },
    {
      id: 4,
      title: "Linkedin Clone",
      description:
        "A LinkedIn clone built with React, Tailwind CSS, NodeJS and MongoDB, featuring user authentication, profile creation, and networking features.",
      techStack: "React, Tailwind CSS, NodeJS, MongoDB",
      thumbnail: "images/coming_soon.jpeg",
      liveLink: "",
      githubLink: "",
      comingSoon: true,
    },
    {
      id: 5,
      title: "Flutter Apps",
      description:
        "A diverse collection of 8 Flutter projects developed for Android and iOS, showcasing skills in building functional and scalable apps. Includes API-powered apps like Clima and Bitcoin Price, as well as creative tools like FlashChat and TodoApp.",
      techStack: "Flutter, Dart",
      thumbnail: "images/flutter_projects.webp",
      liveLink: "",
      githubLink: "https://github.com/animeshsingh75/Flutter-Projects",
    },
    {
      id: 6,
      title: "Real Life Projects",
      description:
        "A collection of real-life projects which are based on the real-life problems and solutions using Data Structures and Algorithms.",
      techStack: "HTML, CSS, JavaScript,DSA",
      thumbnail: "images/real_life_project.png",
      liveLink: "",
      githubLink: "https://github.com/animeshsingh75/Real-Life-Project",
    },
  ];

  const [visibleProjects, setVisibleProjects] = useState(3);

  const showMoreProjects = () => {
    setVisibleProjects(projects.length);
  };

  const showLessProjects = () => {
    setVisibleProjects(3);
  };

  return (
    <div id="projects" className="bg-neutral-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp"
            >
              <div className="relative h-64 bg-neutral-200 group-hover:cursor-pointer">
                {project.comingSoon && (
                  <div className="absolute -left-12 top-6 bg-green-500 text-white px-12 py-1 rotate-[-45deg] z-10 shadow-lg shadow-green-500/50  text-center">
                    Coming Soon....
                  </div>
                )}
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="absolute inset-0 object-center w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center p-4">
                    {!project.comingSoon && (
                      <div className="flex space-x-4 mb-4 justify-center">
                        {project.liveLink !== "" && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            className="bg-cyan-500 text-white px-4 py-2 rounded-full hover:bg-cyan-600 transition-colors duration-300"
                          >
                            View Live
                          </a>
                        )}
                        <a
                          href={project.githubLink}
                          target="_blank"
                          className="bg-neutral-700 text-white px-4 py-2 rounded-full hover:bg-neutral-800 transition-colors duration-300"
                        >
                          GitHub
                        </a>
                      </div>
                    )}
                    <p className="text-white">{project.techStack}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-justify">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          {visibleProjects < projects.length ? (
            <button
              onClick={showMoreProjects}
              className="inline-block bg-cyan-500 text-white px-8 py-3 rounded-full font-medium hover:bg-cyan-600 transition-colors duration-300"
            >
              View More Projects
            </button>
          ) : (
            <button
              onClick={showLessProjects}
              className="inline-block bg-cyan-500 text-white px-8 py-3 rounded-full font-medium hover:bg-cyan-600 transition-colors duration-300"
            >
              Show Less Projects
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
