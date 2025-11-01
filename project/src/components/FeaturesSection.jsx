import React, { useState, useEffect } from 'react';
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
  ArrowRight,
  Github,
  ExternalLink,
  Bot,
  Mail,
  Twitter,
} from 'lucide-react';

const FeaturesSection = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const features = [
    { icon: <Zap />, title: 'Lightning Fast', description: 'Generate summaries in seconds using advanced AI technology.' },
    { icon: <FileText />, title: 'Multiple Formats', description: 'Choose from 3 different summary styles to match your needs.' },
    { icon: <Globe />, title: 'Any Website', description: 'Works on any webpage - articles, blogs, research papers, and more.' },
    { icon: <Chrome />, title: 'Browser Integration', description: 'Seamlessly integrated into Chrome for instant access.' },
    { icon: <BookOpen />, title: 'Smart Analysis', description: 'AI understands context and extracts the most relevant information.' },
    { icon: <Copy />, title: 'Easy Export', description: 'Copy, share, or export summaries in multiple formats.' },
    { icon: <AudioLines />, title: 'Voice Control', description: 'Easily control the summarization process with your voice.' },
    { icon: <Share />, title: 'Effortless Sharing', description: 'Quickly share your summaries with a single click.' },
    { icon: <History />, title: 'Save & Delete History', description: 'Manage your summary history with simple save and delete controls.' },
    { icon: <Volume2 />, title: 'Text-to-Speech', description: 'Convert text summaries into natural-sounding speech.' },
    { icon: <Download />, title: 'Instant Download', description: 'Download your summaries in PDF format with a single click.' },
    { icon: <Languages />, title: 'Multi-Language Support', description: 'Generate summaries in multiple (10+) languages with ease.' },
    { icon: <Wallpaper />, title: 'Theme Customization', description: 'Switch between light, dark, or colorful themes for better comfort.' },
  ];

  const steps = [
    { step: '01', title: 'Install Extension', description: 'Add AI Summary to your Chrome browser with just one click from the Chrome Web Store.', icon: <Download className="w-8 h-8" /> },
    { step: '02', title: 'Select Content', description: 'Navigate to any webpage and click the AI Summary extension icon in your toolbar.', icon: <Globe className="w-8 h-8" /> },
    { step: '03', title: 'Get Summary', description: 'Choose your preferred summary type and let our AI generate instant, accurate summaries.', icon: <Sparkles className="w-8 h-8" /> },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Features Section */}
      <section id="features" className="px-6 py-20"
      style={{
    background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
   }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Everything you need to transform information consumption and boost productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                  {React.cloneElement(feature.icon, { className: 'w-6 h-6 text-white' })}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-20 bg-black/20"
      style={{
    background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
   }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-300 text-lg">Get started in just 3 simple steps</p>
          </div>

          <div className="space-y-8">
            {steps.map((item, index) => (
              <div
                key={index}
                className={`flex items-center space-x-6 bg-white/5 backdrop-blur-sm border rounded-xl p-8 transition-all duration-500 ${
                  currentStep === index
                    ? 'border-blue-400 bg-blue-500/10 scale-105'
                    : 'border-white/10 hover:bg-white/10'
                }`}
              >
                <div
                  className={`p-4 rounded-xl transition-all duration-300 ${
                    currentStep === index
                      ? 'bg-gradient-to-br from-blue-400 to-purple-500'
                      : 'bg-gradient-to-br from-blue-500 to-purple-600'
                  }`}
                >
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {item.step}
                    </span>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};



export default  FeaturesSection ;
