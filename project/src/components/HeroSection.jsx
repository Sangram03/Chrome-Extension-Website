import React from "react";
import {
  Chrome,
  Download,
  Youtube,
  Brain,
  Volume2,
  Languages,
  Cloud,
  FileText,
  Sparkles,
} from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className="relative px-6 py-24 text-white bg-gradient-to-b from-blue-500 to-purple-700 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120,180,255,0.25), transparent 70%), #000000",
      }}
    >
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

        {/* Header Text */}
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          Summarize Any <br />
          <span className="bg-gradient-to-r from-blue-200 via-pink-200 to-purple-300 bg-clip-text text-transparent">
            Webpage Instantly
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-base md:text-lg text-white/90 mb-10">
          Transform lengthy articles, research papers, and web content into concise,
          actionable summaries with the power of AI. Install our Chrome extension
          and boost your productivity today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button
            onClick={() =>
              window.open("https://chrome.google.com/webstore", "_blank")
            }
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 px-6 py-3 rounded-xl text-lg font-medium flex items-center justify-center gap-2 shadow-md"
          >
            <Chrome className="w-5 h-5" />
            Add to Chrome →
          </button>

          <button
            onClick={() =>
              window.open(
                "https://github.com/LegendLogic/Summaries_Chrome_Bot/archive/refs/heads/main.zip",
                "_blank"
              )
            }
            className="bg-white/10 hover:bg-white/20 border border-white/30 px-6 py-3 rounded-xl text-lg font-medium flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download ZIP
          </button>
        </div>

        {/* === Feature Highlights === */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-5xl mx-auto text-white/90">
          <div className="flex flex-col items-center">
            <FileText className="w-8 h-8 mb-2 text-pink-200" />
            <span className="text-sm font-medium">Article Summarizer</span>
          </div>
          <div className="flex flex-col items-center">
            <Youtube className="w-8 h-8 mb-2 text-red-300" />
            <span className="text-sm font-medium">YouTube Summarizer</span>
          </div>
          <div className="flex flex-col items-center">
            <Brain className="w-8 h-8 mb-2 text-indigo-200" />
            <span className="text-sm font-medium">Auto Detect</span>
          </div>
          <div className="flex flex-col items-center">
            <Volume2 className="w-8 h-8 mb-2 text-green-200" />
            <span className="text-sm font-medium">Voice Summary</span>
          </div>
          <div className="flex flex-col items-center">
            <Languages className="w-8 h-8 mb-2 text-yellow-200" />
            <span className="text-sm font-medium">Multi-Language</span>
          </div>
          <div className="flex flex-col items-center">
            <Cloud className="w-8 h-8 mb-2 text-blue-200" />
            <span className="text-sm font-medium">Cloud Save</span>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto text-white/90">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
            <h3 className="text-2xl font-bold">2K+</h3>
            <p className="text-sm text-white/70">Active Users</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
            <h3 className="text-2xl font-bold">150K+</h3>
            <p className="text-sm text-white/70">Summaries Generated</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
            <h3 className="text-2xl font-bold">99.5%</h3>
            <p className="text-sm text-white/70">Accuracy Rate</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
            <h3 className="text-2xl font-bold">&lt;5s</h3>
            <p className="text-sm text-white/70">Avg. Response Time</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
