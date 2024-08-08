import React, { useState, useEffect, useContext } from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux"; // Import useSelector from react-redux
import { CartContext } from "../../context/CartContext"; // Import CartContext
import { FaTag, FaArrowRight } from "react-icons/fa";
import image1 from "../../assets/CandleHolders/ch11.png";
import image2 from "../../assets/CandleHolders/ch22.png";
import image3 from "../../assets/CandleHolders/ch33.png";
import image4 from "../../assets/CandleHolders/ch4.jpg";
import image5 from "../../assets/CandleHolders/ch55.png";
import image6 from "../../assets/CandleHolders/ch66.png";
import image7 from "../../assets/CandleHolders/ch77.png";
import image11 from "../../assets/CandleHolders/ch1.jpg";
import image22 from "../../assets/CandleHolders/ch2.jpg";
import image33 from "../../assets/CandleHolders/ch3.jpg";
import image44 from "../../assets/CandleHolders/ch4.jpg";
import image55 from "../../assets/CandleHolders/ch5.jpg";
import image66 from "../../assets/CandleHolders/ch6.jpg";
import image77 from "../../assets/CandleHolders/ch7.jpg";

// Product images
const productImages = {
  "classical-starburst-lanterns": [image1, image11],
  "starburst-lanterns": [image2, image22],
  "solar-candle-holders": [image3, image33],
  "solar-candle-hurricanes": [image4, image44],
  "acacia-wood-candle-holders": [image5, image55],
  "eris-marble-candle-holders": [image6, image66],
  "psyche-candle-holders": [image7, image77],
};

const products = [
  {
    id: "classical-starburst-lanterns",
    name: "THE CLASSICAL STARBURST LANTERNS",
    description: [
      "This exquisite lantern brings a touch of timeless elegance to any space with its luxurious gold finish & classical shape.",
      "Crafted from durable aluminum metal, it features a textured surface that gives it a raw and enduring appeal.",
      "The lantern’s classical shape radiates charm and grace, making it a standout piece in any room.",
      "At 21 inches tall and 12 inches wide, it’s perfectly sized to add a sophisticated glow to your living room, entryway, or garden. Whether you place it on a table, mantle, or hang it up, this lantern will elevate your decor with its vintage allure and warm ambiance.",
    ],
    price: 99.99, // Changed to number
  },
  {
    id: "starburst-lanterns",
    name: "STARBURST LANTERNS",
    description: [
      "A luxurious addition to elevate your home decor. With a stunning gold finish.",
      "These Lanterns are Sand Casted from solid Aluminium Metal, highlighting the natural, beautiful metal textures.",
      "Their classical shape radiates charm and grace, making them a perfect fit for any space.",
      "Standing at 25 inches for the large lantern and 20 inches for the small one.",
    ],
    price: 89.99, // Changed to number
  },
  {
    id: "solar-candle-holders",
    name: "SOLAR CANDLE HOLDERS",
    description: [
      "Crafted from high-quality aluminum and mouth-blown glass.",
      "Designed for candle lighting, these artistically charming pieces add a touch of grace to any space.",
      "Whether placed on a mantel or tabletop, they bring warmth and sophistication to your decor.",
      "Light your home with the graceful charm of our Solar Candle Holder collection and enjoy the enchanting ambiance they create.",
    ],
    price: 79.99, // Changed to number
  },
  {
    id: "solar-candle-hurricanes",
    name: "SOLAR CANDLE HURRICANES",
    description: [
      "These sleek exquisite candle hurricanes are crafted with hand-blown glass and sand-casted aluminum, ensuring a rich finish that exudes elegance and sophistication.",
      "They are perfect for placing in quiet corners to add a touch of light and warmth, or on a console or end table to create a cozy and inviting glow.",
      "Whether you’re looking to elevate your home decor or add a chic touch to your interior, these sleek S/2 𝐒𝐨𝐥𝐚𝐫 𝐂𝐚𝐧𝐝𝐥𝐞 𝐇𝐮𝐫𝐫𝐢𝐜𝐚𝐧𝐞𝐬 are the perfect addition.",
    ],
    price: 119.99, // Changed to number
  },
  {
    id: "acacia-wood-candle-holders",
    name: "ACACIA WOOD CANDLE HOLDERS",
    description: [
      "Crafted from sustainable, eco-friendly, and natural wood.",
      "These handmade pieces highlight exquisite Indian craftsmanship with a beautiful natural finish and unique wood grains.",
      "Elevate your home decor with these elegant and sustainable Candle Holders.",
      "Perfect to place on one of your consoles or on a side table.",
    ],
    price: 69.99, // Changed to number
  },
  {
    id: "eris-marble-candle-holders",
    name: "ERIS MARBLE CANDLE HOLDERS",
    description: [
      "These set of 2 candle holders hold 3” inch pillar candles and showcase beautiful, artistic craftsmanship.",
      "Sculpted from one of the rarest rich black marbles from 𝑹𝒂𝒋𝒂𝒔𝒕𝒉𝒂𝒏 and featuring metal holders from 𝑴𝒐𝒓𝒂𝒅𝒂𝒃𝒂𝒅.",
      "these elegant pieces are perfect for your console, coffee table, or TV cabinet.",
    ],
    price: 69.99, // Changed to number
  },
  {
    id: "psyche-candle-holders",
    name: "PSYCHE CANDLE HOLDERS",
    description: [
      "Crafted from recycled aluminum with an exclusive gold finish.",
      "These premium holders combine modern design with traditional Indian craftsmanship.",
      "These Set Of 2 Candle Holders are perfect for taper candles.",
      "They elevate your decor and dining experience",
      "Illuminate your home with luxury",
    ],
    price: 69.99, // Changed to number
  },
];

const CandleHolderProduct = () => {
  const [activeProduct, setActiveProduct] = useState(products[0]);
  const [activeImg, setActiveImage] = useState(
    productImages[activeProduct.id][0]
  );
  const [amount, setAmount] = useState(1);
  const { addToCart } = useContext(CartContext);

  // Fetching userInfo from Redux store
  const userInfo = useSelector((state) => state.auth.userInfo);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    if (productImages[activeProduct.id]) {
      setActiveImage(productImages[activeProduct.id][0]);
    }
  }, [activeProduct]);

  const handleAddToCart = async () => {
    console.log("User Info:", userInfo);

    if (!userInfo || !userInfo._id) {
      // Use _id if that's the correct property
      console.error("User ID is required to add to cart");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/cart/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userInfo._id, // Use _id if that's the correct property
          productId: activeProduct.id,
          quantity: amount,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add item to cart");
      }

      await response.json();
      addToCart(activeProduct, amount);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-16 p-4 lg:p-6">
        {/* Product Details */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-16">
          {/* Main Product Image */}
          <div className="flex flex-col gap-4 lg:w-1/2">
            <div className="w-3/4 h-full aspect-[3/4]">
              <img
                src={activeImg}
                alt={activeProduct.name}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="flex flex-row gap-2 lg:gap-4 overflow-x-auto">
              {productImages[activeProduct.id]?.map((img, index) => (
                <div key={index} className="w-20 h-26 lg:w-24 lg:h-32">
                  <img
                    src={img}
                    alt={`${activeProduct.name} ${index + 1}`}
                    className={`w-full h-full object-cover rounded-xl cursor-pointer ${
                      activeImg === img ? "border-2 border-blue-500" : ""
                    }`}
                    onClick={() => setActiveImage(img)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center gap-4 lg:w-1/2">
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-800">
              {activeProduct.name}
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {activeProduct.description.map((desc, index) => (
                <li key={index} className="text-lg lg:text-xl">
                  {desc}
                </li>
              ))}
            </ul>
            <div className="text-2xl lg:text-3xl font-semibold text-gray-800">
              ${activeProduct.price.toFixed(2)}
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <button
                  className="text-xl font-semibold px-3 py-1 bg-gray-300 rounded-l-lg"
                  onClick={() => setAmount((prev) => Math.max(prev - 1, 1))}
                >
                  -
                </button>
                <div className="text-xl font-semibold px-4">{amount}</div>
                <button
                  className="text-xl font-semibold px-3 py-1 bg-gray-300 rounded-r-lg"
                  onClick={() => setAmount((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="px-4 py-2 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CandleHolderProduct;
