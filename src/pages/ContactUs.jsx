import React from 'react';
import { FaEnvelope, FaUser, FaPaperPlane, FaPhone } from 'react-icons/fa';
import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer.jsx';
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <h1 className="text-4xl font-bold mt-8 mb-4 text-center">Contact Us</h1>
      <div className="flex flex-1 justify-center items-center p-6">
        <div className="w-full max-w-lg p-8 bg-slate-200 rounded-lg shadow-lg animate-fade-in-down relative">
          <div className="flex justify-center mb-4">
            <FaPhone className="text-gray-800 text-5xl animate-bounce" size={40} />
          </div>
          <form className="space-y-6">
            <div className="flex items-center border-b border-gray-700 py-2">
              <FaUser className="text-gray-600 mr-3" />
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-900 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Name"
                aria-label="Name"
              />
            </div>
            <div className="flex items-center border-b border-gray-700 py-2">
              <FaEnvelope className="text-gray-600 mr-3" />
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-900 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="email"
                placeholder="Email"
                aria-label="Email"
              />
            </div>
            <div className="flex items-center border-b border-gray-700 py-2">
              <textarea
                className="appearance-none bg-transparent border-none w-full text-gray-900 mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Message"
                aria-label="Message"
                rows="4"
              ></textarea>
            </div>
            <button
              className="flex items-center justify-center w-full bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
              type="submit"
            >
              <FaPaperPlane className="mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>
      <style jsx="true">{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.5s ease-in-out;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translate3d(0, -100%, 0);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }

        button:hover {
          background-color: #1e40af; /* Change to a darker blue */
          transform: scale(1.05);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
      `}</style>
      <Footer />
    </div>
  );
};

export default ContactUs;
