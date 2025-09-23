import React from "react";
import { FEATURES } from "../../utils/data";
import { ArrowBigRight } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features To Run Your Business ⚙️
          </h1>
          <p className="text-lg text-gray-600 ">
            Everything you need to run your business with AI-powered automation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 text-blue-900 rounded-full mb-6">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <a
                href="#"
                className="inline-flex items-center text-blue-900 font-medium hover:underline"
              >
                Learn More <ArrowBigRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
