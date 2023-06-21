import React from 'react';

import FaqCard from './FaqCard';

const faqData = [
  {
    _id: 1,
    question: 'How to contact with Customer Service?',
    answer:
      'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.',
  },
  {
    _id: 2,
    question: 'App installation failed, how to update system information?',
    answer:
      'Please read the documentation carefully . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum',
  },
  {
    _id: 3,
    question: 'Website response taking time, how to improve?',
    answer:
      'At first, Please check your internet connection . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum.',
  },
  {
    _id: 4,
    question: 'How do I create a account?',
    answer:
      'If you want to open an account for personal use you can do it over the phone or online. Opening an account online should only take a few minutes.',
  },
];
const FaqComponent = () => {
  return (
    <div className="relative mx-auto w-full py-16 px-5 dark:bg-gray-800 font-sans text-gray-800 dark:text-gray-400 sm:px-20 md:max-w-screen-lg lg:py-24">
      <h2 className="mb-5 text-center font-sans text-4xl sm:text-5xl font-bold">
        Frequently asked Questions
      </h2>
      <p className="mb-12 text-center text-lg text-gray-600 dark:text-gray-400">
        We have written down answers to some of the frequently asked questions.
        But, if you still have any queries, feel free to ping us on chat.
      </p>
      <ul className="space-y-4">
        {faqData.map((faq) => (
          <FaqCard key={faq._id} faq={faq} />
        ))}
      </ul>
    </div>
  );
};

export default FaqComponent;
