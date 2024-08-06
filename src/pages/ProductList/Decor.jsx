import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar.jsx';  // Adjust the path as needed
import Footer from '../../components/Footer/Footer.jsx';  // Adjust the path as needed
import imageSideTable from '../../assets/bg3.jpg';
import imageCategory2 from '../../assets/bg3.jpg';
import AOS from "aos";
import "aos/dist/aos.css";

// CategoryCard component
const CategoryCard = ({ image, title, link }) => {
  const navigate = useNavigate();

  return (
    <div className="category-card bg-white rounded-lg shadow-lg overflow-hidden mb-6 transform transition-transform duration-300 hover:scale-105">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <button
          onClick={() => navigate(link)}
          className="bg-gray-400 text-white px-4 py-2 rounded transition-colors duration-300 hover:bg-gray-600"
        >
          See Products
        </button>
      </div>
    </div>
  );
};

const Decor = () => {
  const categories = [
    {
      title: 'Candle Decor',
      image: imageSideTable,
      link: '/decor/candleDecor',
    },
    {
      title: 'Object Decor',
      image: imageCategory2,
      link: '/decor/objectDecor',
    },
  ];

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
    <div>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Furniture Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              image={category.image}
              title={category.title}
              link={category.link}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Decor;
