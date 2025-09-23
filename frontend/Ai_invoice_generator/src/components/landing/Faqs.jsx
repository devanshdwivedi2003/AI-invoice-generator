import React, { useState } from "react";
import { FAQS } from "../../utils/data";
import { ChevronDown } from "lucide-react";

const FaqItem = ({ faq, open, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left focus:outline-none"
      >
        <span className="text-lg font-medium text-gray-900">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-6 h-6 text-gray-500 transform transition-transform duration-300 ${
            open ? "rotate-180 text-indigo-600" : ""
          }`}
        />
      </button>

      {/* Animated answer */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="pb-5 text-gray-600">{faq.answer}</p>
      </div>
    </div>
  );
};

const Faqs = () => {
  const [open, setOpen] = useState(null);

  const handleClick = (index) => setOpen(open === index ? null : index);

  return (
    <section id="faqs" className="py-30 bg-gray-50 ">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions 💬
          </h2>
          <p className="text-lg text-gray-600 ">
            Everything you need to know about our product.
          </p>
        </div>

        {/* FAQ List */}
        <div className="divide-y divide-gray-200">
          {FAQS.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              open={open === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
