import { Link, useLocation } from "react-router-dom";
import "./navbar.scss";

function Navbar ({cart}) {
    const location = useLocation();

    {/*Hide nav */}
    if (location.pathname ==="/") {
        return null;
    }
    
    const totalItems = cart.reduce ((sum, item) => sum + item.qty, 0)

    return(
    
    <nav className="navbar">
        <div className="navbar_container">
        {/*Site Name */}
        <h1 className="navbar_brandname">
            <Link to="/Home">Anything Goes Art </Link>
        </h1>
       
       {/*Site links*/}
        <div>
            <Link to="/Home" className="nav-link" >
            Home </Link>
            
            <Link to="/Gallery" className="nav-link"> Gallery </Link>

            <Link to="/Checkout" className="nav-link nav_cart"> Cart {totalItems > 0 && (<span className="nav-cart-badge">
                {totalItems}
            </span>
            )}
            </Link>
        </div>
        </div>
    </nav>
);
}

export default Navbar;