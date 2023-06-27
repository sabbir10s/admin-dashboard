import React from 'react';

import TestimonialOne from '../../components/ui/Testimonial/TestimonialOne';
const testimonials = [
  {
    _id: 1,
    title: 'Absolutely recommended!',
    rating: 5,
    name: 'John Doe',
    image:
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg',
    occupation: 'CEO',
    company: 'ABC Corporation',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper nulla id risus consectetur tempus. Nullam eu urna eget nibh fringilla egestas.',
  },
  {
    _id: 2,
    title: 'Absolutely recommended!',
    rating: 4,
    image: 'https://mdbcdn.b-cdn.net/img/new/avatars/8.jpg',
    name: 'Jane Smith',
    occupation: 'Marketing Manager',
    company: 'XYZ Inc.',
    testimonial:
      'Praesent a magna ac nunc venenatis ultrices. Vestibulum sit amet convallis velit, in vulputate justo. Ut dignissim velit at libero pharetra bibendum.',
  },
  {
    _id: 3,
    title: 'Absolutely recommended!',
    rating: 5,
    name: 'Michael Johnson',
    image:
      'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=594&q=80',
    occupation: 'Freelancer',
    company: 'XYZ',
    testimonial:
      'Praesent a magna ac nunc venenatis ultrices. Vestibulum sit amet convallis velit, in vulputate justo. Ut dignissim velit at libero pharetra bibendum.',
  },
];
const Testimonials = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold pb-10 dark:text-gray-200">
        Testimonial
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {testimonials.map((testimonialInfo) => (
          <TestimonialOne
            key={testimonialInfo._id}
            testimonialInfo={testimonialInfo}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
