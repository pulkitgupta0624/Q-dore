import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../../assets/hero/table.png";
import Img2 from "../../assets/hero/sofa.png";
import { FaStar } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const ProductsData = [
  {
    category: "Furniture",
    products: [
      { id: 1, img: Img1, title: "Furniture Product 1" },
      { id: 2, img: Img2, title: "Furniture Product 2" },
      { id: 3, img: Img1, title: "Furniture Product 3" },
    ],
  },
  {
    category: "Decor",
    products: [
      { id: 4, img: Img2, title: "Decor Product 1" },
      { id: 5, img: Img1, title: "Decor Product 2" },
      { id: 6, img: Img2, title: "Decor Product 3" },
    ],
  },
  {
    category: "Servewares",
    products: [
      { id: 7, img: Img1, title: "Servewares Product 1" },
      { id: 8, img: Img2, title: "Servewares Product 2" },
      { id: 9, img: Img1, title: "Servewares Product 3" },
    ],
  },
  {
    category: "Planters&Vases",
    products: [
      { id: 10, img: Img2, title: "Planters&Vases Product 1" },
      { id: 11, img: Img1, title: "Planters&Vases Product 2" },
      { id: 12, img: Img2, title: "Planters&Vases Product 3" },
    ],
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* Body section */}
        <div>
          {ProductsData.map((categoryData) => (
            <div key={categoryData.category} className="mb-12">
              <h2
                data-aos="fade-up"
                className="text-2xl font-semibold mb-6 text-center"
              >
                {categoryData.category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-5">
                {categoryData.products.map((product, index) => (
                  <div
                    data-aos="fade-up"
                    data-aos-delay={index * 200}
                    key={product.id}
                    className="space-y-3 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <img
                      src={product.img}
                      alt={product.title}
                      className="h-[220px] w-[150px] object-cover rounded-md"
                    />
                    <div>
                      <h3 className="font-semibold text-center">
                        {product.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-6">
                <Link
                  to={`/${categoryData.category.toLowerCase().replace(
                    "&",
                    "and"
                  )}`}
                  className="flex items-center text-primary hover:text-golden-yellow transition-colors duration-200"
                >
                  See More <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
