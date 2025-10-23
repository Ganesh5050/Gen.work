import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  return (
    <>
      {/* Announcement Banner - Fixed at very top */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black text-white py-2 px-4 text-center text-sm font-medium border-b border-gray-800">
        <Link to="/blog/seed-announcement" className="hover:underline inline-flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          ANNOUNCING $10M SEED
          <span className="ml-4 opacity-70">READ MORE →</span>
        </Link>
      </div>

      {/* Main Navigation - Below banner */}
      <nav className="fixed top-[42px] left-0 right-0 z-40 bg-transparent">
        <div className="container mx-auto px-6 py-6">
          <div className="grid grid-cols-3 items-center">
            {/* Left: Logo */}
            <div className="flex justify-start">
              <div className="relative inline-block">
                <DottedGlowBackground 
                  className="absolute inset-0 -m-4 rounded-lg"
                  gap={8}
                  radius={1.5}
                  color="rgba(34, 197, 94, 0.4)"
                  glowColor="rgba(34, 197, 94, 0.8)"
                  opacity={0.5}
                  speedMin={0.3}
                  speedMax={0.8}
                  speedScale={0.8}
                />
                <Link to="/" className="flex items-center gap-3 text-2xl font-bold relative z-10">
                  <img src="/logo.png" alt="gen.work" className="h-8 w-8" />
                  <span>
                    <span className="text-white">gen.</span><span className="text-green-500">work</span>
                  </span>
                </Link>
              </div>
            </div>

            {/* Center: Desktop Navigation - dark pill background */}
            <div className="hidden md:flex justify-center">
              <div className="flex items-center bg-gray-900/80 backdrop-blur-sm rounded-full px-6 py-3 gap-8">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors outline-none">
                    Solutions
                    <ChevronDown className="h-3 w-3" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-gray-900 border-gray-800 text-white min-w-[280px] p-2">
                    <DropdownMenuItem asChild>
                      <Link to="/solutions#it" className="cursor-pointer p-3 rounded-lg hover:bg-gray-800 transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-blue-400 text-lg">💻</span>
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-white mb-1">IT Operations</div>
                            <div className="text-xs text-gray-400">Access provisioning, ITSM workflows, ticket resolution</div>
                          </div>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/solutions#hr" className="cursor-pointer p-3 rounded-lg hover:bg-gray-800 transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-purple-400 text-lg">👥</span>
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-white mb-1">HR & People Ops</div>
                            <div className="text-xs text-gray-400">Employee onboarding, benefits, leave management</div>
                          </div>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/solutions#procurement" className="cursor-pointer p-3 rounded-lg hover:bg-gray-800 transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-green-400 text-lg">📦</span>
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-white mb-1">Procurement</div>
                            <div className="text-xs text-gray-400">Vendor onboarding, purchase requests, PO tracking</div>
                          </div>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/solutions#legal" className="cursor-pointer p-3 rounded-lg hover:bg-gray-800 transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-red-400 text-lg">⚖️</span>
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-white mb-1">Legal & Compliance</div>
                            <div className="text-xs text-gray-400">Contract review, compliance monitoring, NDA review</div>
                          </div>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/solutions#finance" className="cursor-pointer p-3 rounded-lg hover:bg-gray-800 transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-yellow-400 text-lg">💰</span>
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-white mb-1">Finance & Operations</div>
                            <div className="text-xs text-gray-400">Invoice processing, expense mgmt, budget tracking</div>
                          </div>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                    <div className="border-t border-gray-800 mt-2 pt-2">
                      <DropdownMenuItem asChild>
                        <Link to="/solutions" className="cursor-pointer p-3 rounded-lg hover:bg-gray-800 transition-colors">
                          <div className="text-green-500 font-medium text-sm flex items-center gap-2">
                            View All Solutions
                            <span>→</span>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Link to="/pricing" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
                <Link to="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
                <Link to="/blog" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
                <Link to="/book-demo" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Book a Demo
                </Link>
              </div>
            </div>

            {/* Right: CTA Button + X Icon */}
            <div className="hidden md:flex justify-end items-center gap-4">
              <Link to="/request-access">
                <Button className="bg-white text-black hover:bg-gray-100 font-medium rounded-full px-6">
                  Request Access
                </Button>
              </Link>
              <div className="w-10 h-10 flex items-center justify-center text-white cursor-pointer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex justify-end">
              <button
                className="text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
              <div>
                <button
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                  className="flex items-center justify-between w-full text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Solutions
                  <ChevronDown className={`h-4 w-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isSolutionsOpen && (
                  <div className="ml-4 mt-3 space-y-3">
                    <Link to="/solutions#it" className="flex items-start gap-2 p-2 rounded-lg hover:bg-gray-800 transition-colors" onClick={() => setIsMenuOpen(false)}>
                      <span className="text-lg">💻</span>
                      <div>
                        <div className="text-sm text-white font-medium">IT Operations</div>
                        <div className="text-xs text-gray-500">Access provisioning, ITSM</div>
                      </div>
                    </Link>
                    <Link to="/solutions#hr" className="flex items-start gap-2 p-2 rounded-lg hover:bg-gray-800 transition-colors" onClick={() => setIsMenuOpen(false)}>
                      <span className="text-lg">👥</span>
                      <div>
                        <div className="text-sm text-white font-medium">HR & People Ops</div>
                        <div className="text-xs text-gray-500">Onboarding, benefits</div>
                      </div>
                    </Link>
                    <Link to="/solutions#procurement" className="flex items-start gap-2 p-2 rounded-lg hover:bg-gray-800 transition-colors" onClick={() => setIsMenuOpen(false)}>
                      <span className="text-lg">📦</span>
                      <div>
                        <div className="text-sm text-white font-medium">Procurement</div>
                        <div className="text-xs text-gray-500">Vendor onboarding, PO</div>
                      </div>
                    </Link>
                    <Link to="/solutions#legal" className="flex items-start gap-2 p-2 rounded-lg hover:bg-gray-800 transition-colors" onClick={() => setIsMenuOpen(false)}>
                      <span className="text-lg">⚖️</span>
                      <div>
                        <div className="text-sm text-white font-medium">Legal & Compliance</div>
                        <div className="text-xs text-gray-500">Contract review, NDA</div>
                      </div>
                    </Link>
                    <Link to="/solutions#finance" className="flex items-start gap-2 p-2 rounded-lg hover:bg-gray-800 transition-colors" onClick={() => setIsMenuOpen(false)}>
                      <span className="text-lg">💰</span>
                      <div>
                        <div className="text-sm text-white font-medium">Finance & Operations</div>
                        <div className="text-xs text-gray-500">Invoice, expense mgmt</div>
                      </div>
                    </Link>
                    <Link to="/solutions" className="flex items-center gap-2 p-2 text-sm text-green-500 hover:text-green-400 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                      View All <span>→</span>
                    </Link>
                  </div>
                )}
              </div>
              <Link to="/pricing" className="block text-sm text-gray-400 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                Pricing
              </Link>
              <Link to="/about" className="block text-sm text-gray-400 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link to="/blog" className="block text-sm text-gray-400 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
              <Link to="/book-demo" className="block text-sm text-gray-400 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
                Book a Demo
              </Link>
              <Link to="/request-access" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-white text-black hover:bg-gray-100 font-medium rounded-full">
                  Request Access
                </Button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
