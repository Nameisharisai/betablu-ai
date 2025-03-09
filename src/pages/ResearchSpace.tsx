
import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/common/Button";
import { 
  Search, FileText, ExternalLink, Download, BookOpen, 
  CircleSlash, Plus, Briefcase, Link, FileDown, FilePenLine, 
  Brain, UserCog, Database, ArrowDownToLine, Braces
} from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

type SearchResult = {
  id: string;
  title: string;
  source: string;
  snippet: string;
  url: string;
  date: string;
};

type ResearchDocument = {
  id: string;
  title: string;
  content: string;
  date: string;
};

const ResearchSpace = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [selectedResults, setSelectedResults] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<"search" | "deepResearch">("search");
  const [isGeneratingResearch, setIsGeneratingResearch] = useState(false);
  const [generatedDocument, setGeneratedDocument] = useState<ResearchDocument | null>(null);
  const [deepResearchQuery, setDeepResearchQuery] = useState("");
  const [researchDepth, setResearchDepth] = useState<"basic" | "standard" | "comprehensive">("standard");
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      toast.error("Please login to access Research Space");
      navigate("/login");
    }
  }, [navigate]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) {
      toast.error("Please enter a search query");
      return;
    }
    
    setIsSearching(true);
    
    // Add to search history
    if (!searchHistory.includes(query)) {
      setSearchHistory(prev => [query, ...prev].slice(0, 5));
    }
    
    // Simulate search results (would connect to actual API in production)
    setTimeout(() => {
      const dummyResults: SearchResult[] = [
        {
          id: "1",
          title: "Advancements in Retrieval-Augmented Generation (RAG) for AI Research",
          source: "AI Research Journal",
          snippet: "This paper explores recent advancements in Retrieval-Augmented Generation (RAG) techniques, demonstrating significant improvements in factual accuracy and contextual relevance compared to traditional language models.",
          url: "https://example.com/rag-research",
          date: "2023-11-15"
        },
        {
          id: "2",
          title: "Implementing RAG Systems: A Practical Guide",
          source: "Tech Publications",
          snippet: "A comprehensive guide to implementing Retrieval-Augmented Generation systems, including vector databases, embedding models, and integration with large language models for enhanced performance.",
          url: "https://example.com/rag-implementation",
          date: "2023-09-22"
        },
        {
          id: "3",
          title: "Comparing RAG and Fine-tuning Approaches for Domain-Specific AI Applications",
          source: "AI Conference Proceedings",
          snippet: "This study compares the effectiveness of Retrieval-Augmented Generation versus fine-tuning large language models for domain-specific applications, highlighting scenarios where each approach excels.",
          url: "https://example.com/rag-vs-finetuning",
          date: "2023-10-08"
        },
        {
          id: "4",
          title: "Vector Databases for Semantic Search in RAG Systems",
          source: "Database Technology Review",
          snippet: "An analysis of various vector database technologies and their performance characteristics when used for semantic search in Retrieval-Augmented Generation systems.",
          url: "https://example.com/vector-databases",
          date: "2023-12-01"
        },
        {
          id: "5",
          title: "Enhancing RAG with Multi-modal Retrieval Techniques",
          source: "Computer Vision Journal",
          snippet: "This research explores how multi-modal retrieval techniques can enhance RAG systems by incorporating visual and textual information for more comprehensive context generation.",
          url: "https://example.com/multimodal-rag",
          date: "2024-01-10"
        }
      ];
      
      setResults(dummyResults);
      setIsSearching(false);
    }, 1500);
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
    
    toast.success("Research summary generated");
  };
  
  const generateDeepResearch = () => {
    if (!deepResearchQuery.trim()) {
      toast.error("Please enter a research topic");
      return;
    }
    
    setIsGeneratingResearch(true);
    
    // Simulate AI-generated research (would connect to actual AI API in production)
    setTimeout(() => {
      const mockDocument: ResearchDocument = {
        id: Date.now().toString(),
        title: `Comprehensive Analysis: ${deepResearchQuery}`,
        content: `
# ${deepResearchQuery}: A Comprehensive Analysis

## Executive Summary
This research explores ${deepResearchQuery} through a systematic analysis of current literature, methodologies, and practical applications. Using Retrieval-Augmented Generation (RAG) technology, this document synthesizes information from various reliable sources to provide a coherent and comprehensive overview.

## Introduction
${deepResearchQuery} has become increasingly relevant in today's technological landscape. This research aims to provide a thorough understanding of its core principles, historical development, and future implications.

## Methodology
This analysis employs a RAG-based approach to retrieve and synthesize information from academic papers, industry reports, and verified data sources. The depth of research is set to "${researchDepth}" level, ensuring appropriate detail and scope.

## Key Findings
1. Historical Development: The evolution of ${deepResearchQuery} can be traced through several significant milestones...
2. Core Principles: The fundamental concepts underpinning ${deepResearchQuery} include...
3. Current Applications: Today, ${deepResearchQuery} is implemented across various domains including...
4. Challenges and Limitations: Despite its advantages, ${deepResearchQuery} faces several challenges...
5. Future Directions: Emerging trends suggest that ${deepResearchQuery} will evolve in the following ways...

## Detailed Analysis
(Detailed sections with in-depth coverage of each aspect of ${deepResearchQuery}...)

## Conclusions
This comprehensive analysis of ${deepResearchQuery} reveals its significant potential as well as important considerations for implementation and future development. As technology continues to advance, ${deepResearchQuery} will likely play an increasingly important role in various sectors.

## References
1. Smith, J. (2023). "Advances in ${deepResearchQuery}." Journal of Technology Innovation, 45(2), 112-128.
2. BetaBLU Research Division. (2024). "${deepResearchQuery}: Industry Applications and Case Studies."
3. International Association of ${deepResearchQuery}. (2024). "Best Practices and Standards for ${deepResearchQuery} Implementation."
(Additional references...)

Generated by BetaBLU Research Space using RAG-Enhanced AI - ${new Date().toLocaleDateString()}
        `,
        date: new Date().toISOString()
      };
      
      setGeneratedDocument(mockDocument);
      setIsGeneratingResearch(false);
    }, 3000);
  };
  
  const downloadResearchDocument = () => {
    if (!generatedDocument) return;
    
    // Create a blob from the research content
    const blob = new Blob([generatedDocument.content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    
    // Create a temporary anchor element and trigger download
    const a = document.createElement('a');
    a.href = url;
    a.download = `${generatedDocument.title.replace(/\s+/g, '_')}.md`;
    document.body.appendChild(a);
    a.click();
    
    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast.success("Research document downloaded successfully");
  };
  
  const clearSearch = () => {
    setQuery("");
    setResults([]);
    searchInputRef.current?.focus();
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">
              <span className="text-gradient">Research</span> Space
            </h1>
            <p className="text-muted-foreground">Discover, analyze, and synthesize research with AI assistance</p>
          </div>
          
          {/* Tabs */}
          <div className="glass-card p-2 mb-8 flex rounded-full overflow-hidden">
            <button
              className={`flex-1 py-3 px-6 rounded-full transition-colors ${
                activeTab === "search" ? "bg-primary text-white" : "hover:bg-secondary"
              }`}
              onClick={() => setActiveTab("search")}
            >
              <div className="flex items-center justify-center">
                <Search className="h-4 w-4 mr-2" />
                Research Search
              </div>
            </button>
            <button
              className={`flex-1 py-3 px-6 rounded-full transition-colors ${
                activeTab === "deepResearch" ? "bg-primary text-white" : "hover:bg-secondary"
              }`}
              onClick={() => setActiveTab("deepResearch")}
            >
              <div className="flex items-center justify-center">
                <Brain className="h-4 w-4 mr-2" />
                Deep Research
              </div>
            </button>
          </div>
          
          {activeTab === "search" ? (
            <>
              {/* Search Section */}
              <div className="glass-card p-6 mb-8">
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
                      placeholder="Search for research papers, articles, or topics..."
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-white border border-border focus:border-blu-500 focus:ring-0"
                    />
                    {query && (
                      <button
                        type="button"
                        className="absolute inset-y-0 right-12 flex items-center"
                        onClick={clearSearch}
                      >
                        <CircleSlash className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                      </button>
                    )}
                  </div>
                  
                  <div className="flex justify-between mt-4">
                    <div className="flex flex-wrap gap-2">
                      {searchHistory.map((item, index) => (
                        <button
                          key={index}
                          type="button"
                          className="text-xs px-3 py-1 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                          onClick={() => setQuery(item)}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isSearching || !query.trim()}
                    >
                      {isSearching ? "Searching..." : "Search"}
                    </Button>
                  </div>
                </form>
              </div>
              
              {/* Results Section */}
              {results.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="md:col-span-2">
                    <div className="glass-card p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">
                          Search Results
                        </h2>
                        <span className="text-sm text-muted-foreground">
                          {results.length} results found
                        </span>
                      </div>
                      
                      <div className="space-y-6">
                        {results.map((result) => (
                          <div key={result.id} className="p-4 border border-border rounded-lg bg-white">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="font-medium text-lg hover:text-blu-600 transition-colors">
                                  <a href={result.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                    {result.title}
                                    <ExternalLink className="h-3 w-3 ml-1" />
                                  </a>
                                </h3>
                                <div className="flex items-center text-xs text-muted-foreground mt-1 mb-2">
                                  <span>{result.source}</span>
                                  <span className="mx-2">•</span>
                                  <span>{result.date}</span>
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
                            <p className="text-sm text-muted-foreground">{result.snippet}</p>
                            <div className="flex mt-3 gap-2">
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
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:col-span-1">
                    <div className="glass-card p-6 sticky top-24">
                      <h2 className="text-xl font-semibold mb-4">Research Assistant</h2>
                      
                      <div className="mb-4">
                        <h3 className="text-sm font-medium mb-2">Selected Items: {selectedResults.length}</h3>
                        <div className="p-3 rounded-lg bg-white border border-border min-h-[100px] max-h-[200px] overflow-y-auto">
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
                                    <span className="line-clamp-1">{result.title}</span>
                                  </li>
                                ) : null;
                              })}
                            </ul>
                          ) : (
                            <div className="text-sm text-muted-foreground text-center py-6">
                              Select items from the results to analyze
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
                        >
                          Create Collection
                        </Button>
                        <Button 
                          size="sm" 
                          full
                          icon={<Briefcase className="h-4 w-4" />}
                          onClick={generateResearchSummary}
                          disabled={selectedResults.length === 0}
                        >
                          Generate Summary
                        </Button>
                      </div>
                      
                      <div className="mt-6 pt-4 border-t border-border">
                        <h3 className="text-sm font-medium mb-2">Research Tools</h3>
                        <ul className="space-y-2 text-sm">
                          <li>
                            <a href="#" className="flex items-center text-muted-foreground hover:text-foreground">
                              <SearchIcon className="h-4 w-4 mr-2" />
                              Advanced Search
                            </a>
                          </li>
                          <li>
                            <a href="#" className="flex items-center text-muted-foreground hover:text-foreground">
                              <BookOpen className="h-4 w-4 mr-2" />
                              Literature Review
                            </a>
                          </li>
                          <li>
                            <a href="#" className="flex items-center text-muted-foreground hover:text-foreground">
                              <FileText className="h-4 w-4 mr-2" />
                              Citation Generator
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Features Section */}
              {results.length === 0 && !isSearching && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="glass-card p-6">
                    <h3 className="text-lg font-semibold mb-2">Comprehensive Research</h3>
                    <p className="text-muted-foreground text-sm">
                      Search across academic papers, journals, and publications from multiple sources simultaneously.
                    </p>
                  </div>
                  <div className="glass-card p-6">
                    <h3 className="text-lg font-semibold mb-2">AI-Powered Analysis</h3>
                    <p className="text-muted-foreground text-sm">
                      Generate summaries, extract key points, and identify trends from your selected research materials.
                    </p>
                  </div>
                  <div className="glass-card p-6">
                    <h3 className="text-lg font-semibold mb-2">RAG Integration</h3>
                    <p className="text-muted-foreground text-sm">
                      Our Retrieval-Augmented Generation technology ensures accurate and up-to-date information for your research.
                    </p>
                  </div>
                </div>
              )}
            </>
          ) : (
            /* Deep Research Section */
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <div className="glass-card p-6 sticky top-24">
                  <h2 className="text-xl font-semibold mb-4">Deep Research</h2>
                  <p className="text-sm text-muted-foreground mb-6">
                    Create comprehensive research documents on any topic using our advanced AI with RAG technology.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="research-topic" className="block text-sm font-medium mb-1">
                        Research Topic
                      </label>
                      <input
                        id="research-topic"
                        type="text"
                        value={deepResearchQuery}
                        onChange={(e) => setDeepResearchQuery(e.target.value)}
                        placeholder="Enter your research topic..."
                        className="w-full p-3 rounded-lg bg-white border border-border focus:border-blu-500 focus:ring-0"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Research Depth
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        <button
                          type="button"
                          className={`p-2 text-xs rounded-lg border ${
                            researchDepth === "basic"
                              ? "bg-primary text-white border-primary"
                              : "border-border hover:border-blu-400"
                          }`}
                          onClick={() => setResearchDepth("basic")}
                        >
                          Basic
                        </button>
                        <button
                          type="button"
                          className={`p-2 text-xs rounded-lg border ${
                            researchDepth === "standard"
                              ? "bg-primary text-white border-primary"
                              : "border-border hover:border-blu-400"
                          }`}
                          onClick={() => setResearchDepth("standard")}
                        >
                          Standard
                        </button>
                        <button
                          type="button"
                          className={`p-2 text-xs rounded-lg border ${
                            researchDepth === "comprehensive"
                              ? "bg-primary text-white border-primary"
                              : "border-border hover:border-blu-400"
                          }`}
                          onClick={() => setResearchDepth("comprehensive")}
                        >
                          Comprehensive
                        </button>
                      </div>
                    </div>
                    
                    <Button 
                      full
                      disabled={isGeneratingResearch || !deepResearchQuery.trim()}
                      icon={<Brain className="h-4 w-4" />}
                      onClick={generateDeepResearch}
                    >
                      {isGeneratingResearch ? "Generating..." : "Generate Research"}
                    </Button>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-border">
                    <h3 className="text-sm font-medium mb-2">About Deep Research</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Database className="h-4 w-4 mt-0.5 mr-2 text-blu-500" />
                        <p className="text-xs">
                          Uses RAG technology to access and synthesize information from various sources
                        </p>
                      </div>
                      <div className="flex items-start">
                        <UserCog className="h-4 w-4 mt-0.5 mr-2 text-blu-500" />
                        <p className="text-xs">
                          Automatically organizes information into a coherent, well-structured document
                        </p>
                      </div>
                      <div className="flex items-start">
                        <Braces className="h-4 w-4 mt-0.5 mr-2 text-blu-500" />
                        <p className="text-xs">
                          Generates citations and references from accessed sources
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <div className="glass-card p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Research Document</h2>
                    {generatedDocument && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        icon={<ArrowDownToLine className="h-4 w-4" />}
                        onClick={downloadResearchDocument}
                      >
                        Download
                      </Button>
                    )}
                  </div>
                  
                  {isGeneratingResearch ? (
                    <div className="py-20 flex flex-col items-center justify-center">
                      <div className="relative w-16 h-16 mb-4">
                        <div className="absolute top-0 left-0 w-full h-full border-4 border-t-blu-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
                        <div className="absolute top-2 left-2 w-12 h-12 border-4 border-t-transparent border-r-blu-300 border-b-transparent border-l-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
                        <Brain className="absolute top-4 left-4 w-8 h-8 text-blu-500" />
                      </div>
                      <p className="text-center">
                        Generating comprehensive research on<br />
                        <span className="font-semibold">{deepResearchQuery}</span>
                      </p>
                      <div className="mt-2 text-xs text-muted-foreground text-center max-w-md">
                        Our AI is researching, analyzing, and synthesizing information from various reliable sources using RAG technology.
                      </div>
                    </div>
                  ) : generatedDocument ? (
                    <div className="p-4 min-h-[70vh] bg-white border border-border rounded-lg">
                      <div className="prose prose-sm max-w-none">
                        <h1 className="text-2xl font-bold mb-4">{generatedDocument.title}</h1>
                        <div className="flex justify-between items-center text-xs text-muted-foreground mb-6">
                          <span>Generated on {new Date(generatedDocument.date).toLocaleDateString()}</span>
                          <span className="inline-flex items-center px-2 py-1 rounded-full bg-blu-100 text-blu-700">
                            <FilePenLine className="h-3 w-3 mr-1" />
                            {researchDepth.charAt(0).toUpperCase() + researchDepth.slice(1)} Research
                          </span>
                        </div>
                        <div className="whitespace-pre-line">
                          {generatedDocument.content}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="py-20 flex flex-col items-center justify-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-blu-100">
                        <FileText className="h-8 w-8 text-blu-500" />
                      </div>
                      <p className="text-lg font-medium">No research document generated yet</p>
                      <p className="text-sm text-muted-foreground mt-2 mb-6 text-center max-w-md">
                        Enter a research topic and set your desired depth to generate a comprehensive research document using our AI with RAG technology.
                      </p>
                      <div className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-blu-500 mr-2"></div>
                        <span>Try topics like "Quantum Computing" or "Climate Change Solutions"</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

// A custom Search icon that matches the design
const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

export default ResearchSpace;
