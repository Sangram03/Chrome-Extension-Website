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
    <div className="min-h-screen "
    style={{
    background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
   }}>
      <Header onInstallExtension={handleInstallExtension} />
      <HeroSection onInstallExtension={handleInstallExtension} />
      <InteractiveDemo />
      <FeaturesSection />
      <CTAAndFooter onInstallExtension={handleInstallExtension} />
    </div>
  );
}

export default App;
