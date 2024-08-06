import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowUp, FaAward, FaDollarSign, FaThLarge, FaTruck, FaInfoCircle, FaLightbulb, FaBullseye, FaHandHoldingHeart, FaStar, FaHome } from "react-icons/fa";
import FounderImage from '../assets/founderMain.jpg'; // Add your founder's image path
import Footer from '../components/Footer/Footer';
import Popup from '../components/Popup/Popup';

const OurStory = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const handleMouseEnter = (e) => {
    e.currentTarget.classList.remove('animated-icon');
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.classList.add('animated-icon');
  };

  return (
    <div>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <div className="container mx-auto mt-14 mb-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-6 animated-heading">Who Are We?</h1>
        </div>
        <div className="flex flex-col items-center mb-12 bg-slate-200 p-6 rounded-lg">
          <FaInfoCircle className="text-gray-800 text-5xl mb-4 animate-bounce" />
          <p className="text-center text-gray-600 text-lg max-w-2xl">
            <strong>Qdore Home</strong> is a premier destination for exquisite home decor & accent furniture, offering a wide range of high-quality pieces to elevate the style and comfort of your living spaces. 
            Our parent company, <strong>Quality Exports</strong>, has been supplying notable home decor articles to various renowned international retailers since 2005, across the globe. Building on this legacy of excellence, <strong>Qdore Home</strong> has now launched an online retail platform to bring the best in home decor to Indian households at fair prices.
          </p>
        </div>
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-6 animated-heading">Why Choose Qdore Home?</h1>
        </div>
        <div className="flex flex-wrap justify-center">
          <div 
            className="bg-white m-5 mb-8 p-6 rounded-lg shadow-lg w-80 hover:shadow-xl transform hover:-translate-y-2 transition-all animated-icon" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaAward className="text-navy text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Legacy of Quality</h3>
            <p className="text-gray-600">
              Backed by Quality Exports' 15+ years of experience in supplying top-notch home decor internationally.
            </p>
          </div>
          <div 
            className="bg-white m-5 mb-8 p-6 rounded-lg shadow-lg w-80 hover:shadow-xl transform hover:-translate-y-2 transition-all animated-icon" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaDollarSign className="text-navy text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Fair Pricing</h3>
            <p className="text-gray-600">
              Committed to offering lush home decor at prices that are fair and accessible.
            </p>
          </div>
          <div 
            className="bg-white m-5 mb-8 p-6 rounded-lg shadow-lg w-80 hover:shadow-xl transform hover:-translate-y-2 transition-all animated-icon" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaThLarge className="text-navy text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
            <p className="text-gray-600">
              A diverse range of home decor & accent furniture to suit every style and preference.
            </p>
          </div>
          <div 
            className="bg-white m-5 mb-8 p-6 rounded-lg shadow-lg w-80 hover:shadow-xl transform hover:-translate-y-2 transition-all animated-icon" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaTruck className="text-navy text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Convenience</h3>
            <p className="text-gray-600">
              An easy-to-navigate online platform that brings beautiful decor directly from the factory to your doorstep, with no middleman involvement.
            </p>
          </div>
        </div>
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-6 mt-6 animated-heading">Message from the Founder</h1>
        </div>
        <div className="relative bg-grey p-8 rounded-lg mb-12 h-full">
          <div className="relative flex flex-col md:flex-row items-center md:items-center h-full">
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <img 
                src={FounderImage} 
                alt="Founder" 
                className="rounded-3xl shadow-2xl w-full h-auto max-w-md mx-auto mb-4 md:mb-0 transform hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="text-gray-500 md:w-1/2 md:pl-8 flex flex-col justify-center h-full">
              <h2 className="text-gray-700 text-5xl font-semibold mb-12">Rmneek Sikka</h2>
              <p className="text-lg">
                Welcome to <strong className='text-gray-500'>Qdore Home</strong>! We are passionate about creating beautiful, functional, and affordable home decor furniture with design as the driving factor of <strong>Qdore Home</strong>. With years of experience through <strong>Quality Exports</strong>, we understand the intricacies of design and quality. Our mission is to make exquisite home decor accessible to everyone in India, ensuring that your home reflects your unique taste and personality. 
              </p>
              <br />
              <p className="text-lg">
              <strong className='text-gray-500'>Thank you </strong>for joining us on this journey to transform homes across the country.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-6 animated-heading">Our Vision and Mission</h1>
        </div>
        <div className="flex flex-wrap justify-center">
          <div 
            className="bg-white m-5 mb-8 p-6 rounded-lg shadow-lg w-80 hover:shadow-xl transform hover:-translate-y-2 transition-all animated-icon" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaLightbulb className="text-navy text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Vision</h3>
            <p className="text-gray-600">
              To be the leading provider of high-quality home decor furniture in India, known for our exceptional designs, fair prices, and customer-centric approach.
            </p>
          </div>
          <div 
            className="bg-white m-5 mb-8 p-6 rounded-lg shadow-lg w-80 hover:shadow-xl transform hover:-translate-y-2 transition-all animated-icon" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaBullseye className="text-navy text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Mission</h3>
            <p className="text-gray-600">
              To make stylish, high-quality home decor accessible to every Indian household. We strive to continuously innovate and curate a wide selection of furniture that enhances the beauty and functionality of homes, ensuring that each piece reflects the unique tastes of our customers.
            </p>
          </div>
        </div>
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-6 animated-heading">Proudly Made in India</h1>
        </div>
        <div className="flex flex-col items-center mb-12 bg-slate-200 p-6 rounded-lg">
          <FaHome className="text-navy text-5xl mb-4 animate-bounce" />
          <p className="text-center text-gray-600 text-lg max-w-2xl">
            At Qdore Home, we are committed to the "Made in India" initiative, celebrating the rich heritage and craftsmanship of our country. Our products are crafted with the utmost care, using materials sourced locally, ensuring that each product not only enhances your home but also supports the Indian economy. By choosing Qdore Home, you are contributing to the growth and sustainability of local industries, reinforcing our nation's self-reliance and pride.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          <div 
            className="bg-white m-5 mb-8 p-6 rounded-lg shadow-lg w-80 hover:shadow-xl transform hover:-translate-y-2 transition-all animated-icon" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaHandHoldingHeart className="text-navy text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Empowering Local Artisans</h3>
            <p className="text-gray-600">
              Qdore Home is dedicated to supporting local artisans, recognizing the immense talent and skill they bring to the table. Our collaboration with artisans from various regions of India ensures that their unique, traditional techniques are preserved and showcased. By offering fair wages and sustainable work opportunities, we empower these craftsmen and women, enabling them to continue their invaluable work and pass down their expertise to future generations.
            </p>
          </div>
          <div 
            className="bg-white m-5 mb-8 p-6 rounded-lg shadow-lg w-80 hover:shadow-xl transform hover:-translate-y-2 transition-all animated-icon" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaStar className="text-navy text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Artistry at Your Doorstep</h3>
            <p className="text-gray-600">
              We take pride in bringing the high-skilled craftsmanship of artisans from all around India directly to your households. Each piece of furniture and decor item at Qdore Home is a testament to the meticulous artistry and dedication of our craftsmen. From intricate carvings to hand-painted designs, our products embody the rich cultural diversity and artistic heritage of India. Transform your living spaces with our unique, handcrafted pieces that tell a story of tradition, excellence, and passion.
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white py-2 px-4 rounded-full shadow-lg flex items-center justify-center"
      >
        <FaArrowUp size={20} />
      </button>

      <style jsx>{`
        .text-navy {
          color: #001f3f;
        }
        .bg-navy {
          background-color: #001f3f;
        }
        .bg-grey {
          background-color: #f0f0f0;
        }
        .animated-icon {
          animation: pulse 2s infinite;
        }
        .animated-heading {
          animation: fadeIn 2s ease-in-out;
        }
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
}

export default OurStory;
