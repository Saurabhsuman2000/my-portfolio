import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="z-[20]">
      <div className="min-h-[100px] flex flex-col justify-center gap-6 text-center text-lg text-gray-300 font-mono mb-10 z-[10]">
        <div className="flex gap-10 p-4 justify-center text-white ">
          <a
            href="https://twitter.com/YOUR_USERNAME" // Replace with your actual Twitter link
            className="border p-2 text-2xl rounded-full hover:scale-110 transition-all bg-gray-900 text-white duration-200 hover:bg-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://linkedin.com/in/YOUR_PROFILE" // Replace with your actual LinkedIn link
            className="border p-2 text-2xl rounded-full hover:scale-110 transition-all bg-gray-900 text-white duration-200 hover:bg-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/Saurabhsuman2000"
            className="border p-2 text-2xl rounded-full hover:scale-110 transition-all bg-gray-900 text-white duration-200 hover:bg-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/saurabh_suman01/"
            className="border p-2 text-2xl rounded-full bg-gray-900 text-white duration-200 ease-in-out transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'transparent', // Initial background
              transition: 'all 0.2s ease-in-out', // Smooth transition for background
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285AEB 90%)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <FaInstagram />
          </a>

        </div>
        <p>@ 2025 saurabh. All rights reserved. </p>
      </div>
    </footer>
  );
}

export default Footer;
