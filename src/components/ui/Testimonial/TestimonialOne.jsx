import React from 'react';

const TestimonialOne = ({ testimonialInfo }) => {
  const { title, name, occupation, company, testimonial } = testimonialInfo;
  return (
    <div>
      <div>
        <div className="flex flex-col rounded-xl  text-center shadow-md border-t-4 border-primary-300 shadow-gray-200 dark:shadow-gray-200/50 dark:bg-gray-900">
          <div className="flex flex-1 flex-col justify-between p-6 lg:py-7 lg:px-5">
            <div className="flex-1">
              <p className="border-primary-500 px-10 text-xl dark:text-gray-300 font-black">
                {title}
              </p>

              <blockquote className="mt-8 flex-1">
                <p className="leading-relaxed text-primary-600">
                  {testimonial}
                </p>
              </blockquote>
            </div>

            <div className="-mx-5 mt-8 px-8 py-1">
              <div className="dark text-gray-500">
                <p className="text-base font-bold">{name}</p>
                <p className="mt-0.5 text-sm">
                  {occupation}, {company}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialOne;
