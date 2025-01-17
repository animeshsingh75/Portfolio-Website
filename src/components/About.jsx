import PropTypes from "prop-types";

const About = ({ skills }) => {
  const handleSkillClick = (e) => {
    // Remove any existing animation
    e.currentTarget.querySelector("img").classList.remove("animate-coin-spin");
    // Force a reflow
    void e.currentTarget.querySelector("img").offsetWidth;
    // Add the animation class back
    e.currentTarget.querySelector("img").classList.add("animate-coin-spin");
  };

  return (
    <div id="about" className="bg-neutral-900 py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16  animate_fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="flex flex-col items-center space-y-6">
            <div className="animate-slide-in-left">
              <img
                src="/images/profilePic.jpeg"
                alt="Animesh Singh"
                className="rounded-full w-[200px] h-[200px] md:w-[300px] md:h-[300px] hover:animate-coin-spin-image transition-transform duration-500"
              />
            </div>
            <p className="text-gray-300 text-lg animate-slide-in-left font-poppins text-justify">
              I’m a Software Developer with a passion for solving complex
              problems and a diverse tech stack including Android, React,
              Flutter, and more. I thrive at the intersection of creativity,
              logic, and technology. Outside work, I enjoy exploring new tech,
              staying active, and reading.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex flex-wrap justify-center items-center gap-8 max-w-[800px] mx-auto animate-slide-in-right">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  onClick={handleSkillClick}
                  className={`group flex flex-col items-center p-4 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors duration-300 border border-cyan-500/30 shadow-lg shadow-cyan-500/20 cursor-pointer
                    ${
                      window.innerWidth >= 1300
                        ? `
                    ${index === 0 ? "ml-[25%]" : ""} 
                    ${index === 1 ? "mr-[25%]" : ""}
                    ${index === skills.length - 2 ? "ml-[25%]" : ""}
                    ${index === skills.length - 1 ? "mr-[25%]" : ""}
                    `
                        : ""
                    }
                  `}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-20 h-20 mb-3 transition-transform duration-500 group-hover:animate-coin-spin"
                  />
                  <span className="text-gray-300 text-sm font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

About.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default About;
