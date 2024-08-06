import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Products from '../components/Products/Products';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import Popup from '../components/Popup/Popup';
import Slider from '../components/Slider/Slider'; // Importing the Slider component

const Home = () => {
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
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
            <Navbar handleOrderPopup={handleOrderPopup} />
            <Hero handleOrderPopup={handleOrderPopup} />
            <Slider /> 
            <Products />
            <Banner />
            <Footer />
            <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
        </div>
    )
}

export default Home;
