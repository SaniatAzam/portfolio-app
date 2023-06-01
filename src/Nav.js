import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Nav() {
  return (
    <footer className="sticky bottom-0 z-50 bg-white shadow-md">
      <nav className="flex items-center justify-center py-2 px-4">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center px-4 py-2 text-gray hover:text-indigo-600"
        >
          <FaGithub className="w-6 h-6 mb-1" />
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center px-4 py-2 text-gray hover:text-indigo-600"
        >
          <FaLinkedin className="w-6 h-6 mb-1" />
          LinkedIn
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center px-4 py-2 text-gray hover:text-indigo-600"
        >
          <FaInstagram className="w-6 h-6 mb-1" />
          Instagram
        </a>
      </nav>
    </footer>
  );
}

export default Nav;
