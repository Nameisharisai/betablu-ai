
import { useState, useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/common/Button";
import { Search, FileText, ExternalLink, Download, BookOpen, CircleSlash, Plus, Briefcase, Link } from "lucide-react";
import { toast } from "sonner";

type SearchResult = {
  id: string;
  title: string;
  source: string;
  snippet: string;
  url: string;
  date: string;
};

const ResearchSpace = () => {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [selectedResults, setSelectedResults] = useState<string[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);
  
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
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-dark-800 border border-border focus:border-blu-500 focus:ring-0"
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
                      className="text-xs px-3 py-1 rounded-full bg-dark-700 hover:bg-dark-600 transition-colors"
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
                      <div key={result.id} className="p-4 border border-border rounded-lg bg-dark-800/50">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-medium text-lg hover:text-blu-400 transition-colors">
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
                              className="h-4 w-4 text-blu-600 rounded border-border bg-dark-800"
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
                    <div className="p-3 rounded-lg bg-dark-800 border border-border min-h-[100px] max-h-[200px] overflow-y-auto">
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
