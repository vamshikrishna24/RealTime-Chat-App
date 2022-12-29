import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">Chat World</div>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/6159139/pexels-photo-6159139.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <span>John</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default NavBar;
