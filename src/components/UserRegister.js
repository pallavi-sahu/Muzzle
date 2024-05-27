// src/components/UserRegister.js
import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import '../Styles/loginPage.css'
import { Button, Typography } from "@mui/material";
function UserRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/user/login");
    } catch (error) {
      console.error("Error registering:", error);
      alert(error);
    }
  };

  return (
  <div className="main-container">
    <div className="login-container">
    <header className="loginheader">
          <h1>Register</h1>
        </header>    
    <form onSubmit={handleRegister}>
      
      <div className="input-group">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      </div>
      <div className="input-group">
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      </div>
      <div className="input-group">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      </div>
      <div className="input-group">
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        placeholder="Date of Birth"
        required
      />
      </div>
      <div className="input-group">
      <input
        type="text"
        value={aadhaar}
        onChange={(e) => setAadhaar(e.target.value)}
        placeholder="Aadhaar Card Number"
        required
      />
      </div>
      <div>
            <Typography fontWeight='700'>Already registered? </Typography>
            <Button className="registerbutton" onClick={()=>navigate('/user/login')}>login here </Button>
          </div>
      <button type="submit">Create Account</button>
    </form>
    </div>
  </div>
  );
}

export default UserRegister;
