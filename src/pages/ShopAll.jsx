import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer.jsx';
import furnitureImg from '../assets/bg3.jpg';
import decorImg from '../assets/bg3.jpg';
import servewaresImg from '../assets/bg3.jpg';
import plantersImg from '../assets/bg3.jpg';
import woodenImg from '../assets/bg3.jpg';
import mercuryImg from '../assets/bg3.jpg';
import { FaArrowRight } from 'react-icons/fa';

const categories = [
  { name: 'Furniture', img: furnitureImg, path: '/furniture' },
  { name: 'Decor', img: decorImg, path: '/decor' },
  { name: 'Servewares', img: servewaresImg, path: '/servewares' },
  { name: 'Planters and Vases', img: plantersImg, path: '/planters&vases' },
  { name: 'Wooden Collection', img: woodenImg, path: '/woodenCollection' },
  { name: 'Mercury Collection', img: mercuryImg, path: '/mercuryCollection' },
];

const ShopAll = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 p-6">
        <h1 className="text-4xl font-bold mb-8 text-center animate-fade-in">Shop All</h1>
        {categories.map((category, index) => (
          <div
            key={category.name}
            className={`flex flex-col md:flex-row items-center justify-between my-6 p-4 bg-gray-200 rounded-lg shadow-lg transition duration-300 ease-in-out ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
            data-aos="fade-up"
          >
            <div className="w-full md:w-2/3 h-80 overflow-hidden rounded-lg">
              <img
                src={category.img}
                alt={category.name}
                className="w-full h-full object-cover transition duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
            <div className="flex flex-col items-center justify-center md:items-start md:ml-6 w-full md:w-1/3 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-4 md:mt-0">{category.name}</h2>
              <button
                className="flex items-center bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => handleNavigate(category.path)}
              >
                See Our Collections <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-in-out;
        }

        @keyframes zoom {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        .hover:scale-105 {
          transition: transform 0.3s ease-in-out;
        }

        @keyframes colorChange {
          0% {
            color: #000;
          }
          50% {
            color: #1e40af;
          }
          100% {
            color: #000;
          }
        }

        .animate-color-change {
          animation: colorChange 5s infinite ease-in-out;
        }

        @media (max-width: 768px) {
          .flex-col {
            flex-direction: column;
          }
          img {
            opacity: 0.8;
          }
          h2 {
            margin-top: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default ShopAll;