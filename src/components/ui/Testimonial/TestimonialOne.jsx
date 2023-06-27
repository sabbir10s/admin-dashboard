import React from 'react';

import StarRating from '../../common/StarRating/StarRating';

const TestimonialOne = ({ testimonialInfo }) => {
  const { image, name, testimonial, occupation, rating } = testimonialInfo;
  return (
    <div>
      <div className="mb-6 lg:mb-0">
        <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-gray-800">
          <div className="relative overflow-hidden bg-cover bg-no-repeat h-52">
            <img
              src={image}
              className="w-full rounded-t-lg h-full object-cover"
              alt=""
            />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
            </a>
            <svg
              className="absolute left-0 bottom-0 text-white dark:text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="currentColor"
                d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className="p-6 ">
            <h5 className="mb-2 text-lg font-bold dark:text-white">{name}</h5>
            <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
              {occupation}
            </h6>
            <ul className="mb-6 flex justify-center">
              <StarRating rating={rating} starSize={5} />
            </ul>
            <p className="text-gray-600 dark:text-gray-400">
              {testimonial.slice(0, 100)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialOne;
