import React from 'react';

import ProductCardOne from '../../components/ui/Card/ProductCard/ProductCardOne';
import ProductCardThree from '../../components/ui/Card/ProductCard/ProductCardThree';
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
  image:
    'https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b',
  imageTwo:
    'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
};
const ProductCard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-10 ">
        <div>
          <ProductCardOne productInfo={productInfo} />
        </div>
        <div>
          <ProductCardTwo productInfo={productInfo} />
        </div>
        <div>
          <ProductCardThree productInfo={productInfo} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
