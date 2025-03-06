
import { cn } from "@/lib/utils";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={cn("bg-secondary/50 py-12", className)}>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-gradient">BetaBLU</span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-6">
              Create, manage, and integrate AI agents into your workflows with BetaBLU's platform.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-foreground/70 hover:text-blu-500 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-foreground/70 hover:text-blu-500 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-foreground/70 hover:text-blu-500 transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Platform</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-blu-500 transition-colors">
                  Agent Builder
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-blu-500 transition-colors">
                  Integration
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-blu-500 transition-colors">
                  Enterprise
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-blu-500 transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-blu-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-blu-500 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-blu-500 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-blu-500 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} BetaBLU. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-blu-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-blu-500 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
