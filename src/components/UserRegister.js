// src/components/UserRegister.js
import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


function UserRegister() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [aadhaar, setAadhaar] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/user/login');
    } catch (error) {
      console.error("Error registering:", error);
      alert(error)
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} placeholder="Date of Birth" required />
      <input type="text" value={aadhaar} onChange={(e) => setAadhaar(e.target.value)} placeholder="Aadhaar Card Number" required />
      <button type="submit">Create Account</button>
    </form>
  );
}

export default UserRegister;
