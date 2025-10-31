import React from 'react';
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import InteractiveDemo from "./components/InteractiveDemo";
import FeaturesSection from "./components/FeaturesSection";
import CTAAndFooter from "./components/CTAAndFooter";


function App() {
  const handleInstallExtension = () => {
    // 🔧 Replace this URL with your actual Chrome extension link
    window.open('https://chrome.google.com/webstore/detail/your-extension-id', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header onInstallExtension={handleInstallExtension} />
      <HeroSection onInstallExtension={handleInstallExtension} />
      <InteractiveDemo />
      <FeaturesSection />
      <CTAAndFooter onInstallExtension={handleInstallExtension} />
    </div>
  );
}

export default App;
