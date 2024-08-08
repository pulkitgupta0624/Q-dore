import React, { useEffect, useState } from "react";
// Import the icon from react-icons
import { FaTag, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import image1 from "../../assets/CandleHolders/ch11.png";
import image2 from "../../assets/CandleHolders/ch22.png";
import image3 from "../../assets/CandleHolders/ch33.png";
import image4 from "../../assets/CandleHolders/ch4.jpg";
import image5 from "../../assets/CandleHolders/ch55.png";
import image6 from "../../assets/CandleHolders/ch66.png";
import image7 from "../../assets/CandleHolders/ch77.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "../ProductPage.css";

const Product = ({ product, index }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/decor/candleDecor/${product.id}`);
  };

  return (
    <div
      className={`product-container bg-white rounded-lg shadow-lg overflow-hidden mb-6 flex flex-col md:flex-row ${
        index % 2 === 0 ? "" : "md:flex-row-reverse"
      }`}
    >
      <div className="product-image flex-shrink-0 w-full md:w-1/3">
        <img
          src={product.image}
          alt={product.heading}
          className="w-full h-auto object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="product-details flex flex-col justify-center md:w-2/3 md:pl-4">
        <div className="product-heading text-gray-800 text-center py-2 text-xl font-semibold">
          {product.heading}
        </div>
        <div className="product-price text-gray-900 text-xl font-bold mb-4 flex items-center justify-center">
          <FaTag className="mr-2 text-gray-500" />${product.price}
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleNavigation}
            className="product-button flex items-center text-blue-600 hover:text-blue-800"
          >
            <span className="mr-2">See Product</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

const CandleHolderProduct = () => {
  const products = [
    {
      id: "classical-starburst-lanterns",
      heading: "THE CLASSICAL STARBURST LANTERNS",
      image: image1,
      price: "99.99",
    },
    {
      id: "starburst-lanterns",
      heading: "STARBURST LANTERNS",
      image: image2,
      price: "89.99",
    },
    {
      id: "solar-candle-holders",
      heading: "SOLAR CANDLE HOLDERS",
      image: image3,
      price: "79.99",
    },
    {
      id: "solar-candle-hurricanes",
      heading: "SOLAR CANDLE HURRICANES",
      image: image4,
      price: "119.99",
    },
    {
      id: "acacia-wood-candle-holders",
      heading: "ACACIA WOOD CANDLE HOLDERS",
      image: image5,
      price: "69.99",
    },
    {
      id: "eris-marble-candle-holders",
      heading: "ERIS MARBLE CANDLE HOLDERS",
      image: image6,
      price: "69.99",
    },
    {
      id: "psyche-candle-holders",
      heading: "PSYCHE CANDLE HOLDERS",
      image: image7,
      price: "69.99",
    },
  ];

  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <div className="container mx-auto px-4 mt-10">
        <div className="space-y-8">
          {products.map((product, index) => (
            <Product key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CandleHolderProduct;
