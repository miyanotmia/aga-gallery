import { FREEBIE_SYMBOL, FREEBIE_WORD } from "../utils/currency";
import SubscribeForm from "../components/SubscribeForm";
import "./checkout.scss";

function Checkout ({cart, increaseQty, decreaseQty, setCart}) {

const totalPrice = cart.reduce((sum, item)=> sum + item.price * item.qty,0);

const clearCart= () => {
    setCart([]);
};

const handleDownload = () => {
alert("Download feature coming soon!");
};

    return (
        <div className="checkout">
            <h1 className="checkout__title">
                Checkout
            </h1>
            
            {cart.length === 0 ?(
                <p>
                    Your bag is empty. Head to the gallery to add some art.
                </p>
             ) : (
                <>
                <div className="checkout-card">
                    {cart.map((art) => (
                <div 
                key={art._id}
                > 
                <img className="checkout-img"
                src={art.image}
                alt={art.title}
                 />
                
            <div className="checkout__info">
                <h2>
                    {art.title}
                    </h2>
                <p> {art.artist}</p>
            
            <p>
                {art.price}{FREEBIE_SYMBOL} * {art.qty}
            </p>

            <div className="qty">
                <button className="qty-btn" onClick={()=> decreaseQty(art._id)}
                >
                    -
                </button>
                
                <span className="qty-value">{art.qty}</span>

                <button className="qty-btn"
                onClick={() => increaseQty(art._id)}
                >
                    +
                </button>
            </div>
            </div>
             </div>
             ))}
        </div>
          
          {/* Clear + download buttons*/}
            <div>
                <button className="clear-cart" onClick={clearCart}
                >Clear </button>
                
                <button className="download" onClick={handleDownload}
                >
                    Download 
                </button>
            </div>
            
            {/* Tagline & Total*/}
           <p>
                Art without limits, paid in {FREEBIE_SYMBOL}.
            </p>
            <div className="checkout-summary">
                <h2>
                    Checkout Summary
                    </h2>
                   <p className="total"> Total: {totalPrice.toFixed(0)} {FREEBIE_SYMBOL}({FREEBIE_WORD(totalPrice)})
                    </p>
                
            </div>
            </>
            )}
            <div>
                    <SubscribeForm />
                    </div>
             </div> 
                    
 );
}
export default Checkout;