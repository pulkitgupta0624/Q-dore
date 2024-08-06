import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowUp, FaHandshake, FaTags, FaCogs, FaShippingFast, FaLeaf, FaBuilding, FaGift, FaDraftingCompass, FaHotel, FaGlobe, FaPhone, FaEnvelope } from "react-icons/fa";
import Footer from '../components/Footer/Footer';
import Popup from '../components/Popup/Popup';

const B2B = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <div className="container mx-auto mt-14 mb-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-6 animated-heading">Welcome to Qdore Home B2B</h1>
        </div>
        <div className="flex flex-col items-center mb-12 bg-slate-200 p-6 rounded-lg">
          <FaHandshake className="text-gray-800 text-5xl mb-4 animate-bounce" />
          <p className="text-center text-gray-600 text-lg max-w-2xl">
            Partner with Us for Exceptional Quality and Design. Our B2B solutions are designed to help your business thrive by providing access to our extensive range of high-quality home decor products, competitive pricing, and reliable services.
          </p>
        </div>
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-6 animated-heading">Why Partner with Qdore Home?</h1>
        </div>
        <div className="flex flex-wrap justify-center">
          <div
            className="bg-white m-5 mb-8 p-6 rounded-lg shadow-lg w-80 hover:shadow-xl transform hover:-translate-y-2 transition-all animated-icon"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaTags className="text-navy text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Legacy of Quality</h3>
            <p className="text-gray-600">
              With over 15 years of experience through Quality Exports, we ensure top-notch products that meet international standards.
            </p>
          </div>
          <div
            className="bg-white m-5 mb-8 p-6 rounded-lg shadow-lg w-80 hover:shadow-xl transform hover:-translate-y-2 transition-all animated-icon"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaCogs className="text-navy text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Customization Options</h3>
            <p className="text-gray-600">
              Tailor our products to meet your specific business needs with our extensive customization options.
            </p>
          </div>
          <div
            className="bg-white m-5 mb-8 p-6 rounded-lg shadow-lg w-80 hover:shadow-xl transform hover:-translate-y-2 transition-all animated-icon"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaShippingFast className="text-navy text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Reliable Supply Chain</h3>
            <p className="text-gray-600">
              We ensure timely delivery of high-quality products through our efficient and reliable supply chain.
            </p>
          </div>
          <div
            className="bg-white m-5 mb-8 p-6 rounded-lg shadow-lg w-80 hover:shadow-xl transform hover:-translate-y-2 transition-all animated-icon"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaLeaf className="text-navy text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
            <p className="text-gray-600">
              Supporting local artisans and sustainable practices to ensure a positive impact on the environment.
            </p>
          </div>
        </div>
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-6 animated-heading">Our B2B Services</h1>
        </div>
        <div className="flex flex-wrap justify-center">
          <div
            className="bg-white m-5 mb-8 p-6 rounded-lg shadow-lg w-80 hover:shadow-xl transform hover:-translate-y-2 transition-all animated-icon"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaBuilding className="text-navy text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Wholesale Orders</h3>
            <p className="text-gray-600">
              Purchase our products in bulk at competitive prices to meet your business demands.
            </p>
          </div>
          <div
            className="bg-white m-5 mb-8 p-6 rounded-lg shadow-lg w-80 hover:shadow-xl transform hover:-translate-y-2 transition-all animated-icon"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaGift className="text-navy text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Corporate Gifting</h3>
            <p className="text-gray-600">
              Unique and beautifully crafted corporate gifts to leave a lasting impression on your clients and employees.
            </p>
          </div>
          <div
            className="bg-white m-5 mb-8 p-6 rounded-lg shadow-lg w-80 hover:shadow-xl transform hover:-translate-y-2 transition-all animated-icon"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaDraftingCompass className="text-navy text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Interior Design Solutions</h3>
            <p className="text-gray-600">
              Source bespoke furniture and decor for your projects, ensuring a unique and personalized touch.
            </p>
          </div>
        </div>
        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-6 animated-heading">Contact Us</h1>
        </div>
        <div className="flex flex-col items-center mb-12 bg-slate-200 p-6 rounded-lg">
          <FaPhone className="text-gray-800 text-5xl mb-4 animate-bounce" />
          <p className="text-center text-gray-600 text-lg max-w-2xl">
            Interested in partnering with us? Reach out to our B2B team for more information on how we can work together to elevate your business. Call us at <strong>+91 12345 67890</strong> or email us at <strong>b2b@qdorehome.com</strong>.
          </p>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white py-2 px-4 rounded-full shadow-lg flex items-center justify-center"
      >
        <FaArrowUp size={20} />
      </button>

      <style jsx="true">{`
        .text-navy {
          color: #001f3f;
        }
        .bg-navy {
          background-color: #001f3f;
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

export default B2B;
