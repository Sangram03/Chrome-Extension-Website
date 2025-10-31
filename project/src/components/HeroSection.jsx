import React from 'react';
import {
  Chrome,
  Download,
  Sparkles,
  Users,
  FileText,
  CheckCircle,
  Clock,
  ArrowRight,
} from 'lucide-react';

const HeroSection = ({ onInstallExtension }) => {
  const stats = [
    { number: '2K+', label: 'Active Users', icon: <Users className="w-5 h-5" /> },
    { number: '150K+', label: 'Summaries Generated', icon: <FileText className="w-5 h-5" /> },
    { number: '99.5%', label: 'Accuracy Rate', icon: <CheckCircle className="w-5 h-5" /> },
    { number: '<5s', label: 'Average Response Time', icon: <Clock className="w-5 h-5" /> },
  ];

  return (
    <section className="relative px-6 py-20 bg-gradient-to-b from-blue-500 to-purple-600 text-white dark:from-black dark:via-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="mb-6">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent text-sm font-semibold tracking-wide drop-shadow-md">
              ⚡ Powered by <span className="font-bold">Google Gemini AI</span>
            </span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
          Summarize Any
          <span className="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent block">
            Webpage Instantly
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-300 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Transform lengthy articles, research papers, and web content into concise,
          actionable summaries with the power of AI. Install our Chrome extension and
          boost your productivity today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={onInstallExtension}
            className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Chrome className="w-5 h-5" />
            <span>Add to Chrome</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="/assets/Summaries_Chrome_Bot-main.zip"
            download
            className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl flex items-center space-x-2 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download ZIP</span>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-2 text-blue-400">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold mb-1">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
