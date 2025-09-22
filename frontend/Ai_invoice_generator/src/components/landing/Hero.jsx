import hero_img from "../../assets/hero_img.png";
import {
  SignedIn,
  SignedOut,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";

const Hero = () => {
  return (
    <section className="bg-white text-gray-900 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 py-20 lg:py-28 text-center">
        {/* Top Content */}
        <h1
          className="text-2xl md:text-5xl lg:text-7xl font-extrabold leading-tight
    opacity-0 animate-[fadeInUp_1s_ease-out_forwards]"
          style={{ animationDelay: "0.1s" }}
        >
          Smarter Invoicing with <br className="hidden md:block" />
          <span className="text-blue-900">AI Automation</span>
        </h1>

        <p
          className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto 
    opacity-0 animate-[fadeInUp_1s_ease-out_forwards]"
          style={{ animationDelay: "0.2s" }}
        >
          Generate invoices in seconds, automate workflows, and stay on top of
          your finances with AI-powered precision.
        </p>

        {/* CTA Buttons */}
        <div
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center 
    opacity-0 animate-[fadeInUp_1s_ease-out_forwards]"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <SignedOut>
              <SignUpButton mode="modal">
                <button className="group relative inline-flex items-center justify-start overflow-hidden rounded-full border-blue-900 px-5 py-3 font-bold">
                  <span class="absolute left-0 top-0 h-32 w-32 -translate-y-2 translate-x-12 rotate-45 bg-blue-900 opacity-[3%]"></span>
                  <span class="absolute left-0 top-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-blue-900 opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8"></span>
                  <span class="relative w-full text-left text-blue-900 transition-colors duration-200 ease-in-out group-hover:text-white">
                    Get started for free
                  </span>
                  <span class="absolute inset-0 rounded-full border-2 border-blue-900"></span>
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
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
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
