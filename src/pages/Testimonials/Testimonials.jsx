import React from 'react';

import TestimonialOne from '../../components/ui/Testimonial/TestimonialOne';
const testimonials = [
  {
    _id: 1,
    title: 'Absolutely recommended!',
    name: 'John Doe',
    occupation: 'CEO',
    company: 'ABC Corporation',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper nulla id risus consectetur tempus. Nullam eu urna eget nibh fringilla egestas.',
  },
  {
    _id: 2,
    title: 'Absolutely recommended!',
    name: 'Jane Smith',
    occupation: 'Marketing Manager',
    company: 'XYZ Inc.',
    testimonial:
      'Praesent a magna ac nunc venenatis ultrices. Vestibulum sit amet convallis velit, in vulputate justo. Ut dignissim velit at libero pharetra bibendum.',
  },
  {
    _id: 3,
    title: 'Absolutely recommended!',
    name: 'Michael Johnson',
    occupation: 'Freelancer',
    company: 'XYZ',
    testimonial:
      'Praesent a magna ac nunc venenatis ultrices. Vestibulum sit amet convallis velit, in vulputate justo. Ut dignissim velit at libero pharetra bibendum.',
  },
];
const Testimonials = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
      {testimonials.map((testimonialInfo) => (
        <TestimonialOne
          key={testimonialInfo._id}
          testimonialInfo={testimonialInfo}
        />
      ))}
    </div>
  );
};

export default Testimonials;
