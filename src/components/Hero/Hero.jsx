import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import BackgroundImage from "../../assets/bg3.jpg"; // Import your background image here

const Hero = ({ handleOrderPopup }) => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToProducts = () => {
    navigate("/shop");
  };

  return (
    <div
      className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] flex justify-center items-center text-white duration-200"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Hero section */}
      <div className="absolute top-[10%] w-full flex justify-center items-center px-4">
        <div className="max-w-[90%] text-center">
          <h1
            data-aos="zoom-out"
            data-aos-duration="500"
            data-aos-once="true"
            className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6"
          >
            Transform Your Space, Elevate Your Life
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
            className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6"
          >
            Discover curated home decor that reflects your unique style and
            transforms your living space into a sanctuary of comfort and
            elegance with QDORE HOME.
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
          >
            <button
              onClick={navigateToProducts}
              className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white py-2 px-4 rounded-full animate-button"
            >
              Explore our collections
            </button>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white py-2 px-4 rounded-full shadow-lg flex items-center justify-center"
      >
        <FaArrowUp size={20} />
      </button>

      {/* Animation CSS */}
      <style jsx="true">{`
        @keyframes buttonAnimation {
          0% {
            transform: scale(1);
            background-color: #fbbf24; /* Light yellow */
          }
          50% {
            transform: scale(1.1);
            background-color: #f59e0b; /* Darker yellow */
          }
          100% {
            transform: scale(1);
            background-color: #fbbf24; /* Light yellow */
          }
        }

        .animate-button {
          animation: buttonAnimation 3s infinite;
          border: none;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          transition: background-color 0.3s ease;
        }

        .animate-button:hover {
          background: linear-gradient(to right, #fbbf24, #f59e0b);
        }

        @media (max-width: 440px) {
          h1 {
            font-size: 1.75rem;
          }

          p {
            font-size: 0.875rem;
          }
        }

        @media (max-width: 400px) {
          h1 {
            font-size: 1.8rem;
          }

          p {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
