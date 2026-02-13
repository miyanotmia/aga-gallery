import { use } from "react";
import { useState } from "react";

function SubscribeForm(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    //send to backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        try {
            const res = await fetch("http://localhost:5000/api/subscribers",{
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({ name, email}),
            });

            const data = await res.json();
            
            if (res.ok){
                setMessage(data.message || "Subscription successful");
                setName("");
                setEmail("");
            } else{
                setMessage(data.message || "Something went wrong. Try again.");
            }
         } catch (err){
                console.error("Error submitting subscriber", err);
                setMessage("Server error- please try again later.");
            };
            return (
                 <div>
      <h2>
        Stay in the Loop 🎨
      </h2>
      <p>
        Subscribe to get alerts when new artworks are added.
      </p>

      <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        />
        <button
        type="submit"
        >
          Subscribe
        </button>
        </form>
        {message && (<p>{message}</p>
      )}
      </div>
            );
        }
    }

    export default SubscribeForm;