import {useState, useEffect} from "react";
import { FREEBIE_SYMBOL, FREEBIE_WORD } from "../utils/currency";
import { Link } from "react-router-dom";
import "./gallery.scss";

function Gallery ({addToCart, cart}) {
    const [items, setItems] = useState([]);

useEffect(() => {
fetch("http://localhost:5000/api/products")
.then((res) => res.json())
.then ((data) => {
    setItems(data);
})
.catch((err) => console.error("Error loading artworks:", err));
}, []);



return (
    <div>
    <div>
        <div>
                 
        <Link to="/Checkout">
    Head to Checkout
    {cart.length > 0 &&(
        <span>{cart.length}
        </span>
    )}
    </Link>
    </div>
      

        <div className="gallery">
            {items.map((art) => {
                
                
                return ( 
                <div className="gallery-card"
                key= {art._id}
                >
                    <img
                    src={art.image}
                    alt= {art.title}
                    
                    />
                    <div className="card-text">
                    <h2>
                        {art.title}
                    </h2>
                    <p>
                        {art.price}{FREEBIE_SYMBOL} ({FREEBIE_WORD (art.price)})
                    </p>
                    <p>
                        {art.artist}
                    </p>
                    <button className="gallery-button" onClick={() => addToCart(art)}>
                          Add to cart                  
                    </button>
                    </div>
                </div>
            );
})}
        
        </div>
    </div>
    </div>
);
}

export default Gallery;