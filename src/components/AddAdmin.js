import React, { useState, useEffect } from 'react';
import { database } from '../firebase';
import { ref, get, set, push } from 'firebase/database';


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
    <div>
      <h2>Add Admin</h2>
      <form onSubmit={handleAddAdmin}>
        <input
          type="email"
          value={newAdminEmail}
          onChange={(e) => setNewAdminEmail(e.target.value)}
          placeholder="Enter admin email"
          required
        />
        <button type="submit">Add Admin</button>
      </form>
      <ul>
        {adminEmails.map((email, index) => (
          <li key={index}>{email}</li>
        ))}
      </ul>
    </div>
  );
}

export default AddAdmin;
