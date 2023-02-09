import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chat-App</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <span>Deepak</span>
        <button>Log out</button>
      </div>
    </div>
  );
};

export default Navbar;
