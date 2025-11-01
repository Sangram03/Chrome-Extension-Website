import React, { useState, useEffect, useRef } from "react";
import {
  Zap,
  FileText,
  Globe,
  Chrome,
  BookOpen,
  Copy,
  AudioLines,
  Share,
  History,
  Volume2,
  Download,
  Languages,
  Wallpaper,
  Sparkles,
  Cloud,
  Youtube,
  Brain,
} from "lucide-react";

const FeaturesSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);
  const scrollRef = useRef(null);
  const scrollPosition = useRef(0);

  const mainFeatures = [
    {
      icon: Youtube,
      title: "YouTube Video Summarizer",
      description: "Instantly summarize YouTube videos into key bullet points directly from the video page.",
    },
    {
      icon: FileText,
      title: "Article Summarizer",
      description: "Summarize long articles, blogs, or research papers into crisp, readable summaries in seconds.",
    },
    {
      icon: Brain,
      title: "Auto Detect Content",
      description: "Automatically detects whether it's a video or article and generates a suitable summary.",
    },
    {
      icon: Cloud,
      title: "Cloud Save",
      description: "Save all your summaries securely in the cloud and access them from any device.",
    },
  ];

  const features = [
    { icon: Zap, title: "Lightning Fast", description: "Generate summaries in seconds using advanced AI." },
    { icon: Globe, title: "Works Anywhere", description: "Summarize any webpage, PDF, or blog post seamlessly." },
    { icon: Chrome, title: "Browser Integration", description: "One-click Chrome extension access anytime." },
    { icon: BookOpen, title: "Smart Context", description: "AI captures key ideas and avoids fluff." },
    { icon: Copy, title: "Easy Copy & Export", description: "Instantly copy or export summaries for use anywhere." },
    { icon: AudioLines, title: "Voice Summary", description: "Listen to summaries in natural AI voice." },
    { icon: Share, title: "Quick Share", description: "Share your summaries instantly with your team or friends." },
    { icon: History, title: "Save History", description: "Easily revisit and manage your previous summaries." },
    { icon: Volume2, title: "Text-to-Speech", description: "Transform any summary into natural-sounding speech." },
    { icon: Download, title: "PDF Download", description: "Download your summaries directly as PDF files." },
    { icon: Languages, title: "Multi-Language Support", description: "Supports summaries in 10+ global languages." },
    { icon: Wallpaper, title: "Custom Themes", description: "Switch between light, dark, or gradient themes." },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrame;
    const scrollSpeed = 0.7;

    const animateScroll = () => {
      if (!paused && scrollContainer) {
        scrollPosition.current += scrollSpeed;
        scrollContainer.scrollLeft = scrollPosition.current;
        if (scrollPosition.current >= scrollContainer.scrollWidth / 2) {
          scrollPosition.current = 0;
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(animateScroll);
    };

    animationFrame = requestAnimationFrame(animateScroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [paused]);

  const steps = [
    {
      step: "01",
      title: "Install Extension",
      description: "Add AI Summary to Chrome with one click.",
      icon: Download,
    },
    {
      step: "02",
      title: "Select Content",
      description: "Open any page or video and click the icon.",
      icon: Globe,
    },
    {
      step: "03",
      title: "Get Summary",
      description: "Choose your preferred summary style — AI does the rest.",
      icon: Sparkles,
    },
    {
      step: "04",
      title: "Customize & Save",
      description: "Refine tone or language and save or download easily.",
      icon: Cloud,
    },
    {
      step: "05",
      title: "Listen or Translate",
      description: "Play using AI voice or translate instantly.",
      icon: Volume2,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="min-h-screen bg-black">
      <section className="px-6 py-24" style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
      }}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Powerful AI Features</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-16">
            Everything you need to summarize, understand, and save time — all in one intelligent tool.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {mainFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={i}
                  className="group relative bg-gradient-to-br from-blue-600/40 via-purple-600/30 to-pink-600/30 border border-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl hover:scale-[1.08] hover:border-purple-400 hover:shadow-purple-500/40 transition-all duration-500 cursor-pointer overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/30 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  
                  <div className="relative z-10">
                    <div className="bg-gradient-to-br from-green-600/40 via-green-600 p-4 rounded-xl mb-4 w-fit mx-auto group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-2xl group-hover:shadow-purple-500/50">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {f.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {f.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative overflow-hidden">
            <div ref={scrollRef} className="flex space-x-8 overflow-x-hidden py-8">
              {[...features, ...features].map((feature, index) => {
                const isActive = activeFeature === index;
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className={`flex-shrink-0 w-[300px] bg-white/5 border border-white/10 rounded-2xl p-6 text-left backdrop-blur-md transition-all duration-500 cursor-pointer relative overflow-hidden ${
                      isActive ? "scale-110 bg-white/10 border-purple-400 shadow-lg shadow-purple-500/30 z-10" : "hover:scale-105 hover:bg-white/10"
                    }`}
                    onMouseEnter={() => {
                      setPaused(true);
                      setActiveFeature(index);
                    }}
                    onMouseLeave={() => {
                      setPaused(false);
                      setActiveFeature(null);
                    }}
                  >
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-pulse" />
                    )}
                    
                    <div className="flex flex-col items-start space-y-3 relative z-10">
                      <div className={`bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-xl transition-all duration-500 ${
                        isActive ? "rotate-12 scale-110 shadow-lg shadow-purple-500/50" : ""
                      }`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className={`text-lg font-semibold transition-all duration-300 ${
                        isActive ? "text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text" : "text-white"
                      }`}>
                        {feature.title}
                      </h3>
                      <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                        isActive ? "text-gray-200" : "text-gray-400"
                      }`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#0a0a0f] to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#0a0a0f] to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-black/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-300 text-lg">Your journey from installation to productivity</p>
          </div>

          <div className="space-y-8">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`group flex items-center space-x-6 bg-white/5 backdrop-blur-sm border rounded-xl p-8 transition-all duration-500 cursor-pointer relative overflow-hidden ${
                    currentStep === index
                      ? "border-blue-400 bg-blue-500/10 scale-[1.03] shadow-lg shadow-blue-500/20"
                      : "border-white/10 hover:bg-white/10 hover:border-purple-400/50 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/10"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  <div className={`p-4 rounded-xl transition-all duration-500 relative z-10 ${
                    currentStep === index
                      ? "bg-gradient-to-br from-blue-400 to-purple-500 shadow-lg shadow-blue-500/30"
                      : "bg-gradient-to-br from-blue-500 to-purple-600 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl group-hover:shadow-purple-500/40"
                  }`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 relative z-10">
                    <div className="flex items-center space-x-4 mb-2">
                      <span className={`text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent transition-all duration-300 ${
                        currentStep !== index ? "group-hover:scale-110" : ""
                      }`}>
                        {item.step}
                      </span>
                      <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-300 group-hover:bg-clip-text transition-all duration-300">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesSection;