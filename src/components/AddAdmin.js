import React, { useState, useEffect } from 'react';
import { database } from '../firebase';
import { ref, get, set, push } from 'firebase/database';
import '../Styles/addAdmin.css'

function AddAdmin() {
  const [adminEmails, setAdminEmails] = useState([]);
  const [newAdminEmail, setNewAdminEmail] = useState('');

  useEffect(() => {
    const fetchAdminEmails = async () => {
      const adminEmailsRef = ref(database, 'AdminEmails');
      const snapshot = await get(adminEmailsRef);
      if (snapshot.exists()) {
        setAdminEmails(snapshot.val());
      } else {
        setAdminEmails([]);
      }
    };

    fetchAdminEmails();
  }, []);

  const handleAddAdmin = async (e) => {
    e.preventDefault();
    if (newAdminEmail) {
      const newAdminEmailsRef = ref(database, 'AdminEmails');
      await set(newAdminEmailsRef, [...adminEmails, newAdminEmail]);
      setAdminEmails([...adminEmails, newAdminEmail]);
      setNewAdminEmail('');
    }
  };

  return (
    <div className="add-admin-container">
      
      <form onSubmit={handleAddAdmin} className="add-admin-form">
      <h2 className="add-admin-title">Add Admin</h2>
        <input
          type="email"
          value={newAdminEmail}
          onChange={(e) => setNewAdminEmail(e.target.value)}
          placeholder="Enter admin email"
          required
          className="add-admin-input"
        />
        <button type="submit" className="add-admin-button">Add Admin</button>
      </form>
      <ul className="add-admin-list">
        {adminEmails.map((email, index) => (
          <li key={index} className="add-admin-list-item">{email}</li>
        ))}
      </ul>
    </div>
  );
}

export default AddAdmin;
