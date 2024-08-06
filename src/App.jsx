import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import B2B from "./pages/B2B"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OurStory from "./pages/OurStory";
import ShopAll from "./pages/ShopAll";
import Furniture from "./pages/ProductList/Furniture";
import Decor from "./pages/ProductList/Decor";
import Serveware from "./pages/ProductList/Serveware";
import PlantersAndVases from "./pages/ProductList/PlantersAndVases";
import Mercury from "./pages/ProductList/Mercury";
import Videos from "./pages/Videos";
import Auth from "./pages/Auth";
import SideTable from "./pages/Furniture/SideTable.jsx"
import SideTableProduct from "./pages/Furniture/SideTableProduct.jsx";
import Cart from "./pages/Cart.jsx";
import OrderAddress from "./pages/OrderAddress.jsx"
import Checkout from "./pages/Checkout.jsx";
import Admin from "./pages/Admin.jsx";
import WoodenCollection from "./pages/Wooden/WoodenProduct.jsx";
import MyProfile from "./pages/MyProfile.jsx";
import CandleHolder from "./pages/Decor/CandleHolder.jsx";
import CandleHolderProduct from "./pages/Decor/CandleHolderProduct.jsx";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourStory" element={<OurStory />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/b2b" element={<B2B />} />
        <Route path="/shop" element={<ShopAll />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/decor" element={<Decor />} />
        <Route path="/servewares" element={<Serveware />} />
        <Route path="/planters&vases" element={<PlantersAndVases />} />
        <Route path="/mercuryCollection" element={<Mercury />} />
        <Route path="/woodenCollection" element={<WoodenCollection />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/furniture/side-table" element={<SideTable/>}/>
        <Route path="/furniture/side-table/:productId" element={<SideTableProduct />} />
        <Route path="/decor/candleDecor" element={<CandleHolder/>}/>
        <Route path="/decor/candleDecor/:productId" element={<CandleHolderProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orderAddress" element={<OrderAddress />}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/admin" element={<Admin />}/>
        <Route path="/profile" element={<MyProfile />}/>
      </Routes>
    </Router>
  );
};

export default App;
