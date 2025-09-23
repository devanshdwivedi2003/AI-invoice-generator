import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FileText, Menu, X, User } from "lucide-react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  ClerkLoading,
  ClerkLoaded,
} from "@clerk/clerk-react";

const Headers = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user } = useUser();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-blue-900/95 backdrop-blur-md shadow-md" : "bg-blue-950"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold text-white"
          >
            <FileText className="w-6 h-6" />
            <span>AI Invoice App</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-white font-medium">
            {["Features", "Testimonials", "FAQS"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Auth Section (Desktop) */}
          {/* Auth Section (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <ClerkLoading>
              {/* Loading skeleton or placeholder */}
              <div className="w-22 h-9 rounded-lg bg-white/20 animate-pulse"></div>
              <div className="w-22 h-9 rounded-lg bg-white/20 animate-pulse"></div>
            </ClerkLoading>

            <ClerkLoaded>
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="px-4 py-2 rounded-lg text-white border border-white/40 hover:bg-white hover:text-blue-900 transition">
                    Login
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="px-4 py-2 rounded-lg bg-white text-blue-900 font-semibold hover:bg-gray-200 transition">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>

              <SignedIn>
                <div className="flex items-center gap-3">
                  <span className="text-white hidden sm:block ">
                    {user?.firstName || "User"}
                  </span>
                  <UserButton afterSignOutUrl="/" />
                </div>
              </SignedIn>
            </ClerkLoaded>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-white hover:bg-blue-800 transition"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-900 shadow-md">
          <nav className="flex flex-col px-6 py-4 gap-4 text-white">
            {["Features", "Testimonials", "FAQ"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            <SignedOut>
              <SignInButton mode="modal">
                <button className="px-4 py-2 rounded-lg text-white border border-white/40 hover:bg-white hover:text-blue-900 transition">
                  Login
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="px-4 py-2 rounded-lg bg-white text-blue-900 font-semibold hover:bg-gray-200 transition">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <div className="border-t pt-4 flex flex-col gap-3">
                <span className="text-sm text-gray-200">
                  {user?.primaryEmailAddress?.emailAddress}
                </span>
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Headers;
