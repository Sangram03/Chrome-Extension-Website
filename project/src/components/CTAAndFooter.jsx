import React, { useState, useEffect } from "react";
import {
  Chrome,
  ArrowRight,
  Github,
  ExternalLink,
  Bot,
  Twitter,
  Mail,
} from "lucide-react";

const CTAAndFooter = ({ onInstallExtension }) => {
  const images = [
    { src: "/assets/leftside.png", alt: "AI Summary Left View" },
    { src: "/assets/middle.png", alt: "AI Summary Middle View" },
    { src: "/assets/rightside.png", alt: "AI Summary Right View" },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {/* ======= CTA SECTION ======= */}
      <section
        className="px-6 py-20 relative overflow-hidden bg-black"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120,180,255,0.25), transparent 70%), #000",
        }}
      >
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            Ready to Transform Your Reading?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join thousands of users who are already saving hours with AI-powered
            summaries.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
            <button
              onClick={onInstallExtension}
              className="group bg-gradient-to-r from-blue-500 via-green-500 to-red-500 hover:opacity-90 text-white px-8 py-4 rounded-2xl font-semibold flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Chrome className="w-5 h-5" />
              <span>Install Chrome Extension</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://github.com/Sangram03/Summaries_Chrome_Bot"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold flex items-center space-x-2 transition-all duration-300 shadow-lg"
            >
              <Github className="w-5 h-5" />
              <span>View on GitHub</span>
              <ExternalLink className="w-3 h-3 text-white/60" />
            </a>
          </div>

          {/* Image Carousel */}
          <div className="mt-10 mb-36 flex justify-center relative min-h-[420px]">
            {images.map((img, index) => (
              <div
                key={index}
                className={`absolute transition-all duration-1000 ease-in-out transform ${
                  index === currentImage
                    ? "opacity-100 scale-105 z-10"
                    : "opacity-0 scale-95 z-0"
                }`}
              >
                <div className="relative rounded-3xl p-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                  <div className="rounded-3xl overflow-hidden bg-black/90">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="rounded-3xl max-w-full sm:max-w-2xl shadow-2xl border border-white/20 transition-transform duration-700 hover:scale-105 "
                    />
                  </div>
                </div>
                <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 opacity-30 -z-10"></div>
              </div>
            ))}
          </div>

          {/* YouTube Tutorials */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "📥 How to Download It",
                src: "https://www.youtube.com/embed/zC4idSoEVgw",
              },
              {
                title: "⚡ How to Use It",
                src: "https://www.youtube.com/embed/2rhoSLOQq9Y",
              },
            ].map((video, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/20 p-4 bg-white/5"
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  {video.title}
                </h3>
                <iframe
                  className="w-full aspect-video rounded-lg"
                  src={video.src}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>

          
        </div>
      </section>

      {/* ======= FOOTER ======= */}
      <footer className="px-6 py-12 bg-black/80 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-blue-500 via-green-500 to-red-500 p-2 rounded-xl">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-green-400 to-red-400 bg-clip-text text-transparent">
                   Summary.io
                </span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Transform your reading experience with AI-powered summaries.
                Save time and boost productivity.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/Sangram03/Summaries_Chrome_Bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="mailto:support@aisummary.com"
                  className="text-gray-400 hover:text-white"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                {["Features", "Demo", "Pricing", "API"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                {[
                  "Help Center",
                  "Contact Us",
                  "Privacy Policy",
                  "Terms of Service",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 AI Summary. All rights reserved. Made with ❤️ for
              productivity enthusiasts.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CTAAndFooter;
