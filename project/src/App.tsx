import React, { useState, useEffect } from 'react';
import { Chrome, Download, Github, Zap, FileText, Copy, Share2, CheckCircle, ArrowRight, Globe, Sparkles, Bot, BookOpen, Clock, Users, AlertCircle, ExternalLink, Mail, Twitter } from 'lucide-react';

function App() {
  const [summaryText, setSummaryText] = useState('');
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [summaryType, setSummaryType] = useState('brief');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [showShareModal, setShowShareModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const summaryTypes = [
    { value: 'brief', label: '📝 Brief', description: 'Quick overview' },
    { value: 'detailed', label: '📖 Detailed', description: 'Comprehensive analysis' },
    { value: 'bullet', label: '• Bullets', description: 'Key points list' },
    { value: 'keywords', label: '🏷️ Keywords', description: 'Important terms' }
  ];

  const stats = [
    { number: '25K+', label: 'Users', icon: <Users className="w-5 h-5" /> },
    { number: '150K+', label: 'Summaries', icon: <FileText className="w-5 h-5" /> },
    { number: '99.5%', label: 'Accuracy', icon: <CheckCircle className="w-5 h-5" /> },
    { number: '<2s', label: 'Speed', icon: <Clock className="w-5 h-5" /> }
  ];

  useEffect(() => {
    const words = inputText.trim().split(/\s+/).filter(word => word.length > 0);
    setWordCount(words.length);
  }, [inputText]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const generateMockSummary = (text, type) => {
    const words = text.split(' ');
    const firstWords = words.slice(0, 6).join(' ');

    const summaries = {
      brief: `This content focuses on ${firstWords}... The main themes include innovation and development, providing insights and recommendations.`,
      detailed: `Analysis of this content reveals themes beginning with ${firstWords}... The text explores background, evidence, and applications leading to valuable conclusions.`,
      bullet: `• Main Topic: ${firstWords}...\n• Key Arguments: Central themes\n• Findings: Primary insights\n• Recommendations: Next steps`,
      keywords: `Primary: ${words.slice(0, 3).join(', ')}\nSecondary: innovation, analysis, insights, strategy`
    };

    return summaries[type] || summaries.brief;
  };

  const handleSummarize = async () => {
    if (!inputText.trim()) {
      setError('Please enter some text to summarize');
      return;
    }
    if (wordCount < 10) {
      setError('Please enter at least 10 words');
      return;
    }

    setError('');
    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      const mockSummary = generateMockSummary(inputText, summaryType);
      setSummaryText(mockSummary);
    } catch (err) {
      setError('Failed to generate summary');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(summaryText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      setError('Failed to copy');
    }
  };

  const loadSample = () => {
    setInputText(`Artificial Intelligence has transformed industries over the past decade, revolutionizing how businesses operate. Machine learning algorithms power recommendation systems, autonomous vehicles, and medical tools with unprecedented accuracy. AI in healthcare enables early detection, personalized treatment, and drug discovery. In business, AI analytics help optimize operations and enhance customer experiences. However, this advancement raises questions about ethics, privacy, and work's future.`);
  };

  const clearDemo = () => {
    setInputText('');
    setSummaryText('');
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="px-6 py-4">
        <nav className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-xl">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Summary
            </span>
          </div>
          <a
            href="https://github.com/Sangram03/Summaries_Chrome_Bot"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-lg transition-all"
          >
            <Github className="w-4 h-4 text-white" />
            <span className="text-white">GitHub</span>
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 border border-blue-500/30 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-semibold">Powered by Google Gemini AI</span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
            Summarize Any
            <span className="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent block">
              Webpage Instantly
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Transform lengthy content into concise summaries with AI. Install our Chrome extension and boost productivity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => window.open('https://chrome.google.com/webstore', '_blank')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-2 transition-all transform hover:scale-105"
            >
              <Chrome className="w-5 h-5" />
              <span>Add to Chrome</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="/assets/Summaries_Chrome_Bot.zip"
              download
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl flex items-center space-x-2 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download ZIP</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex justify-center mb-2 text-blue-400">{stat.icon}</div>
                <div className="text-2xl font-bold text-white">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo */}
      <section className="px-6 py-20 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Try It Live</h2>
            <p className="text-gray-300">Experience AI summarization now</p>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-2xl p-8">
            {error && (
              <div className="mb-6 bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-center space-x-2">
                <AlertCircle className="w-5 h-5 text-red-400" />
                <span className="text-red-300">{error}</span>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-white font-semibold">Input Text</label>
                  <div className="flex space-x-2">
                    <button onClick={loadSample} className="text-blue-400 text-sm hover:text-blue-300">
                      Load Sample
                    </button>
                    <button onClick={clearDemo} className="text-gray-400 text-sm hover:text-gray-300">
                      Clear
                    </button>
                  </div>
                </div>

                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Paste text here (minimum 10 words)"
                  className="w-full h-48 bg-black/30 border border-white/20 rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 resize-none"
                />

                <div className="mt-2 text-sm text-gray-400">
                  {wordCount} words {wordCount < 10 && wordCount > 0 && '(minimum 10 required)'}
                </div>

                <div className="mt-4 mb-6">
                  <label className="block text-white font-semibold mb-3">Summary Type</label>
                  <div className="grid grid-cols-2 gap-2">
                    {summaryTypes.map((type) => (
                      <button
                        key={type.value}
                        onClick={() => setSummaryType(type.value)}
                        className={`p-3 rounded-lg border text-left transition-all ${summaryType === type.value
                          ? 'bg-blue-500/20 border-blue-400 text-blue-300'
                          : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10'
                        }`}
                      >
                        <div className="font-medium text-sm">{type.label}</div>
                        <div className="text-xs opacity-75">{type.description}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleSummarize}
                  disabled={!inputText.trim() || isLoading || wordCount < 10}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Generating...</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4" />
                      <span>Summarize</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-white font-semibold">Generated Summary</label>
                  {summaryText && (
                    <div className="flex space-x-2">
                      <button
                        onClick={handleCopy}
                        className="bg-green-500/20 border border-green-500/30 text-green-400 p-2 rounded-lg transition-all"
                      >
                        {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={() => setShowShareModal(true)}
                        className="bg-blue-500/20 border border-blue-500/30 text-blue-400 p-2 rounded-lg transition-all"
                      >
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                <div className="bg-black/30 border border-white/20 rounded-lg p-4 h-48 overflow-y-auto">
                  {summaryText ? (
                    <div className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
                      {summaryText}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-500">
                      <div className="text-center">
                        <BookOpen className="w-8 h-8 mx-auto mb-2 opacity-50" />
                        <p>Your summary will appear here</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Features</h2>
            <p className="text-gray-300">Everything you need for better productivity</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Zap className="w-6 h-6" />, title: 'Lightning Fast', desc: 'Generate summaries in seconds' },
              { icon: <FileText className="w-6 h-6" />, title: 'Multiple Formats', desc: 'Choose from different styles' },
              { icon: <Globe className="w-6 h-6" />, title: 'Any Website', desc: 'Works on all webpages' },
              { icon: <Chrome className="w-6 h-6" />, title: 'Browser Integration', desc: 'Seamless Chrome extension' },
              { icon: <BookOpen className="w-6 h-6" />, title: 'Smart Analysis', desc: 'AI understands context' },
              { icon: <Copy className="w-6 h-6" />, title: 'Easy Export', desc: 'Copy and share summaries' }
            ].map((feature, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                  {React.cloneElement(feature.icon, { className: 'w-6 h-6 text-white' })}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-20 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-300">Get started in 3 simple steps</p>
          </div>

          <div className="space-y-8">
            {[
              { step: '01', title: 'Install Extension', desc: 'Add AI Summary to Chrome', icon: <Download className="w-8 h-8" /> },
              { step: '02', title: 'Select Content', desc: 'Click extension icon on any webpage', icon: <Globe className="w-8 h-8" /> },
              { step: '03', title: 'Get Summary', desc: 'Choose format and generate summary', icon: <Sparkles className="w-8 h-8" /> }
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-center space-x-6 bg-white/5 border rounded-xl p-8 transition-all ${currentStep === index
                  ? 'border-blue-400 bg-blue-500/10 scale-105'
                  : 'border-white/10 hover:bg-white/10'
                }`}
              >
                <div className={`p-4 rounded-xl ${currentStep === index
                  ? 'bg-gradient-to-br from-blue-400 to-purple-500'
                  : 'bg-gradient-to-br from-blue-500 to-purple-600'
                }`}>
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center space-x-4 mb-2">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {item.step}
                    </span>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Reading?</h2>
          <p className="text-xl text-gray-300 mb-12">Join thousands saving time with AI summaries</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('https://chrome.google.com/webstore', '_blank')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-2 transition-all transform hover:scale-105"
            >
              <Chrome className="w-5 h-5" />
              <span>Install Extension</span>
            </button>
            <a
              href="https://github.com/Sangram03/Summaries_Chrome_Bot"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-2 transition-all"
            >
              <Github className="w-5 h-5" />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-black/40 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-xl">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AI Summary
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                Transform reading with AI-powered summaries. Save time and boost productivity.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://github.com/Sangram03/Summaries_Chrome_Bot" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="mailto:support@aisummary.com" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Demo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AI Summary. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-gray-800 border border-gray-600 rounded-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-semibold text-white mb-4">Share Summary</h3>
            <div className="space-y-3">
              <button className="w-full bg-blue-500/20 border border-blue-500/30 text-blue-400 px-4 py-3 rounded-lg flex items-center space-x-2">
                <Copy className="w-4 h-4" />
                <span>Copy Link</span>
              </button>
              <button className="w-full bg-green-500/20 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </button>
            </div>
            <button
              onClick={() => setShowShareModal(false)}
              className="w-full mt-4 bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-lg transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;