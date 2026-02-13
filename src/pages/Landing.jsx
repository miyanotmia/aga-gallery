import {useNavigate} from "react-router-dom";
import "./landing.scss";

function Landing() {
 const navigate=useNavigate();


 const enterGallery= () => {
    setTimeout(() => {
navigate("/Home");
    }, 500);
    
 };
  return (
 <div className="enter-gallery">
  <h1>
    Anything Goes Art 
  </h1>
  <p>
    Digital gallery where <span className="enter-subtitle">Anything goes</span>
  </p>
  <button onClick={enterGallery} > Enter </button>
 </div>
  );
}

export default Landing;