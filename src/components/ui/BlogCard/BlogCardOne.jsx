import React from 'react';

const BlogCardOne = ({ blog }) => {
  const { date, blog_title, image, category } = blog;
  return (
    <div className="border-[1px] border-[#E9E9E9] rounded-[12px] cursor-pointer hover:shadow-custom bg-white dark:bg-gray-900 hover:bg-gray-50 transition ease-in-out duration-300 group">
      <div className="w-full h-[250px]">
        <img
          loading="lazy"
          className="rounded-t-[12px] w-full h-full object-cover object-center"
          src={image}
          alt=""
        />
      </div>
      <div className="p-[21px]">
        <h1 className="font-bold text-[16px] md:text-[20px] lg:text-[24px] text-left group-hover:underline dark:text-gray-400 group-hover:text-primary-700 duration-300 transition ease-in">
          {blog_title}
        </h1>
        <div className="my-[12px] h-[1px] bg-gray-200 dark:bg-gray-500"></div>
        <div className="flex items-center justify-between text-[12px]">
          <button className="text-primary-600 font-semibold uppercase ">
            {category}
          </button>
          <p className="text-[#6F757D]">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCardOne;
