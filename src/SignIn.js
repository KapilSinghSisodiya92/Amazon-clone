import React from "react";
import "./SignIn.css";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { Link } from "react-router-dom";

function SignIn() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="signinCard">
      <div className="signin">
        <h3>
          {user ? `Hello ${user?.email}` : "Sign in for your best experience"}
        </h3>
        <Link to={!user && "/login"}>
          <button onClick={login}>
            {user ? "Sign Out" : "Sign in securely"}
          </button>
        </Link>
      </div>
      <img
        src="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg"
        alt=""
      />
    </div>
  );
}

export default SignIn;
