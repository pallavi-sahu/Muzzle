// src/components/UserLogin.js
import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../Styles/loginPage.css";
import { Button, Typography } from "@mui/material";

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/user/home");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="main-container">
      <div className="login-container">
        <header className="loginheader">
          <h1>Login</h1>
        </header>

        <form onSubmit={handleLogin}>
          <div className="input-group">
          <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="input-group">
          <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>

          <div>
            <Typography fontWeight='700'>If not registered, </Typography>
            <Button className="registerbutton" onClick={()=>navigate('/user/register')}>register here </Button>
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default UserLogin;
