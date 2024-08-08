import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { setCredentials, logout } from "../../redux/slices/authSlice";
import "./MyProfile.css"; // Import your CSS file

const MyProfile = () => {
  const [userInfo, setUserInfo] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) throw new Error("No token found");

        const { data } = await axios.get(
          "http://localhost:3000/api/users/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUserInfo(data);
      } catch (error) {
        console.error("Error fetching user info:", error);
        dispatch(logout());
        navigate("/auth");
      }
    };

    if (auth.userInfo) {
      fetchUserInfo();
    } else {
      navigate("/auth");
    }
  }, [auth.userInfo, dispatch, navigate]);

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:3000/api/users/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      localStorage.removeItem("token");
      dispatch(logout());
      navigate("/auth");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="profile-container">
        <div className="profile-header">
          <FaUserCircle size={100} />
          {userInfo && (
            <div className="profile-info">
              <h2>Welcome back, {userInfo.username}!</h2>
              <p>{userInfo.email}</p>
            </div>
          )}
        </div>
        <div className="profile-options">
          <h3>What would you like to do today?</h3>
          <button onClick={() => navigate("/profile/orders")}>
            View Orders
          </button>
          <button onClick={() => navigate("/profile/address")}>
            Change Address
          </button>
          <button onClick={() => navigate("/profile/account")}>
            Edit Account
          </button>
          <button onClick={() => navigate("/profile/wishlist")}>
            View Wishlist
          </button>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyProfile;
