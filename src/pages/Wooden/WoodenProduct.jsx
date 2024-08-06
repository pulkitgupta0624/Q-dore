import React from "react";
import { FaArrowRight, FaTag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import image1 from '../../assets/wooden/wooden11.png';
import image2 from '../../assets/wooden/wooden22.png';
import image3 from '../../assets/wooden/wooden33.png';
import image4 from '../../assets/wooden/wooden44.png';
import image5 from '../../assets/wooden/wooden55.png';
import image6 from '../../assets/wooden/wooden66.png';
import AOS from "aos";
import "aos/dist/aos.css";
import "../ProductPage.css";

const Product = ({ product, index }) => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(`/woodenCollection/${product.id}`);
    };

    return (
        <div
            className={`product-container bg-white rounded-lg shadow-lg overflow-hidden mb-6 flex flex-col md:flex-row ${index % 2 === 0 ? "" : "md:flex-row-reverse"
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

const WoodenCollection = () => {
    const products = [
        {
            id: "product1",
            heading: "PRODUCT 1",
            image: image1,
            price: "99.99",
        },
        {
            id: "product2",
            heading: "PRODUCT 2",
            image: image2,
            price: "99.99",
        },
        {
            id: "product3",
            heading: "PRODUCT 3",
            image: image3,
            price: "99.99",
        },
        {
            id: "product4",
            heading: "PRODUCT 4",
            image: image4,
            price: "99.99",
        },
        {
            id: "product5",
            heading: "PRODUCT 5",
            image: image5,
            price: "99.99",
        },
        {
            id: "product6",
            heading: "PRODUCT 6",
            image: image6,
            price: "99.99",
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

export default WoodenCollection;