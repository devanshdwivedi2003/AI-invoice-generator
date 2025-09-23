import React from "react";
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, FileText } from "lucide-react";

const FooterLink = ({ href, to, children }) => {
  if (to) {
    return (
      <Link
        to={to}
        className="text-gray-400 hover:text-blue-900 transition-colors duration-300"
      >
        {children}
      </Link>
    );
  } else {
    return (
      <a
        href={href}
        className="text-gray-400 hover:text-blue-900 transition-colors duration-300"
      >
        {children}
      </a>
    );
  }
};

const SocialLink = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-blue-900 transition transform hover:scale-110 duration-300"
    >
      {children}
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-gray-300 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-20 space-y-12">
        {/* Top Row: Branding */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <Link to="/" className="flex items-center space-x-2">
            <FileText className="w-8 h-8 text-blue-900" />
            <span className="text-xl font-bold text-white">AI Invoice App</span>
          </Link>
          <p className="text-gray-400 md:text-right font-bold">
            The simplest way to create professional invoices.
          </p>
        </div>

        {/* Middle Row: Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <FooterLink to="#features">Features</FooterLink>
              </li>
              <li>
                <FooterLink to="#testimonials">Testimonials</FooterLink>
              </li>
              <li>
                <FooterLink to="#faq">FAQs</FooterLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <FooterLink to="/about">About</FooterLink>
              </li>
              <li>
                <FooterLink to="/contact">Contact</FooterLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <FooterLink to="/privacy">Privacy Policy</FooterLink>
              </li>
              <li>
                <FooterLink to="/terms">Terms of Service</FooterLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row: Social + Copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="flex space-x-4 justify-center sm:justify-start">
            <SocialLink href="#">
              <Twitter className="w-5 h-5" />
            </SocialLink>
            <SocialLink href="#">
              <Github className="w-5 h-5" />
            </SocialLink>
            <SocialLink href="#">
              <Linkedin className="w-5 h-5" />
            </SocialLink>
          </div>
          <p className="text-gray-500 text-sm text-center sm:text-right">
            &copy; 2025 AI Invoice App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
