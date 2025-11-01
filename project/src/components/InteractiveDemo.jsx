import React, { useState, useEffect } from "react";
import {
  Zap,
  Copy,
  CheckCircle,
  AlertCircle,
  BookOpen,
  Youtube,
  FileText,
} from "lucide-react";

const InteractiveDemo = () => {
  const [activeTab, setActiveTab] = useState("article");
  const [summaryText, setSummaryText] = useState("");
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [summaryType, setSummaryType] = useState("brief");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
  const [wordCount, setWordCount] = useState(0);

  const summaryTypes = [
    { value: "brief", label: "📝 Brief", description: "Quick overview" },
    { value: "detailed", label: "📖 Detailed", description: "Comprehensive" },
    { value: "bullet", label: "• Bullets", description: "Key points" },
    { value: "keywords", label: "🏷️ Keywords", description: "Important terms" },
    { value: "academic", label: "🎓 Academic", description: "Formal style" },
    { value: "creative", label: "✨ Creative", description: "Engaging narrative" },
  ];

  useEffect(() => {
    const words = inputText.trim().split(/\s+/).filter((w) => w.length > 0);
    setWordCount(words.length);
  }, [inputText]);

  const generateArticleSummary = (text, type) => {
    const words = text.split(" ");
    const firstFewWords = words.slice(0, 8).join(" ");

    const summaries = {
      brief: `This content focuses on ${firstFewWords}... The main argument centers around key themes of innovation and development, providing essential insights that highlight the primary conclusions and actionable recommendations for readers.`,
      detailed: `The comprehensive analysis of this content reveals multiple interconnected themes and arguments. Beginning with ${firstFewWords}..., the text explores various dimensions including contextual background, supporting evidence, and methodological approaches. The discussion encompasses both theoretical foundations and practical applications, ultimately leading to well-substantiated conclusions that offer valuable insights for further consideration and implementation.`,
      bullet: `• **Main Topic**: ${firstFewWords}...\n• **Key Arguments**: Central themes and supporting evidence\n• **Methodology**: Approach and analytical framework used\n• **Findings**: Primary discoveries and insights\n• **Implications**: Broader significance and applications\n• **Recommendations**: Suggested next steps and actions\n• **Conclusion**: Summary of key takeaways`,
      keywords: `**Primary Keywords**: ${words.slice(0, 3).join(", ")}\n**Secondary Terms**: innovation, analysis, development, insights, methodology, framework, implementation, strategy, evaluation, outcomes, recommendations, conclusions, applications, significance, implications`,
      academic: `**Abstract**: This analysis examines ${firstFewWords}... through a systematic review of the presented material. **Methodology**: The content was analyzed using structured summarization techniques focusing on key themes and arguments. **Findings**: The primary contributions include comprehensive insights into the subject matter with particular emphasis on theoretical foundations and practical applications. **Conclusions**: The work presents significant implications for the field and offers valuable recommendations for future research and implementation strategies.`,
      creative: `📚 **The Story So Far**: Imagine diving into a world where ${firstFewWords}... takes center stage! This fascinating journey begins with intriguing premises and evolves through compelling arguments and evidence. 🎯 **The Plot Thickens**: As we explore deeper, we discover layers of meaning and significance that paint a vivid picture of innovation and insight. ✨ **The Grand Finale**: Our adventure concludes with powerful takeaways and actionable wisdom that can transform how we think and act.`,
    };

    return summaries[type] || summaries.brief;
  };

  const generateVideoSummary = (url, type) => {
    const videoId = url.includes("youtube.com") || url.includes("youtu.be")
      ? url.split("v=")[1] || url.split("/").pop()
      : "sampleVideo";

    const base = `This YouTube video (${videoId}) covers the topic in depth, exploring major insights and explanations.`;

    const summaries = {
      brief: `🎥 **Brief Video Summary**\n${base} Key ideas are clearly presented with concise narration.`,
      detailed: `🎥 **Detailed Video Summary**\n${base} The creator walks through a full breakdown of the topic, starting from fundamentals to advanced concepts, providing examples and demonstrations. The conclusion summarizes core takeaways and actionable insights.`,
      bullet: `🎥 **Bullet Summary of Video**\n• Introduction and overview of ${videoId}\n• Main discussion points and key visuals\n• Practical demonstrations and real-life context\n• Expert commentary and final takeaways`,
      keywords: `🎥 **Video Keywords**\nPrimary: ${videoId}, insights, explanation, summary\nSecondary: learning, tutorial, knowledge, analysis, review, concepts`,
      academic: `🎥 **Academic Summary**\nThe video (${videoId}) systematically presents a structured explanation, referencing data, frameworks, and empirical context. The narration adopts a scholarly tone emphasizing clarity, coherence, and validity in arguments.`,
      creative: `🎥 **Creative Summary**\nImagine watching a captivating story unfold where ${videoId} becomes the stage for an engaging journey! 🎬 The visuals and narration weave together seamlessly, leaving the viewer both informed and inspired.`,
    };

    return summaries[type] || summaries.brief;
  };

  const handleSummarize = async () => {
    if (!inputText.trim()) {
      setError("Please enter some text or a valid video link");
      return;
    }

    if (activeTab === "article" && wordCount < 10) {
      setError("Please enter at least 10 words for meaningful summarization");
      return;
    }

    setError("");
    setIsLoading(true);
    setSummaryText("");

    try {
      await new Promise((r) => setTimeout(r, 1500 + Math.random() * 1000));

      const summary =
        activeTab === "article"
          ? generateArticleSummary(inputText, summaryType)
          : generateVideoSummary(inputText, summaryType);

      setSummaryText(summary);
    } catch {
      setError("Failed to generate summary. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(summaryText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setError("Failed to copy to clipboard");
    }
  };

  const clearDemo = () => {
    setInputText("");
    setSummaryText("");
    setError("");
    setWordCount(0);
    setIsLoading(false);
  };

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    clearDemo();
  };

  const loadSampleText = () => {
    clearDemo();
    if (activeTab === "article") {
      setInputText(`Artificial Intelligence has transformed numerous industries over the past decade, revolutionizing how businesses operate and individuals interact with technology. Machine learning algorithms now power recommendation systems, autonomous vehicles, and medical diagnosis tools...`);
    } else {
      setInputText("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }
  };

  return (
    <section 
      className="px-4 sm:px-6 py-12 sm:py-16 lg:py-20 min-h-screen flex items-center"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
      }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Try It <span className="text-red-500">Live</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto px-4">
            Instantly summarize articles or YouTube videos using AI
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4">
          <button
            onClick={() => handleTabSwitch("article")}
            className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-lg text-white font-semibold transition-all ${
              activeTab === "article"
                ? "bg-blue-600 shadow-lg shadow-blue-500/50"
                : "bg-white/10 hover:bg-white/20"
            }`}
          >
            <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> 
            <span className="text-sm sm:text-base">Article Summary</span>
          </button>

          <button
            onClick={() => handleTabSwitch("video")}
            className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-lg text-white font-semibold transition-all ${
              activeTab === "video"
                ? "bg-red-600 shadow-lg shadow-red-500/50"
                : "bg-white/10 hover:bg-white/20"
            }`}
          >
            <Youtube className="w-4 h-4 sm:w-5 sm:h-5" /> 
            <span className="text-sm sm:text-base">Video Summary</span>
          </button>
        </div>

        {/* Card */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl mx-4">
          {error && (
            <div className="mb-4 sm:mb-6 bg-red-500/10 border border-red-500/30 rounded-lg p-3 sm:p-4 flex items-start space-x-2">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <span className="text-red-300 text-sm sm:text-base">{error}</span>
            </div>
          )}

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Input Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-white font-semibold text-sm sm:text-base">
                  {activeTab === "article" ? "Article Text" : "YouTube Video URL"}
                </label>
                <div className="flex space-x-2">
                  <button
                    onClick={loadSampleText}
                    className="text-blue-400 text-xs sm:text-sm hover:text-blue-300 transition-colors"
                  >
                    Load Sample
                  </button>
                  <button
                    onClick={clearDemo}
                    className="text-gray-400 text-xs sm:text-sm hover:text-gray-300 transition-colors"
                  >
                    Clear
                  </button>
                </div>
              </div>

              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={
                  activeTab === "article"
                    ? "Paste your article text here..."
                    : "Paste a YouTube video link here..."
                }
                className="w-full h-40 sm:h-48 bg-black/30 border border-white/20 rounded-lg p-3 sm:p-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all resize-none text-sm sm:text-base"
              />

              {activeTab === "article" && (
                <div className="text-xs sm:text-sm text-gray-400">
                  {wordCount} words{" "}
                  {wordCount < 10 && wordCount > 0 && "(minimum 10 required)"}
                </div>
              )}

              {/* Summary Type Buttons */}
              <div>
                <label className="block text-white font-semibold mb-3 text-sm sm:text-base">
                  Summary Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2">
                  {summaryTypes.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => setSummaryType(type.value)}
                      className={`p-2 sm:p-3 rounded-lg border transition-all text-left ${
                        summaryType === type.value
                          ? "bg-blue-500/20 border-blue-400 text-blue-300 shadow-lg shadow-blue-500/20"
                          : "bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:border-white/30"
                      }`}
                    >
                      <div className="font-medium text-xs sm:text-sm">{type.label}</div>
                      <div className="text-xs opacity-75 mt-1 hidden sm:block">
                        {type.description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleSummarize}
                disabled={!inputText.trim() || isLoading || (activeTab === "article" && wordCount < 10)}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 sm:px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
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

            {/* Output Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-white font-semibold text-sm sm:text-base">
                  Generated Summary
                </label>
                {summaryText && (
                  <button
                    onClick={handleCopy}
                    className="bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 text-green-400 p-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-green-500/20"
                    title="Copy to clipboard"
                  >
                    {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                )}
              </div>

              <div className="bg-black/30 border border-white/20 rounded-lg p-3 sm:p-4 h-40 sm:h-48 lg:h-[calc(100%-4rem)] overflow-y-auto">
                {summaryText ? (
                  <pre className="text-gray-300 whitespace-pre-wrap font-sans text-xs sm:text-sm leading-relaxed">
                    {summaryText}
                  </pre>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    <div className="text-center px-4">
                      <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 opacity-50" />
                      <p className="text-xs sm:text-sm">Your AI-generated summary will appear here</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 px-4">
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-4 sm:p-6 text-center hover:bg-white/10 transition-all">
            <Zap className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-blue-400" />
            <h3 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Lightning Fast</h3>
            <p className="text-gray-400 text-xs sm:text-sm">Get summaries in seconds</p>
          </div>
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-4 sm:p-6 text-center hover:bg-white/10 transition-all">
            <FileText className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-purple-400" />
            <h3 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Multiple Formats</h3>
            <p className="text-gray-400 text-xs sm:text-sm">6 summary styles available</p>
          </div>
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-4 sm:p-6 text-center hover:bg-white/10 transition-all">
            <Youtube className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-red-400" />
            <h3 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Video Support</h3>
            <p className="text-gray-400 text-xs sm:text-sm">Summarize YouTube content</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;