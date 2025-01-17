import { useState } from "react";

const Skills = () => {
  const visibleSkills = [
    {
      category: "Frontend Development",
      icon: "M4 6h16M4 12h16m-7 6h7",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 80 },
        { name: "React.js", level: 85 },
        { name: "Tailwind CSS", level: 75 },
      ],
    },
    {
      category: "Mobile Development",
      icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
      skills: [
        { name: "Android", level: 95 },
        { name: "IOS", level: 85 },
        { name: "Flutter", level: 90 },
        { name: "Dagger Hilt", level: 70 },
      ],
    },
    {
      category: "Languages",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      skills: [
        { name: "Kotlin", level: 90 },
        { name: "C++", level: 95 },
        { name: "Python", level: 80 },
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "Dart", level: 85 },
      ],
    },
  ];

  const hiddenSkills = [
    {
      category: "Backend Development",
      icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 95 },
        { name: "GraphQL", level: 80 },
      ],
    },
    {
      category: "Databases",
      icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
      skills: [
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 95 },
        { name: "MongoDB", level: 85 },
        { name: "Firebase", level: 95 },
      ],
    },
    {
      category: "Tools & Others",
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 60 },
        { name: "Jenkins", level: 90 },
        { name: "AWS", level: 85 },
      ],
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleShowAll = () => setShowAll(!showAll);

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const renderSkillsList = (skills, category) => {
    const isExpanded = expandedCategories[category];
    const displaySkills = isExpanded ? skills : skills.slice(0, 3);
    const showExpandButton = skills.length > 3;

    return (
      <div className="space-y-4">
        {displaySkills.map((skill, skillIndex) => (
          <div key={skillIndex}>
            <div className="flex justify-between text-sm text-gray-400 mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="h-2 bg-neutral-700 rounded-full">
              <div
                className="h-full bg-cyan-500 rounded-full transition-all duration-1000
                  relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0
                  before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
                  before:animate-shimmer hover:bg-cyan-400 animate-load-progress"
                style={{
                  width: `${skill.level}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
        {showExpandButton && (
          <button
            onClick={() => toggleCategory(category)}
            className="text-cyan-500 hover:text-cyan-400 flex items-center gap-1 text-sm"
          >
            {isExpanded ? (
              <>
                Show Less <span className="transform rotate-180">↓</span>
              </>
            ) : (
              <>
                Show More <span>↓</span>
              </>
            )}
          </button>
        )}
      </div>
    );
  };

  return (
    <section id="skills" className="bg-neutral-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleSkills.map((section, index) => (
            <div
              key={index}
              className="bg-neutral-800 p-6 rounded-xl animate__animated animate__fadeInUp"
            >
              <div className="text-cyan-500 mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={section.icon}
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {section.category}
              </h3>
              {renderSkillsList(section.skills, section.category)}
            </div>
          ))}

          {showAll &&
            hiddenSkills.map((section, index) => (
              <div
                key={index}
                className="bg-neutral-800 p-6 rounded-xl animate__animated animate__fadeInUp"
              >
                <div className="text-cyan-500 mb-4">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={section.icon}
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {section.category}
                </h3>
                {renderSkillsList(section.skills, section.category)}
              </div>
            ))}
        </div>

        <div className="text-center mt-8">
          <button
            className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-cyan-600 transition"
            onClick={toggleShowAll}
          >
            {showAll ? "Show Less Skills" : "Show More Skills"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
