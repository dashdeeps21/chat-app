import React from "react";
import "../style.scss";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat-App</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Password" />

          <button>Sign in</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
