const skills = [
  { name: "HTML", icon: "/images/html.png" },
  { name: "JavaScript", icon: "/images/js.png" },
  { name: "Kotlin", icon: "/images/kotlin.png" },
  { name: "C++", icon: "/images/cpp.png" },
  { name: "Java", icon: "/images/java.png" },
  { name: "Android", icon: "/images/android.png" },
  { name: "React", icon: "/images/react.png" },
  { name: "CSS", icon: "/images/css.png" },
  { name: "Express.js", icon: "/images/express.png" },
  { name: "MongoDB", icon: "/images/mongo.png" },
  { name: "Node.js", icon: "/images/node.png" },
  { name: "Git", icon: "/images/git.png" },
];
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

const experiences = [
  {
    title: "Software Engineer ",
    company: "HubSpot",
    date: "June 2025 - Present",
    location: "Cambridge, MA",
    points: [
      "Led the migration and complete rewrite of core home-page components, establishing a scalable foundation including VRTs/Storybooks that accelerated component integration by 30% for other teams within HubSpot.",
      "Led the critical migration of the core bookmark system across 5 repositories to a reliable ID-based architecture, successfully increasing API type safety and resulting in a 40% reduction in path-based lookup errors.",
      "Significantly improved accessibility by implementing keyboard navigation and optimizing aria labels, which directly contributed to a 45% increase in the Lighthouse Accessibility score.",
      "Enhanced user interface stability by implementing a dimension-cached loading skeleton, which effectively reduced visual layout shifting (Layout Thrash) by 65% and significantly improved perceived user experience.",
    ],
  },
  {
    title: "Software Engineer Intern ",
    company: "Flashfeed",
    date: "May 2024 - December 2024",
    location: "Tempe, USA (Remote)",
    points: [
      "Created a news app from scratch, delivering news in <b>60 words</b> for quick and concise updates.",
      "Implemented deep linking for enhanced user navigation and content accessibility, aiming to improve user engagement.",
      "Developed an audio player using Text to Speech and a video player to provide a multimedia news experience, targeting a 25% increase in session duration.",
      "Integrated push notifications to keep users informed with real-time news updates, aiming to boost daily active users by 20%.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Genwise",
    date: "December 2022 - May 2023",
    location: "New Delhi, India",
    points: [
      "Engineered a mobile application from scratch, garnering over <b>1M+ downloads</b> on the Google Play Store within the first year, demonstrating rapid market adoption.",
      "Implemented intuitive user interfaces, <b>boosting daily active users by 25%</b>, and enhancing digital accessibility.",
      "Optimized app home page performance by implementing caching, achieving a <b>40% reduction in load time</b>, significantly enhancing user experience.",
      "Incorporated the Razorpay payment gateway to enable secure in-app transactions, leading to an initial projection of over <b>15,000 dollars ARR</b>.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Park+",
    date: "March 2022 - July 2022",
    location: "Gurugram, India",
    points: [
      "Pioneered a real-time driving behavior analysis and accident detection feature, resulting in a <b>30% adoption rate</b> among active users within the first month of launch, showcasing the feature’s relevance and user interest.",
      "Architected and built a multilingual application from the ground up, supporting <b>5 languages</b> to broaden the market reach and cater to a globally diverse user base.",
      "Revamped the onboarding flow UI using Motion Layout, resulting in a more intuitive and engaging user experience, and an <b>11% reduction in dropoff</b>.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Supershare",
    date: "June 2021 - October 2021",
    location: "Bengaluru, Karnataka (Remote)",
    points: [
      "Implemented ’SuperShare Pro’, enabling users to customize shared links, which drove a <b>17% increase in content sharing</b>.",
      "Contributed to the integration of a social media login feature, resulting in a <b>9% increase in sign-ins</b> due to the improved user experience and seamless authentication process.",
      "Identified and resolved critical bugs and crashes, achieving a <b>94.8% crash-free rate</b>, significantly improving the app stability and user trust.",
    ],
  },
];

export { skills, projects, visibleSkills, hiddenSkills, experiences };
