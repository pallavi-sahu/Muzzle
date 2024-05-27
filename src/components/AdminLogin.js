import React, { useState, useEffect } from "react";
import { auth, provider, signInWithPopup, database } from "../firebase";
import { ref, get } from "firebase/database";
import "../Styles/adminLogin.css";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import { Typography } from "@mui/material";
import userIcon from '../assets/user-icon.svg'
import usericon from '../assets/user.png'

function AdminLogin() {
  const [adminEmails, setAdminEmails] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdminEmails = async () => {
      const adminEmailsRef = ref(database, "AdminEmails");
      const snapshot = await get(adminEmailsRef);
      if (snapshot.exists()) {
        setAdminEmails(snapshot.val());
      } else {
        setAdminEmails([]);
      }
    };

    fetchAdminEmails();
  }, []);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (adminEmails.includes(user.email)) {
        setUser(user);
        navigate("/check");
      } else {
        alert("You are not an admin.");
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
      enqueueSnackbar(error || "Not able to sign in", {variant:'error'})
    }
  };

  if (user) {
    return (
      <div>
        <h2>Welcome, {user.displayName}</h2>
        {/* Add your admin page content here */}
      </div>
    );
  }

  return (
    <div className="main-admin-login">
     <div className="admin-login">
     <Typography variant="h3" fontWeight='700'>Admin Login</Typography>
      <img src={usericon} width='180px' height='180px'/>
      <button onClick={handleLogin}>
        <div className="google-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
          <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
        </svg>
        </div>
        Sign in with Google
      </button>
     </div>
    </div>
  );
}

export default AdminLogin;
