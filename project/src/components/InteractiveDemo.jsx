import React, { useState, useEffect } from 'react';
import {
  Zap,
  Copy,
  CheckCircle,
  AlertCircle,
  BookOpen
} from 'lucide-react'; // ✅ Make sure lucide-react is installed (npm i lucide-react)

const InteractiveDemo = () => {
  const [summaryText, setSummaryText] = useState('');
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [summaryType, setSummaryType] = useState('brief');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const summaryTypes = [
    { value: 'brief', label: '📝 Brief Summary', description: 'Quick overview of main points' },
    { value: 'detailed', label: '📖 Detailed Summary', description: 'Comprehensive analysis' },
    { value: 'bullet', label: '• Bullet Points', description: 'Key points in list format' },
    { value: 'keywords', label: '🏷️ Keywords', description: 'Important terms and concepts' },
    { value: 'academic', label: '🎓 Academic Style', description: 'Formal academic summary' },
    { value: 'creative', label: '✨ Creative Summary', description: 'Engaging narrative style' }
  ];

  useEffect(() => {
    const words = inputText.trim().split(/\s+/).filter(word => word.length > 0);
    setWordCount(words.length);
  }, [inputText]);

  const generateMockSummary = (text, type) => {
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
      // Simulate AI summary generation delay
      await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));
      const mockSummary = generateMockSummary(inputText, summaryType);
      setSummaryText(mockSummary);
    } catch (err) {
      setError('Failed to generate summary. Please try again.');
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
      setError('Failed to copy to clipboard');
    }
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
    <section className="px-6 py-20 bg-black/20"
    style={{
    background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
   }}>
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

              {/* Summary Type Buttons */}
              <div className="mt-4 mb-6">
                <label className="block text-white font-semibold mb-3">Summary Type</label>
                <div className="grid grid-cols-2 gap-2">
                  {summaryTypes.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => setSummaryType(type.value)}
                      className={`p-3 rounded-lg border transition-all text-left ${
                        summaryType === type.value
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
                  <button
                    onClick={handleCopy}
                    className="bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 text-green-400 p-2 rounded-lg transition-all duration-300"
                    title="Copy to clipboard"
                  >
                    {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
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
  );
};

export default InteractiveDemo;
