import {Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Home from "./pages/Home.jsx";
import Gallery from "./pages/Gallery.jsx";
import Checkout from "./pages/Checkout.jsx"
import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
function App() {
  const [cart,setCart]= useState([]);
  
  {/* add to cart*/}
  const addToCart=(art) => {
    setCart((prevCart) => {
      const existing= prevCart.find((item) => item.id === art._id);
  
  
   if (existing){
      return prevCart.map((item) =>
        item.id === art._id ? {...item, qty: item.qty +1} : item);
    }
    return [...prevCart, {...art, qty:1}];
  });
};
{/* Increase  & decrease qty */}  
const increaseQty = (id) => {
    setCart((prevCart) =>
      prevCart.map((item)=>
    item.id === id ? {...item, qty: item.qty + 1} : item 
  )
);
  };
   
  const decreaseQty = (id) => {
    setCart((prevCart) =>
    prevCart.map((item) =>
      item.id === id ? {...item,qty: Math.max(item.qty - 1, 0) }: item).filter(item=> item.qty > 0));
  };

  return (
<>
<Navbar cart={cart} />

<Routes>
  
  <Route path="/" element={<Landing/>} />
  <Route path="/Home" element={<Home />} />
  <Route path="/Gallery" element={<Gallery cart={cart} addToCart={addToCart}/>} />
  <Route path="/Checkout" element=
  {<Checkout 
  cart={cart} 
  increaseQty={increaseQty}
  decreaseQty={decreaseQty} 
  setCart={setCart}
  />
} 
  />
  
</Routes>
</>
  );
}

export default App;