
import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/common/Button";
import { 
  Search, FileText, ExternalLink, Download, BookOpen, 
  CircleSlash, Plus, Briefcase, Link, Brain, 
  BookMarked, Award, Lightbulb, Globe, Filter
} from "lucide-react";
import { toast } from "sonner";

type SearchResult = {
  id: string;
  title: string;
  source: string;
  snippet: string;
  url: string;
  date: string;
  relevance: number;
  citations?: number;
};

type ResearchFilter = {
  timeRange: string;
  sourceType: string[];
  relevance: string;
};

const DeepResearch = () => {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [selectedResults, setSelectedResults] = useState<string[]>([]);
  const [aiSummary, setAiSummary] = useState<string>("");
  const [showSummary, setShowSummary] = useState(false);
  const [expandedResult, setExpandedResult] = useState<string | null>(null);
  const [isGeneratingSummary, setIsGeneratingSummary] = useState(false);
  const [filters, setFilters] = useState<ResearchFilter>({
    timeRange: "anytime",
    sourceType: ["academic", "news", "blogs"],
    relevance: "high"
  });
  const [showFilters, setShowFilters] = useState(false);
  
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) {
      toast.error("Please enter a search query");
      return;
    }
    
    setIsSearching(true);
    setShowSummary(false);
    setAiSummary("");
    setSelectedResults([]);
    
    // Add to search history
    if (!searchHistory.includes(query)) {
      setSearchHistory(prev => [query, ...prev].slice(0, 5));
    }
    
    // Simulate search results using Deepseek R1 capabilities
    setTimeout(() => {
      const dummyResults: SearchResult[] = [
        {
          id: "1",
          title: "Advances in Natural Language Processing: A Comprehensive Review",
          source: "AI Research Journal",
          snippet: "This comprehensive review examines recent advancements in natural language processing (NLP), including transformer architectures, large language models, and multimodal approaches. The paper highlights key innovations in LLMs like Deepseek R1, GPT-4, and Claude that have pushed the boundaries of language understanding.",
          url: "https://example.com/nlp-advances",
          date: "2024-03-15",
          relevance: 0.95,
          citations: 127
        },
        {
          id: "2",
          title: "Comparing Retrieval Techniques in Language Models: Vector Databases vs. Hybrid Approaches",
          source: "Machine Learning Conference Proceedings",
          snippet: "This study evaluates various retrieval techniques used in modern language models to enhance factual accuracy and reduce hallucinations. The research compares vector database approaches, hybrid retrieval systems, and in-context learning methods across different domains.",
          url: "https://example.com/retrieval-techniques",
          date: "2024-02-08",
          relevance: 0.92,
          citations: 84
        },
        {
          id: "3",
          title: "The Role of Cosmic Microstructures in Dark Matter Distribution",
          source: "Astrophysics Journal",
          snippet: "This groundbreaking research explores how cosmic microstructures influence the distribution of dark matter throughout the universe. Using advanced simulation techniques and observational data from the James Webb Space Telescope, researchers identified previously unknown patterns in dark matter clustering around galactic filaments.",
          url: "https://example.com/cosmic-microstructures",
          date: "2024-01-22",
          relevance: 0.88,
          citations: 36
        },
        {
          id: "4",
          title: "Bridging Knowledge Gaps: How Large Language Models Navigate Factual Uncertainty",
          source: "Computational Linguistics Journal",
          snippet: "This paper examines strategies employed by large language models like Deepseek R1 to handle factual uncertainty. The research proposes a novel framework for evaluating how LLMs express confidence in their responses and identifies methods to improve transparent communication of knowledge limitations.",
          url: "https://example.com/llm-uncertainty",
          date: "2023-12-05",
          relevance: 0.84,
          citations: 119
        },
        {
          id: "5",
          title: "Neural Networks in Autonomous Decision-Making: Ethical Considerations and Technical Challenges",
          source: "Ethics in Technology Review",
          snippet: "As neural networks become increasingly integrated into autonomous decision-making systems, this paper explores both the technical challenges and ethical considerations this integration presents. The authors propose a framework for responsible AI development that balances innovation with ethical guardrails.",
          url: "https://example.com/neural-ethics",
          date: "2023-11-18",
          relevance: 0.81,
          citations: 73
        },
        {
          id: "6",
          title: "Quantum Computing Applications in Molecular Modeling: Current Status and Future Prospects",
          source: "Quantum Computing Journal",
          snippet: "This comprehensive review examines the current state of quantum computing applications in molecular modeling and drug discovery. The paper highlights recent breakthroughs in quantum algorithms that have significantly reduced computational complexity for simulating complex molecular interactions.",
          url: "https://example.com/quantum-molecular",
          date: "2023-10-30",
          relevance: 0.78,
          citations: 92
        }
      ];
      
      setResults(dummyResults);
      setIsSearching(false);
    }, 2000);
  };
  
  const toggleResultSelection = (id: string) => {
    if (selectedResults.includes(id)) {
      setSelectedResults(prev => prev.filter(resultId => resultId !== id));
    } else {
      setSelectedResults(prev => [...prev, id]);
    }
  };
  
  const generateResearchSummary = () => {
    if (selectedResults.length === 0) {
      toast.error("Please select at least one result to generate a summary");
      return;
    }
    
    setIsGeneratingSummary(true);
    setShowSummary(false);
    
    // Simulate AI summary generation using Deepseek R1 capabilities
    setTimeout(() => {
      const selectedItems = results.filter(result => selectedResults.includes(result.id));
      const generatedSummary = `
## Research Summary: ${query}

This research summary synthesizes information from ${selectedItems.length} academic sources on the topic of "${query}".

### Key Findings:

1. **Emerging Patterns**: Multiple studies highlight the significant advancements in this field, particularly noting the integration of advanced computational methods with traditional research approaches.

2. **Methodological Innovations**: Recent research employs novel methodological frameworks that combine quantitative and qualitative approaches, allowing for more nuanced understanding of complex phenomena.

3. **Practical Applications**: The research points to several practical applications, including improvements in efficiency, accuracy, and scalability of existing systems.

4. **Future Directions**: Researchers consistently identify several promising directions for future work, including deeper integration with adjacent fields and exploration of unresolved theoretical questions.

### Critical Analysis:

The literature reveals some disagreement regarding optimal implementation strategies, with competing frameworks offering different advantages depending on specific use cases. However, there is broad consensus on the fundamental principles underpinning this research area.

### Conclusion:

This body of research demonstrates significant progress in understanding ${query}, though important questions remain unresolved. Further investigation is recommended in areas where current evidence is limited or contradictory.
      `;
      
      setAiSummary(generatedSummary);
      setShowSummary(true);
      setIsGeneratingSummary(false);
      
      toast.success("Research summary generated using Deepseek R1");
    }, 3000);
  };
  
  const downloadSummary = () => {
    if (!aiSummary) return;
    
    const element = document.createElement("a");
    const file = new Blob([aiSummary], {type: 'text/markdown'});
    element.href = URL.createObjectURL(file);
    element.download = `research-summary-${query.replace(/\s+/g, '-').toLowerCase()}.md`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast.success("Summary downloaded successfully");
  };
  
  const clearSearch = () => {
    setQuery("");
    setResults([]);
    setSelectedResults([]);
    setShowSummary(false);
    setAiSummary("");
    searchInputRef.current?.focus();
  };

  const toggleResultExpansion = (id: string) => {
    if (expandedResult === id) {
      setExpandedResult(null);
    } else {
      setExpandedResult(id);
    }
  };
  
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  
  const updateFilter = (type: keyof ResearchFilter, value: any) => {
    setFilters(prev => ({
      ...prev,
      [type]: value
    }));
  };
  
  const updateSourceTypeFilter = (source: string) => {
    setFilters(prev => {
      const currentSources = [...prev.sourceType];
      if (currentSources.includes(source)) {
        return {
          ...prev,
          sourceType: currentSources.filter(s => s !== source)
        };
      } else {
        return {
          ...prev,
          sourceType: [...currentSources, source]
        };
      }
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-2">
              <span className="text-gradient">Deep Research</span> Space
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto font-serif">
              Leverage Deepseek R1 technologies to explore, analyze, and synthesize research from across the cosmos of human knowledge
            </p>
          </div>
          
          {/* Search Section */}
          <div className="glass-card p-6 mb-8 border border-border rounded-xl">
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  ref={searchInputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Explore research topics, papers, or scientific questions..."
                  className="w-full pl-10 pr-16 py-4 rounded-lg border border-border focus:border-blu-500 focus:ring-0 shadow-sm font-serif"
                />
                {query && (
                  <button
                    type="button"
                    className="absolute inset-y-0 right-16 flex items-center"
                    onClick={clearSearch}
                  >
                    <CircleSlash className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                  </button>
                )}
                <button
                  type="button"
                  className="absolute inset-y-0 right-4 flex items-center"
                  onClick={toggleFilters}
                >
                  <Filter className={`h-5 w-5 ${showFilters ? 'text-blu-500' : 'text-muted-foreground hover:text-foreground'}`} />
                </button>
              </div>
              
              {showFilters && (
                <div className="mt-4 p-4 border border-border rounded-lg bg-white/50 dark:bg-dark-800/50 animate-fade-in">
                  <h3 className="text-sm font-medium mb-3">Research Filters</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs text-muted-foreground">Time Range</label>
                      <select 
                        value={filters.timeRange} 
                        onChange={(e) => updateFilter('timeRange', e.target.value)}
                        className="mt-1 block w-full px-3 py-2 rounded-md border border-border text-sm font-serif"
                      >
                        <option value="anytime">Anytime</option>
                        <option value="past-year">Past Year</option>
                        <option value="past-month">Past Month</option>
                        <option value="past-week">Past Week</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground">Relevance</label>
                      <select 
                        value={filters.relevance} 
                        onChange={(e) => updateFilter('relevance', e.target.value)}
                        className="mt-1 block w-full px-3 py-2 rounded-md border border-border text-sm font-serif"
                      >
                        <option value="high">High Relevance</option>
                        <option value="medium">Medium Relevance</option>
                        <option value="low">Low Relevance</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground">Source Types</label>
                      <div className="mt-1 flex flex-wrap gap-2">
                        {['academic', 'news', 'blogs'].map(source => (
                          <button
                            key={source}
                            type="button"
                            onClick={() => updateSourceTypeFilter(source)}
                            className={`text-xs px-3 py-1 rounded-full border ${
                              filters.sourceType.includes(source) 
                                ? 'bg-blu-500 text-white border-blu-500' 
                                : 'bg-transparent text-muted-foreground border-border'
                            }`}
                          >
                            {source.charAt(0).toUpperCase() + source.slice(1)}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="flex justify-between mt-4">
                <div className="flex flex-wrap gap-2">
                  {searchHistory.map((item, index) => (
                    <button
                      key={index}
                      type="button"
                      className="text-xs px-3 py-1 rounded-full bg-secondary hover:bg-secondary/80 transition-colors font-serif"
                      onClick={() => setQuery(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSearching || !query.trim()}
                  className="bg-cosmos-800 hover:bg-cosmos-700"
                >
                  {isSearching ? "Searching..." : "Deep Search"}
                </Button>
              </div>
            </form>
          </div>
          
          {/* Results Section */}
          {results.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="md:col-span-2">
                <div className="glass-card p-6 border border-border rounded-xl">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">
                      Research Results
                    </h2>
                    <span className="text-sm text-muted-foreground font-serif">
                      {results.length} results found
                    </span>
                  </div>
                  
                  <div className="space-y-6">
                    {results.map((result) => (
                      <div 
                        key={result.id} 
                        className={`p-5 border border-border rounded-lg bg-white/30 dark:bg-dark-800/30 transition-all duration-300 ${
                          expandedResult === result.id ? 'shadow-lg' : 'hover:shadow-md'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-medium text-lg hover:text-blu-400 transition-colors">
                              <a href={result.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                {result.title}
                                <ExternalLink className="h-3 w-3 ml-1" />
                              </a>
                            </h3>
                            <div className="flex items-center text-xs text-muted-foreground mt-1 mb-2 font-serif">
                              <span>{result.source}</span>
                              <span className="mx-2">•</span>
                              <span>{result.date}</span>
                              {result.citations && (
                                <>
                                  <span className="mx-2">•</span>
                                  <span className="flex items-center">
                                    <Award className="h-3 w-3 mr-1" />
                                    {result.citations} citations
                                  </span>
                                </>
                              )}
                              <span className="mx-2">•</span>
                              <span className="flex items-center">
                                <span className={`h-2 w-2 rounded-full mr-1 ${
                                  result.relevance > 0.9 ? 'bg-green-500' : 
                                  result.relevance > 0.8 ? 'bg-blue-500' : 'bg-yellow-500'
                                }`}></span>
                                {Math.round(result.relevance * 100)}% relevant
                              </span>
                            </div>
                          </div>
                          <div>
                            <input
                              type="checkbox"
                              id={`result-${result.id}`}
                              checked={selectedResults.includes(result.id)}
                              onChange={() => toggleResultSelection(result.id)}
                              className="h-4 w-4 text-blu-600 rounded border-border bg-white"
                            />
                          </div>
                        </div>
                        <p className={`text-sm text-muted-foreground font-serif ${
                          expandedResult === result.id ? '' : 'line-clamp-3'
                        }`}>{result.snippet}</p>
                        <div className="flex mt-3 gap-2 justify-between">
                          <div className="flex gap-2">
                            <button className="text-xs flex items-center text-muted-foreground hover:text-foreground">
                              <FileText className="h-3 w-3 mr-1" />
                              PDF
                            </button>
                            <button className="text-xs flex items-center text-muted-foreground hover:text-foreground">
                              <BookOpen className="h-3 w-3 mr-1" />
                              Abstract
                            </button>
                            <button className="text-xs flex items-center text-muted-foreground hover:text-foreground">
                              <Download className="h-3 w-3 mr-1" />
                              Save
                            </button>
                            <button className="text-xs flex items-center text-muted-foreground hover:text-foreground">
                              <Link className="h-3 w-3 mr-1" />
                              Cite
                            </button>
                          </div>
                          <button 
                            onClick={() => toggleResultExpansion(result.id)}
                            className="text-xs text-blu-500 hover:text-blu-600 font-serif"
                          >
                            {expandedResult === result.id ? 'Show less' : 'Show more'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* AI Summary Section */}
                {showSummary && aiSummary && (
                  <div className="mt-6 p-6 border border-cosmos-200 dark:border-cosmos-800 rounded-xl bg-cosmos-50/50 dark:bg-cosmos-900/20 animate-fade-in">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Brain className="h-5 w-5 text-cosmos-500 mr-2" />
                        <h2 className="text-xl font-semibold">Deepseek R1 Research Summary</h2>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={downloadSummary}
                        className="border-cosmos-200 text-cosmos-700 hover:bg-cosmos-100"
                        icon={<Download className="h-4 w-4" />}
                      >
                        Download
                      </Button>
                    </div>
                    <div className="prose max-w-none dark:prose-invert font-serif text-left">
                      {aiSummary.split('\n').map((line, i) => {
                        if (line.startsWith('##')) {
                          return <h2 key={i} className="text-xl font-bold mt-4 mb-2">{line.replace('##', '')}</h2>
                        } else if (line.startsWith('###')) {
                          return <h3 key={i} className="text-lg font-bold mt-3 mb-1">{line.replace('###', '')}</h3>
                        } else if (line.startsWith('1.') || line.startsWith('2.') || line.startsWith('3.') || line.startsWith('4.')) {
                          return <p key={i} className="ml-4 my-1">{line}</p>
                        } else {
                          return line ? <p key={i} className="my-2">{line}</p> : <br key={i} />
                        }
                      })}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="md:col-span-1">
                <div className="glass-card p-6 sticky top-24 border border-border rounded-xl">
                  <div className="flex items-center mb-4">
                    <Brain className="h-5 w-5 text-cosmos-500 mr-2" />
                    <h2 className="text-xl font-semibold">Research Assistant</h2>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-sm font-medium mb-2">Selected Items: {selectedResults.length}</h3>
                    <div className="p-3 rounded-lg bg-white/30 dark:bg-dark-800/30 border border-border min-h-[100px] max-h-[200px] overflow-y-auto">
                      {selectedResults.length > 0 ? (
                        <ul className="space-y-2">
                          {selectedResults.map((id) => {
                            const result = results.find(r => r.id === id);
                            return result ? (
                              <li key={id} className="text-sm flex items-start">
                                <button
                                  className="mt-0.5 mr-1 text-muted-foreground hover:text-destructive"
                                  onClick={() => toggleResultSelection(id)}
                                >
                                  <CircleSlash className="h-3 w-3" />
                                </button>
                                <span className="line-clamp-1 font-serif">{result.title}</span>
                              </li>
                            ) : null;
                          })}
                        </ul>
                      ) : (
                        <div className="text-sm text-muted-foreground text-center py-6 font-serif">
                          Select research items to analyze with Deepseek R1
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      full
                      icon={<Plus className="h-4 w-4" />}
                      disabled={selectedResults.length === 0}
                      className="border-cosmos-200 hover:bg-cosmos-50"
                    >
                      Create Collection
                    </Button>
                    <Button 
                      size="sm" 
                      full
                      icon={<Briefcase className="h-4 w-4" />}
                      onClick={generateResearchSummary}
                      disabled={selectedResults.length === 0 || isGeneratingSummary}
                      className="bg-cosmos-800 hover:bg-cosmos-700"
                    >
                      {isGeneratingSummary ? "Analyzing..." : "Generate Summary"}
                    </Button>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-border">
                    <h3 className="text-sm font-medium mb-2">Cosmic Research Tools</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a href="#" className="flex items-center text-muted-foreground hover:text-foreground">
                          <Globe className="h-4 w-4 mr-2" />
                          Academic Explorer
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center text-muted-foreground hover:text-foreground">
                          <BookMarked className="h-4 w-4 mr-2" />
                          Citation Analysis
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center text-muted-foreground hover:text-foreground">
                          <Lightbulb className="h-4 w-4 mr-2" />
                          Research Insights
                        </a>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-border">
                    <div className="bg-cosmos-100/50 dark:bg-cosmos-900/20 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Brain className="h-4 w-4 text-cosmos-600 mr-2" />
                        <h3 className="text-sm font-medium">Powered by Deepseek R1</h3>
                      </div>
                      <p className="text-xs text-muted-foreground font-serif">
                        Leveraging advanced AI to synthesize insights across the cosmos of human knowledge. Explore deeper connections and perspectives in your research.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Features Section */}
          {results.length === 0 && !isSearching && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="glass-card p-6 border border-border rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="h-12 w-12 rounded-full bg-cosmos-100 dark:bg-cosmos-900/50 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-cosmos-800 dark:text-cosmos-200" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Cosmic Exploration</h3>
                <p className="text-muted-foreground text-sm font-serif">
                  Journey across the universe of human knowledge with advanced semantic search capabilities powered by Deepseek R1 technology.
                </p>
              </div>
              <div className="glass-card p-6 border border-border rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="h-12 w-12 rounded-full bg-cosmos-100 dark:bg-cosmos-900/50 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-cosmos-800 dark:text-cosmos-200" />
                </div>
                <h3 className="text-lg font-semibold mb-2">AI-Powered Synthesis</h3>
                <p className="text-muted-foreground text-sm font-serif">
                  Transform scattered information into coherent insights with our advanced AI synthesis capabilities that identify patterns and connections across research.
                </p>
              </div>
              <div className="glass-card p-6 border border-border rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="h-12 w-12 rounded-full bg-cosmos-100 dark:bg-cosmos-900/50 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-cosmos-800 dark:text-cosmos-200" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Deep Literature Analysis</h3>
                <p className="text-muted-foreground text-sm font-serif">
                  Rapidly analyze academic literature, extract key insights, and generate comprehensive research summaries with citation tracking and relevance scoring.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DeepResearch;
