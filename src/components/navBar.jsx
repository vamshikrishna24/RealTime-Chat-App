import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "./../context/authContext";
const NavBar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="logo">Chat World</div>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default NavBar;
