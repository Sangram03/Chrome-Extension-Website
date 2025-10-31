import React from "react";
import {
  Chrome,
  ArrowRight,
  Github,
  ExternalLink,
  Bot,
  Twitter,
  Mail,
} from "lucide-react"; // ✅ import all icons you use

const CTAAndFooter = ({ onInstallExtension }) => {
  return (
    <>
      <section className="px-6 py-20 bg-gradient-to-r from-purple-500 to-purple-600">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            Ready to Transform Your Reading?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join thousands of users who are already saving hours of reading time
            with AI-powered summaries.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
            <button
              onClick={onInstallExtension}
              className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold flex items-center space-x-2 transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-purple-500/30"
            >
              <Chrome className="w-5 h-5" />
              <span>Install Chrome Extension</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="https://github.com/Sangram03/Summaries_Chrome_Bot"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold flex items-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-white/20"
            >
              <Github className="w-5 h-5" />
              <span>View on GitHub</span>
              <ExternalLink className="w-3 h-3 text-white/60" />
            </a>
          </div>

          <div className="mt-16 flex justify-center">
            <img
              src="/assets/pic.png"
              alt="AI Summary Extension Preview"
              className="rounded-3xl shadow-2xl border border-white/20 max-w-full sm:max-w-2xl transform hover:scale-105 transition duration-500"
            />
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/20 p-4 bg-white/5">
              <h3 className="text-xl font-semibold text-white mb-4">
                📥 How to Download It
              </h3>
              <iframe
                className="w-full aspect-video rounded-lg"
                src="https://www.youtube.com/embed/zC4idSoEVgw"
                title="How to Download It"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/20 p-4 bg-white/5">
              <h3 className="text-xl font-semibold text-white mb-4">
                ⚡ How to Use It
              </h3>
              <iframe
                className="w-full aspect-video rounded-lg"
                src="https://www.youtube.com/embed/2rhoSLOQq9Y"
                title="How to Use It"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-6 py-12 bg-black/40 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-xl">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AI Summary
                </span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Transform your reading experience with AI-powered summaries. Save
                time and boost productivity with our Chrome extension.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/Sangram03/Summaries_Chrome_Bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="mailto:support@aisummary.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#features"
                    className="hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a href="#demo" className="hover:text-white transition-colors">
                    Demo
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
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
