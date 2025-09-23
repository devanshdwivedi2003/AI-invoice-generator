import hero_img from "../../assets/hero_img.png";
import {
  SignedIn,
  SignedOut,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

const Hero = () => {
  const words = [
    { text: "AI-Powered  ", className: "text-black dark:text-black" },
    { text: "Invoicing ", className: "text-black dark:text-black" },
    { text: "for ", className: "text-black dark:text-black" },
    { text: "Your ", className: "text-black dark:text-black" },
    { text: "Business.", className: "text-blue-900 dark:text-blue-900" },
  ];

  return (
    <section className="bg-gray-50 text-gray-900 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 py-20 lg:py-35 text-center">
        {/* Typewriter Title */}
        <div className="flex flex-col items-center justify-center h-[15rem]">
          <TypewriterEffectSmooth words={words} />

          <p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto 
          opacity-0 animate-[fadeInUp_1s_ease-out_forwards]"
            style={{ animationDelay: "0.2s" }}
          >
            Generate invoices in seconds, automate workflows, and stay on top of
            your finances with AI-powered precision.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className="mt-3 flex flex-col sm:flex-row gap-4 justify-center 
          opacity-0 animate-[fadeInUp_1s_ease-out_forwards]"
          style={{ animationDelay: "0.4s" }}
        >
          <SignedOut>
            <SignUpButton mode="modal">
              <button className="group relative inline-flex items-center justify-start overflow-hidden rounded-full border-blue-900 px-5 py-3 font-bold">
                <span className="absolute left-0 top-0 h-32 w-32 -translate-y-2 translate-x-12 rotate-45 bg-blue-900 opacity-[3%]" />
                <span className="absolute left-0 top-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-blue-900 opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8" />
                <span className="relative w-full text-left text-blue-900 transition-colors duration-200 ease-in-out group-hover:text-white">
                  Get started for free
                </span>
                <span className="absolute inset-0 rounded-full border-2 border-blue-900" />
              </button>
            </SignUpButton>

            <a
              href="#features"
              className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 
              hover:bg-gray-100 hover:-translate-y-0.5 
              transition-transform duration-300 ease-out"
            >
              Learn More
            </a>
          </SignedOut>

          <SignedIn>
            <a
              href="/dashboard"
              className="px-6 py-3 rounded-lg bg-blue-900 text-white font-semibold hover:bg-blue-700 transition"
            >
              Go to Dashboard
            </a>
          </SignedIn>
        </div>

        {/* Hero Image */}
        <div
          className="mt-12 relative opacity-0 animate-[fadeInUp_1s_ease-out_forwards]"
          style={{ animationDelay: "0.7s" }}
        >
          <img
            src={hero_img}
            alt="Invoice app screenshot"
            className="w-full max-w-4xl mx-auto drop-shadow-2xl rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
