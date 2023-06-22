import React from 'react';

import BlogCardOne from '../../components/ui/BlogCard/BlogCardOne';
import BlogCardTwo from '../../components/ui/BlogCard/BlogCardTwo';

const blog = {
  _id: 1,
  writer: 'Healthy Cashew Nuts',
  writer_img: 'https://i.ibb.co/TMgKY4C/writer-img.png',
  date: 'October 29, 2021',
  blog_title: 'How to get around in New York',
  category: 'Cities',
  image:
    'https://images.unsplash.com/photo-1660548311281-61e57dad92e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
  article:
    'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream  A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.I am alone, and feel the charm of existence in this spot',
};
const BlogCard = () => {
  return (
    <div className="md:flex gap-10">
      <div className="w-[350px]">
        <BlogCardOne blog={blog} />
      </div>
      <div className="w-[350px]">
        <BlogCardTwo blog={blog} />
      </div>
    </div>
  );
};

export default BlogCard;
