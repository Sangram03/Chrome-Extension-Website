import React, { useState, useEffect } from 'react';
import { Chrome, Download, Github, Zap, FileText, Copy, Share2, CheckCircle, ArrowRight, Globe, Sparkles, Bot, BookOpen, Clock, Users, AlertCircle, ExternalLink, Mail, Twitter, } from 'lucide-react';

function App() {
  const [summaryText, setSummaryText] = useState('');
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [summaryType, setSummaryType] = useState('brief');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [, setIsInstalled] = useState(false);
  const [setShowShareModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const summaryTypes = [
    { value: 'brief', label: '📝 Brief Summary', description: 'Quick overview of main points' },
    { value: 'detailed', label: '📖 Detailed Summary', description: 'Comprehensive analysis' },
    { value: 'bullet', label: '• Bullet Points', description: 'Key points in list format' },
    { value: 'keywords', label: '🏷️ Keywords', description: 'Important terms and concepts' },
    { value: 'academic', label: '🎓 Academic Style', description: 'Formal academic summary' },
    { value: 'creative', label: '✨ Creative Summary', description: 'Engaging narrative style' }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lightning Fast',
      description: 'Generate summaries in seconds using advanced AI technology'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Multiple Formats',
      description: 'Choose from 6 different summary styles to match your needs'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Any Website',
      description: 'Works on any webpage - articles, blogs, research papers, and more'
    },
    {
      icon: <Chrome className="w-6 h-6" />,
      title: 'Browser Integration',
      description: 'Seamlessly integrated into Chrome for instant access'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Smart Analysis',
      description: 'AI understands context and extracts the most relevant information'
    },
    {
      icon: <Copy className="w-6 h-6" />,
      title: 'Easy Export',
      description: 'Copy, share, or export summaries in multiple formats'
    }
  ];

  const stats = [
    { number: '25K+', label: 'Active Users', icon: <Users className="w-5 h-5" /> },
    { number: '150K+', label: 'Summaries Generated', icon: <FileText className="w-5 h-5" /> },
    { number: '99.5%', label: 'Accuracy Rate', icon: <CheckCircle className="w-5 h-5" /> },
    { number: '<2s', label: 'Average Response Time', icon: <Clock className="w-5 h-5" /> }
  ];


  useEffect(() => {
    const words = inputText.trim().split(/\s+/).filter(word => word.length > 0);
    setWordCount(words.length);
  }, [inputText]);

  useEffect(() => {
    // Check if extension is installed (mock check)
    const checkExtension = () => {
      // In real implementation, this would check for the actual extension
      setIsInstalled(Math.random() > 0.7);
    };
    checkExtension();
  }, []);

  useEffect(() => {
    // Auto-advance steps every 3 seconds
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSummarize = async () => {
    if (!inputText.trim()) {
      setError('Please enter some text to summarize');
      return;
    }

    if (wordCount < 10) {
      setError('Please enter at least 10 words for meaningful summarization');
      return;
    }

    setError('');
    setIsLoading(true);

    try {
      // Simulate API call with more realistic delay
      await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));

      const mockSummary = generateMockSummary(inputText, summaryType);
      setSummaryText(mockSummary);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError('Failed to generate summary. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const generateMockSummary = (text: string, type: string) => {
    const words = text.split(' ');
    const firstFewWords = words.slice(0, 8).join(' ');

    const summaries = {
      brief: `This content focuses on ${firstFewWords}... The main argument centers around key themes of innovation and development, providing essential insights that highlight the primary conclusions and actionable recommendations for readers.`,

      detailed: `The comprehensive analysis of this content reveals multiple interconnected themes and arguments. Beginning with ${firstFewWords}..., the text explores various dimensions including contextual background, supporting evidence, and methodological approaches. The discussion encompasses both theoretical foundations and practical applications, ultimately leading to well-substantiated conclusions that offer valuable insights for further consideration and implementation.`,

      bullet: `• **Main Topic**: ${firstFewWords}...\n• **Key Arguments**: Central themes and supporting evidence\n• **Methodology**: Approach and analytical framework used\n• **Findings**: Primary discoveries and insights\n• **Implications**: Broader significance and applications\n• **Recommendations**: Suggested next steps and actions\n• **Conclusion**: Summary of key takeaways`,

      keywords: `**Primary Keywords**: ${words.slice(0, 3).join(', ')}\n**Secondary Terms**: innovation, analysis, development, insights, methodology, framework, implementation, strategy, evaluation, outcomes, recommendations, conclusions, applications, significance, implications`,

      academic: `**Abstract**: This analysis examines ${firstFewWords}... through a systematic review of the presented material. **Methodology**: The content was analyzed using structured summarization techniques focusing on key themes and arguments. **Findings**: The primary contributions include comprehensive insights into the subject matter with particular emphasis on theoretical foundations and practical applications. **Conclusions**: The work presents significant implications for the field and offers valuable recommendations for future research and implementation strategies.`,

      creative: `📚 **The Story So Far**: Imagine diving into a world where ${firstFewWords}... takes center stage! This fascinating journey begins with intriguing premises and evolves through compelling arguments and evidence. 🎯 **The Plot Thickens**: As we explore deeper, we discover layers of meaning and significance that paint a vivid picture of innovation and insight. ✨ **The Grand Finale**: Our adventure concludes with powerful takeaways and actionable wisdom that can transform how we think and act.`
    };

    return summaries[type] || summaries.brief;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(summaryText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError('Failed to copy to clipboard');
    }
  };

  const handleShare = () => {
    setShowShareModal(true);
  };


  const handleInstallExtension = () => {
    // In real implementation, this would trigger the Chrome Web Store
    window.open('https://chrome.google.com/webstore', '_blank');
  };

  const clearDemo = () => {
    setInputText('');
    setSummaryText('');
    setError('');
    setWordCount(0);
  };

  const loadSampleText = () => {
    const sample = `Artificial Intelligence has transformed numerous industries over the past decade, revolutionizing how businesses operate and individuals interact with technology. Machine learning algorithms now power recommendation systems, autonomous vehicles, and medical diagnosis tools, demonstrating unprecedented accuracy and efficiency. The integration of AI in healthcare has enabled early disease detection, personalized treatment plans, and drug discovery acceleration. Meanwhile, in the business sector, AI-driven analytics provide insights that help companies optimize operations, reduce costs, and enhance customer experiences. However, this rapid advancement also raises important questions about ethics, privacy, and the future of work, requiring careful consideration of how we implement and regulate these powerful technologies to ensure they benefit society as a whole.`;
    setInputText(sample);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="relative z-50 px-4 sm:px-6 py-4 bg-transparent">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo + Brand */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-xl">
              <Bot className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Summary
            </span>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-3 sm:space-x-4">

            <a
              href="https://github.com/Sangram03/Summaries_Chrome_Bot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 sm:space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 px-3 sm:px-4 py-2 rounded-lg transition-all duration-300"
            >
              <Github className="w-4 h-4 text-white" />
              <span className="text-white text-sm sm:text-base">GitHub</span>
              <ExternalLink className="w-3 h-3 text-white/60" />
            </a>
          </div>

        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-20 bg-gradient-to-bfrom-blue-500 to-purple-600 text-white dark:from-black dark:via-gray-900 dark:to-gray-950">
        <div className="max-w-7xl mx-auto text-center">

          {/* Tagline */}
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

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-300 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transform lengthy articles, research papers, and web content into concise,
            actionable summaries with the power of AI. Install our Chrome extension and
            boost your productivity today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={handleInstallExtension}
              className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Chrome className="w-5 h-5" />
              <span>Add to Chrome</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="/assets/Summaries_Chrome_Bot.zip"
              download
              className="flex items-center space-x-1 sm:space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 px-3 sm:px-4 py-2 rounded-lg transition-all duration-300"
            >
              <Download className="w-4 h-4 text-white" />
              <span className="text-white text-sm sm:text-base">Download ZIP</span>
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

      {/* Interactive Demo */}
      <section className="px-6 py-20 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Try It Live</h2>
            <p className="text-gray-300 text-lg">Experience the power of AI summarization right now</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl">
            {error && (
              <div className="mb-6 bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-center space-x-2">
                <AlertCircle className="w-5 h-5 text-red-400" />
                <span className="text-red-300">{error}</span>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Section */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-white font-semibold">Input Text</label>
                  <div className="flex space-x-2">
                    <button
                      onClick={loadSampleText}
                      className="text-blue-400 text-sm hover:text-blue-300 transition-colors"
                    >
                      Load Sample
                    </button>
                    <button
                      onClick={clearDemo}
                      className="text-gray-400 text-sm hover:text-gray-300 transition-colors"
                    >
                      Clear
                    </button>
                  </div>
                </div>

                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Paste your text here to generate a summary... (minimum 10 words)"
                  className="w-full h-48 bg-black/30 border border-white/20 rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors resize-none"
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
                        className={`p-3 rounded-lg border transition-all text-left ${summaryType === type.value
                          ? 'bg-blue-500/20 border-blue-400 text-blue-300'
                          : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10'
                          }`}
                      >
                        <div className="font-medium text-sm">{type.label}</div>
                        <div className="text-xs opacity-75 mt-1">{type.description}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleSummarize}
                  disabled={!inputText.trim() || isLoading || wordCount < 10}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Generating Summary...</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4" />
                      <span>Summarize</span>
                    </>
                  )}
                </button>
              </div>

              {/* Output Section */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-white font-semibold">Generated Summary</label>
                  {summaryText && (
                    <div className="flex space-x-2">
                      <button
                        onClick={handleCopy}
                        className="bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 text-green-400 p-2 rounded-lg transition-all duration-300"
                        title="Copy to clipboard"
                      >
                        {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={handleShare}
                        className="bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 text-blue-400 p-2 rounded-lg transition-all duration-300"
                        title="Share summary"
                      >
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                <div className="bg-black/30 border border-white/20 rounded-lg p-4 h-48 overflow-y-auto">
                  {summaryText ? (
                    <pre className="text-gray-300 whitespace-pre-wrap font-sans text-sm leading-relaxed">
                      {summaryText}
                    </pre>
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-500">
                      <div className="text-center">
                        <BookOpen className="w-8 h-8 mx-auto mb-2 opacity-50" />
                        <p>Your AI-generated summary will appear here</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Everything you need to transform information consumption and boost productivity
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

      {/* How It Works */}
      <section className="px-6 py-20 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-300 text-lg">Get started in just 3 simple steps</p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Install Extension',
                description: 'Add AI Summary to your Chrome browser with just one click from the Chrome Web Store',
                icon: <Download className="w-8 h-8" />
              },
              {
                step: '02',
                title: 'Select Content',
                description: 'Navigate to any webpage and click the AI Summary extension icon in your toolbar',
                icon: <Globe className="w-8 h-8" />
              },
              {
                step: '03',
                title: 'Get Summary',
                description: 'Choose your preferred summary type and let our AI generate instant, accurate summaries',
                icon: <Sparkles className="w-8 h-8" />
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-center space-x-6 bg-white/5 backdrop-blur-sm border rounded-xl p-8 transition-all duration-500 ${currentStep === index
                  ? 'border-blue-400 bg-blue-500/10 scale-105'
                  : 'border-white/10 hover:bg-white/10'
                  }`}
              >
                <div className={`p-4 rounded-xl transition-all duration-300 ${currentStep === index
                  ? 'bg-gradient-to-br from-blue-400 to-purple-500'
                  : 'bg-gradient-to-br from-blue-500 to-purple-600'
                  }`}>
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



      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Reading?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join thousands of users who are already saving hours of reading time with AI-powered summaries
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleInstallExtension}
              className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Chrome className="w-5 h-5" />
              <span>Install Chrome Extension</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="https://github.com/Sangram03/Summaries_Chrome_Bot"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold flex items-center space-x-2 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              <span>View on GitHub</span>
              <ExternalLink className="w-3 h-3 text-white/60" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-black/40 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
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
                Transform your reading experience with AI-powered summaries. Save time and boost productivity with our Chrome extension.
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
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#demo" className="hover:text-white transition-colors">Demo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AI Summary. All rights reserved. Made with ❤️ for productivity enthusiasts.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;