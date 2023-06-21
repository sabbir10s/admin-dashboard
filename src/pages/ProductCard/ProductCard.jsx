import React from 'react';

import ProductCardOne from '../../components/ui/Card/ProductCard/ProductCardOne';
import ProductCardTwo from '../../components/ui/Card/ProductCard/ProductCardTwo';
const productInfo = {
  _id: 1,
  name: 'Healthy Cashew Nuts',
  product_code: '12314',
  price: 100,
  del_price: 20,
  rating: 5,
  review: 100,
  discount: 20,
  stock: false,
  image: 'https://i.ibb.co/5FcjfPQ/product.png',
};
const ProductCard = () => {
  return (
    <div>
      <div className="lg:flex gap-10 space-y-4 lg:space-y-0">
        <div className="w-[350px]">
          <ProductCardOne productInfo={productInfo} />
        </div>
        <div className="w-[350px]">
          <ProductCardTwo productInfo={productInfo} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
