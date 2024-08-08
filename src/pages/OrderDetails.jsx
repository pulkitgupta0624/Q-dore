import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";

const OrderDetails = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const { data } = await axios.get(`/api/orders/${orderId}`);
        setOrder(data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
        <div className="w-full max-w-2xl bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Order Details
          </h2>
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Order ID: {order._id}
            </h4>
            <p className="text-gray-700 dark:text-gray-200">
              Total: ${order.totalPrice}
            </p>
            <p className="text-gray-700 dark:text-gray-200">
              Status: {order.isDelivered ? "Delivered" : "Not Delivered"}
            </p>
            <p className="text-gray-700 dark:text-gray-200">
              Paid: {order.isPaid ? "Yes" : "No"}
            </p>
            <div className="text-gray-700 dark:text-gray-200">
              <h5 className="font-bold">Items:</h5>
              <ul>
                {order.orderItems.map((item) => (
                  <li key={item._id}>
                    {item.name} - ${item.price} x {item.qty}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderDetails;
