import { useState } from 'react';

const products = [
  { id: 1, title: 'T-Shirt', price: 20, img: '/tshirt.jpg' },
  { id: 2, title: 'Dress', price: 30, img: '/dress.jpg' },
  { id: 3, title: 'Jeans', price: 40, img: '/jeans.jpg' },
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="flex overflow-x-scroll">
      {products.map((product, index) => (
        <div key={product.id} className={`min-w-[300px] mx-2 ${index === currentIndex ? '' : 'hidden'}`}>
          <img src={product.img} alt={product.title} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </div>
      ))}
      <button onClick={() => setCurrentIndex((currentIndex + 1) % products.length)}>Next</button>
    </div>
  );
};

export default ProductCarousel;
