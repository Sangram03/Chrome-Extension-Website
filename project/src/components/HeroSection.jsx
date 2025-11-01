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
      className="relative px-6 py-24 text-white overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120,180,255,0.25), transparent 70%), #000000",
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* === Badge === */}
        <div className="mb-6">
          <div className="inline-flex items-center space-x-2 backdrop-blur-sm border border-green-600 px-4 py-2 rounded-full transition-transform duration-300 hover:scale-105">
            <Sparkles className="w-4 h-4 text-green-400 animate-pulse" />
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent text-sm font-semibold tracking-wide drop-shadow-md">
              ⚡ Powered by <span className="font-bold">Google Gemini AI</span>
            </span>
          </div>
        </div>

        {/* === Main Heading === */}
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          Summarize Any <br />
          <span className="bg-gradient-to-r from-blue-200 via-pink-200 to-purple-300 bg-clip-text text-transparent">
            Article or Video Instantly
          </span>
        </h1>

        {/* === Tagline === */}
        <p className="max-w-2xl mx-auto text-base md:text-lg text-white/90 mb-10">
          Read less, learn more. AI-powered summarization for YouTube videos and web
          articles — get concise, clear insights in seconds.
        </p>

        {/* === Buttons === */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          {/* Add to Chrome */}
          <button
            onClick={() => window.open("https://chrome.google.com/webstore", "_blank")}
            className="relative overflow-hidden bg-gradient-to-r from-[#4285F4] via-pink-400 hover:opacity-90 px-6 py-3 rounded-xl text-lg font-medium flex items-center justify-center gap-2 shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-xl"
          >
            <Chrome className="w-5 h-5" />
            Add to Chrome →
          </button>

          {/* Download ZIP */}
          <button
            onClick={() =>
              window.open(
                "https://github.com/LegendLogic/Summaries_Chrome_Bot/archive/refs/heads/main.zip",
                "_blank"
              )
            }
            className="bg-white/10 hover:bg-white/20 border border-white/30 px-6 py-3 rounded-xl text-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105"
          >
            <Download className="w-5 h-5" />
            Download ZIP
          </button>
        </div>

        {/* === Feature Highlights === */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-5xl mx-auto text-white/90">
          {[
            { icon: FileText, label: "Article Summarizer", color: "text-pink-200" },
            { icon: Youtube, label: "YouTube Summarizer", color: "text-red-300" },
            { icon: Brain, label: "Auto Detect", color: "text-indigo-200" },
            { icon: Volume2, label: "Voice Summary", color: "text-green-200" },
            { icon: Languages, label: "Multi-Language", color: "text-yellow-200" },
            { icon: Cloud, label: "Cloud Save", color: "text-blue-200" },
          ].map(({ icon: Icon, label, color }, i) => (
            <div
              key={i}
              className="flex flex-col items-center transition-transform duration-300 hover:scale-110 hover:text-white"
            >
              <Icon
                className={`w-8 h-8 mb-2 ${color} transition-transform duration-300 hover:rotate-6`}
              />
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>

        {/* === Stats Section === */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto text-white/90">
          {[
            { value: "2K+", label: "Active Users" },
            { value: "150K+", label: "Summaries Generated" },
            { value: "99.5%", label: "Accuracy Rate" },
            { value: "<5s", label: "Avg. Response Time" },
          ].map(({ value, label }, i) => (
            <div
              key={i}
              className="bg-white/10 border border-white/20 backdrop-blur-md rounded-xl p-4 hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold">{value}</h3>
              <p className="text-sm text-white/70">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
