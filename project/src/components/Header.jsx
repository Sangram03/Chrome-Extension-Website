import React from "react";
import { Github, ExternalLink } from "lucide-react";
import logo from "../assets/logo.png";

// ✅ Import your image

const Header = ({ onInstallExtension }) => {
  return (
    <header
      className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-2 
      bg-black/40 backdrop-blur-lg border-b border-white/10 shadow-md"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          {/* Logo Image */}
        <div className="rounded-3xl p-[3px] ">
  <img
    src={logo}
    alt="AI Summary Logo"
    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-contain shadow-lg"
  />
</div>


          {/* Title with Google-style gradient */}
          <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#4285F4] via-[#34A853] via-[#FBBC05] to-[#EA4335] bg-clip-text text-transparent">
            Summary.io
          </span>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <a
            href="https://github.com/Sangram03/Summaries_Chrome_Bot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 sm:space-x-2 bg-white/10 hover:bg-white/20 
              backdrop-blur-sm border border-white/20 px-3 sm:px-4 py-2 rounded-lg 
              transition-all duration-300"
          >
            <Github className="w-4 h-4 text-white" />
            <span className="text-white text-sm sm:text-base">GitHub</span>
            <ExternalLink className="w-3 h-3 text-white/60" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
