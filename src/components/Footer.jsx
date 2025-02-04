import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-gray-300 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Animesh Singh. All Rights
            Reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="mailto:animeshsingh75@gmail.com"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <FaEnvelope size={24} />
            </a>
            <a
              href="https://linkedin.com/in/animeshsingh75"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/animeshsingh75"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://x.com/animeshsingh75"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
