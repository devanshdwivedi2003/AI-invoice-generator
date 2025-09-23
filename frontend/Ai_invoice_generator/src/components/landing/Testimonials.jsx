import React from "react";
import Slider from "react-slick";
import { TESTIMONIALS } from "../../utils/data";
import { Quote } from "lucide-react";



const Testimonials = () => {
  // Marquee-style slider settings
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 6000, // slow, smooth scroll
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // no delay
    cssEase: "linear", // continuous motion
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say 🌟
          </h1>
          <p className="text-lg text-gray-600 ">
            We are trusted by thousands of small businesses and entrepreneurs
            worldwide.
          </p>
        </div>

        {/* Marquee Carousel */}
        <Slider {...settings}>
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="bg-white p-8 rounded-xl shadow-md flex flex-col h-full">
                {/* Quote icon */}
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 text-blue-900 rounded-full mb-6">
                  <Quote className="w-6 h-6" />
                </div>

                {/* Quote text */}
                <p className="text-gray-700 italic leading-relaxed flex-grow mb-6">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
