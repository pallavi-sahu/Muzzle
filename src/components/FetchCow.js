
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
function FetchCow() {
  const [cows, setCows] = useState([]);

  useEffect(() => {
    const fetchCows = async () => {
      const cowsCollection = collection(db, 'cows');
      const cowsSnapshot = await getDocs(cowsCollection);
      const cowsList = cowsSnapshot.docs.map(doc => doc.data());
      setCows(cowsList);
    };

    fetchCows();
  }, []);

  return (
    <div className="fetch-cow">
      <h2>Cows</h2>
      <ul>
        {cows.map((cow, index) => (
          <li key={index}>
            <p><strong>Eartag:</strong> {cow.eartag}</p>
            <p><strong>Insurance:</strong> {cow.insurance}</p>
            <p><strong>Age:</strong> {cow.age}</p>
            {cow.image && <img src={cow.image} alt={`Cow ${index}`} />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchCow;
