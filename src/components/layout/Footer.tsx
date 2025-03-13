
import { cn } from "@/lib/utils";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={cn("bg-pro-900 text-white py-12", className)}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white font-sans">Betablu</span>
            </div>
            <p className="text-pro-300 max-w-sm mb-6">
              Create, manage, and integrate AI agents into your workflows with Betablu's platform.
            </p>
            <div className="flex items-center space-x-4 mb-6">
              <a
                href="mailto:betablu.ai@gmail.com"
                className="flex items-center text-pro-300 hover:text-accent1-400 transition-colors"
              >
                <Mail size={18} className="mr-2" />
                betablu.ai@gmail.com
              </a>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-pro-400 hover:text-accent1-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-pro-400 hover:text-accent1-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-pro-400 hover:text-accent1-400 transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-pro-200">Platform</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/intelliagent" className="text-pro-300 hover:text-accent1-400 transition-colors">
                  IntelliAgent Space
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-pro-300 hover:text-accent1-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/adaptive-intelligence" className="text-pro-300 hover:text-accent1-400 transition-colors">
                  Adaptive Intelligence
                </Link>
              </li>
              <li>
                <Link to="/deep-research" className="text-pro-300 hover:text-accent1-400 transition-colors">
                  Deep Research
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-pro-200">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-pro-300 hover:text-accent1-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-pro-300 hover:text-accent1-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <Link to="/careers" className="text-pro-300 hover:text-accent1-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <a href="#" className="text-pro-300 hover:text-accent1-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-pro-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-pro-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Betablu. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-pro-400 hover:text-accent1-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-pro-400 hover:text-accent1-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
