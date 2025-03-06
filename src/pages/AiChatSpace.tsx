
import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/common/Button";
import { Send, MessageSquare, Settings, MoreHorizontal, Bot, User, Cpu, Sparkles, RefreshCw } from "lucide-react";
import { toast } from "sonner";

const MODELS = [
  { id: "gpt4", name: "OpenAI GPT-4", icon: <Sparkles className="h-5 w-5 text-green-500" /> },
  { id: "claude", name: "Anthropic Claude", icon: <Bot className="h-5 w-5 text-purple-500" /> },
  { id: "gemini", name: "Google Gemini", icon: <Cpu className="h-5 w-5 text-blue-500" /> },
];

type Message = {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
  model: string;
};

const AiChatSpace = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [selectedModel, setSelectedModel] = useState("gpt4");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  useEffect(() => {
    if (messages.length === 0) {
      // Add welcome message
      setMessages([
        {
          id: "welcome",
          content: "Welcome to BetaBLU AI Chat! I'm here to help you with any questions or tasks. Choose your preferred AI model and start chatting.",
          role: "assistant",
          timestamp: new Date(),
          model: "system"
        }
      ]);
    }
  }, []);
  
  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
      model: selectedModel
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    
    // Simulate AI response (would connect to actual API in production)
    setTimeout(() => {
      const selectedModelData = MODELS.find(m => m.id === selectedModel)!;
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `This is a simulated response from ${selectedModelData.name}. In a production environment, this would connect to the actual AI model API.`,
        role: "assistant",
        timestamp: new Date(),
        model: selectedModel
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const clearConversation = () => {
    setMessages([]);
    toast.success("Conversation cleared");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[calc(100vh-200px)] flex flex-col md:flex-row gap-4">
          {/* Sidebar */}
          <div className="w-full md:w-64 shrink-0">
            <div className="glass-card p-4 h-full flex flex-col">
              <h2 className="text-xl font-semibold mb-4">Models</h2>
              
              <div className="space-y-2 flex-grow">
                {MODELS.map((model) => (
                  <button
                    key={model.id}
                    className={`w-full text-left p-3 rounded-lg flex items-center ${
                      selectedModel === model.id ? 'bg-blu-600 text-white' : 'hover:bg-dark-700'
                    }`}
                    onClick={() => setSelectedModel(model.id)}
                  >
                    {model.icon}
                    <span className="ml-2">{model.name}</span>
                  </button>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-border">
                <Button 
                  variant="outline" 
                  size="sm" 
                  full 
                  icon={<RefreshCw className="h-4 w-4" />}
                  onClick={clearConversation}
                >
                  New Chat
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  full 
                  icon={<Settings className="h-4 w-4" />}
                  className="mt-2"
                >
                  Settings
                </Button>
              </div>
            </div>
          </div>
          
          {/* Chat Area */}
          <div className="flex-grow glass-card p-4 flex flex-col h-full">
            <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
              {messages.map((message) => (
                <div 
                  key={message.id}
                  className={`mb-6 ${message.role === 'user' ? 'ml-4' : 'mr-4'}`}
                >
                  <div className={`flex items-start ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {message.role === 'assistant' && (
                      <div className="bg-blu-600 rounded-full p-2 mr-3">
                        <Bot className="h-5 w-5 text-white" />
                      </div>
                    )}
                    
                    <div className={`max-w-[80%] ${
                      message.role === 'user' 
                        ? 'bg-dark-600 text-white rounded-tl-2xl rounded-tr-sm rounded-bl-2xl' 
                        : 'bg-dark-700 rounded-tl-sm rounded-tr-2xl rounded-br-2xl'
                    } p-4`}>
                      <div className="text-sm">{message.content}</div>
                      <div className="text-xs text-muted-foreground mt-2">
                        {message.timestamp.toLocaleTimeString()}
                        {message.role === 'assistant' && message.model !== 'system' && (
                          <span className="ml-2 inline-flex items-center text-xs px-2 py-0.5 rounded-full bg-dark-800">
                            {MODELS.find(m => m.id === message.model)?.name || message.model}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {message.role === 'user' && (
                      <div className="bg-muted rounded-full p-2 ml-3">
                        <User className="h-5 w-5 text-foreground" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="mb-6 mr-4">
                  <div className="flex items-start">
                    <div className="bg-blu-600 rounded-full p-2 mr-3">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                    <div className="bg-dark-700 rounded-tl-sm rounded-tr-2xl rounded-br-2xl p-4">
                      <div className="flex space-x-2">
                        <div className="h-2 w-2 rounded-full bg-blu-500 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                        <div className="h-2 w-2 rounded-full bg-blu-500 animate-bounce" style={{ animationDelay: "300ms" }}></div>
                        <div className="h-2 w-2 rounded-full bg-blu-500 animate-bounce" style={{ animationDelay: "600ms" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            <div className="mt-4 pt-4 border-t border-border">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-end gap-2"
              >
                <div className="relative flex-grow">
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message..."
                    className="w-full p-3 pr-10 min-h-[60px] max-h-[150px] rounded-lg bg-dark-700 border border-border focus:border-blu-500 focus:ring-0 resize-none"
                    rows={1}
                  />
                  <div className="absolute right-2 bottom-2">
                    <button 
                      type="button"
                      className="p-1 text-muted-foreground hover:text-foreground"
                    >
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <Button 
                  type="submit" 
                  size="icon"
                  disabled={!input.trim() || isTyping}
                >
                  <Send className="h-5 w-5" />
                </Button>
              </form>
              <div className="text-xs text-muted-foreground mt-2 text-center">
                BetaBLU provides access to different AI models in a unified interface.
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AiChatSpace;
