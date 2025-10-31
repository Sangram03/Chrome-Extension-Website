import React from 'react';
import { Github, Bot, ExternalLink } from 'lucide-react';

// Component 1: Header
const Header = ({ onInstallExtension }) => {
  return (
    <header className="relative z-50 px-4 sm:px-6 py-4 bg-transparent">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-xl">
            <Bot className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            AI Summary
          </span>
        </div>

        <div className="flex items-center space-x-3 sm:space-x-4">
          <a
            href="https://github.com/Sangram03/Summaries_Chrome_Bot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 sm:space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 px-3 sm:px-4 py-2 rounded-lg transition-all duration-300"
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
