import PropTypes from "prop-types";
import { useState } from "react";

const WorkExperience = ({ experiences }) => {
  const [showAll, setShowAll] = useState(false);

  const displayedExperiences = showAll ? experiences : experiences.slice(0, 2);

  return (
    <div id="experience" className="bg-neutral-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
        </div>

        <div className="relative">
          <div
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-neutral-800"
            style={{ height: "calc(100% - 5rem)" }}
          ></div>

          <div className="space-y-16">
            {displayedExperiences.map((exp, index) => (
              <div className="relative" key={index}>
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full border-4 border-neutral-900"></div>
                </div>
                <div
                  className={`${
                    index % 2 === 0 ? "ml-auto w-1/2 pl-8" : "w-1/2 pr-8"
                  }  ${
                    index % 2 === 0
                      ? "animate-slide-in-left"
                      : "animate-slide-in-right"
                  }`}
                >
                  <div className="bg-neutral-800 p-6 rounded-xl hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">
                        {exp.title}
                      </h3>
                      <span className="text-cyan-500">{exp.date}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-lg text-cyan-400">{exp.company}</h4>
                      <span className="hidden sm:block text-gray-400">
                        {exp.location}
                      </span>
                    </div>
                    <ul className="text-gray-400 space-y-2 text-justify">
                      {exp.points.map((point, i) => (
                        <li key={i}>
                          • <span dangerouslySetInnerHTML={{ __html: point }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {experiences.length > 2 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-md transition-colors duration-300"
              >
                {showAll ? "Show Less" : "Show More"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

WorkExperience.propTypes = {
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      points: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default WorkExperience;
