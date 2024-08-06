import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx'; // Adjust the path as necessary
import Footer from '../../components/Footer/Footer.jsx'; // Adjust the path as necessary
import AOS from 'aos';
import 'aos/dist/aos.css';
import image1 from '../../assets/sideTables/side2.jpg';
import image2 from '../../assets/sideTables/side5.jpg';
import image3 from '../../assets/sideTables/side1.jpg';
import image4 from '../../assets/sideTables/side3.jpg';
import image5 from '../../assets/sideTables/side4.jpg';

// Product images
const productImages = {
  'virgo-side-table': [image1, image2, image3],
  'orbit-side-table': [image2, image3, image4],
  'pluto-side-table': [image1, image2, image3],
  'vega-side-table': [image2, image3, image4],
  'acacia-wood-side-table': [image1, image2, image3],
};

const products = [
  {
    id: 'virgo-side-table',
    name: 'VIRGO SIDE TABLE',
    description: [
      'White Marble Accent Table with textured black metal base',
      'Luxurious design enhances home aesthetics',
      'Dimensions: 14" diameter, 22" height',
      'Elegant and functional',
      'Rust proof and outdoor friendly',
      'Ideal for gardens and open terraces'
    ],
    price: 99.99, // Changed to number
  },
  {
    id: 'orbit-side-table',
    name: 'ORBIT SIDE TABLE',
    description: [
      'Enhances both garden spaces and living rooms',
      'Ideal for outdoor settings and elegant beside the sofa',
      'Crafted from durable mild steel with cement-like textured finish',
      'Features a sustainable jute rope handle',
      'Stylish and built to last'
    ],
    price: 89.99, // Changed to number
  },
  {
    id: 'pluto-side-table',
    name: 'PLUTO SIDE TABLE',
    description: [
      'Made from durable iron with rust-free, copper-tinted coating',
      'Suitable for both indoor and outdoor settings',
      'Minimalist design for maximum functionality',
      'Perfect for flower pots, planters, and decorative items',
      'The Pluto Side Table is built to last with a timeless design',
      'Adds sophistication to any space'
    ],
    price: 79.99, // Changed to number
  },
  {
    id: 'vega-side-table',
    name: 'VEGA SIDE TABLE',
    description: [
      'Luxurious marble top with a natural solid wood base',
      'Blend of sustainable materials and Indian craftsmanship',
      'The Vega Side Table features strong structure and high-end aesthetics',
      'Ideal statement piece for the living room',
      'Elevates decor and adds elegance',
      'Combines style and durability',
      'Celebrates the artistry and sophistication of Indian design'
    ],
    price: 119.99, // Changed to number
  },
  {
    id: 'acacia-wood-side-table',
    name: 'ACACIA WOOD SIDE TABLE',
    description: [
      'Perfect for a showpiece, holding a coffee mug, or stacking books',
      'Crafted from sustainably sourced, eco-friendly wood',
      'Handmade with a stunning natural finish and beautiful wood grains',
      'Showcases Indian craftsmanship',
      'Adds elegance and sustainability to your space'
    ],
    price: 69.99, // Changed to number
  }
  // Add other products similarly
];

const SideTableProducts = () => {
  const [activeProduct, setActiveProduct] = useState(products[0]);
  const [activeImg, setActiveImage] = useState(productImages[activeProduct.id][0]);
  const [amount, setAmount] = useState(1); // Initialize amount state

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />

      <div className='flex flex-col lg:flex-row gap-4 lg:gap-16 p-4 lg:p-6'>
        {/* Product Details */}
        <div className='flex flex-col lg:flex-row gap-4 lg:gap-16'>
          {/* Main Product Image */}
          <div className='flex flex-col gap-4 lg:w-1/2'>
            <img src={activeImg} alt={activeProduct.name} className='w-full h-auto aspect-square object-cover rounded-xl' />
            <div className='flex flex-row gap-2 lg:gap-4 overflow-x-auto'>
              {productImages[activeProduct.id].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className='w-20 h-20 lg:w-24 lg:h-24 rounded-md cursor-pointer'
                  onClick={() => setActiveImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className='flex flex-col lg:w-1/2'>
            <div>
              <span className='text-violet-600 font-semibold'>Special Side Table</span>
              <h1 className='text-2xl lg:text-3xl font-bold'>{activeProduct.name}</h1>
            </div>
            <ul className='text-gray-700 text-sm lg:text-base list-disc list-inside'>
              {activeProduct.description.map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
            <h6 className='text-xl lg:text-2xl font-semibold'>${activeProduct.price.toFixed(2)}</h6>
            <div className='flex flex-col lg:flex-row items-center gap-4 lg:gap-12'>
              <div className='flex flex-row items-center'>
                <button
                  className='bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-lg lg:text-3xl'
                  onClick={() => setAmount(prev => Math.max(1, prev - 1))}
                >
                  -
                </button>
                <span className='py-2 px-4 rounded-lg text-lg lg:text-xl'>{amount}</span>
                <button
                  className='bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-lg lg:text-3xl'
                  onClick={() => setAmount(prev => prev + 1)}
                >
                  +
                </button>
              </div>
              <button className='bg-violet-800 text-white font-semibold py-2 px-4 lg:py-3 lg:px-8 rounded-xl h-full text-sm lg:text-base'>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SideTableProducts;
