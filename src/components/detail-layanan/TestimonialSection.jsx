// src/components/detail-layanan/TestimonialSection.jsx
import React from 'react';
import { StarIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const TestimonialCard = ({ name, quote, rating, avatar }) => (
  <div className="bg-white dark:bg-dark-bg-secondary p-8 rounded-xl shadow-lg h-full flex flex-col justify-between mx-2">
    <div className="mb-6">
      <p className="text-lg italic mb-4 text-light-text-secondary dark:text-dark-text-secondary">"{quote}"</p>
      <div className="flex items-center justify-center sm:justify-start mb-4">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className={`h-6 w-6 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} />
        ))}
      </div>
    </div>
    <div className="flex items-center gap-4 border-t pt-4 border-light-text/10 dark:border-dark-text/10">
      <img src={avatar} alt={name} className="w-14 h-14 rounded-full object-cover shadow-md flex-shrink-0" />
      <div>
        <h4 className="font-bold text-lg text-light-text dark:text-dark-text">{name}</h4>
      </div>
    </div>
  </div>
);

const TestimonialSection = ({ testimonials }) => {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  if (!testimonials || testimonials.length === 0) {
    return null; // Jangan render section jika tidak ada testimoni
  }

  return (
    <div className="py-12 bg-light-bg dark:bg-dark-bg-secondary rounded-xl shadow-inner">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 text-primary">Apa Kata Mereka?</h2>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="px-2"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialSection;