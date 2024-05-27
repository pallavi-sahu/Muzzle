import React, { useState } from 'react';
import { db, storage } from '../firebase';
import { collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import '../Styles/addCow.css';

function AddCow() {
  const [eartag, setEartag] = useState('');
  const [insurance, setInsurance] = useState('');
  const [age, setAge] = useState('');
  const [imageSrc, setImageSrc] = useState(null);
  const [stream, setStream] = useState(null);
  const [showCaptureButton, setShowCaptureButton] = useState(true);

  const handleAddCow = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'cows'), {
        eartag,
        insurance,
        age,
        imageUrl: '' // Temporary value, will update after uploading the image
      });

      if (imageSrc) {
        const imageRef = ref(storage, `cows/${docRef.id}`);
        const response = await fetch(imageSrc);
        const blob = await response.blob();
        await uploadBytes(imageRef, blob);
        const imageUrl = await getDownloadURL(imageRef);
        await updateDoc(docRef, { imageUrl });
      }

      setEartag('');
      setInsurance('');
      setAge('');
      setImageSrc(null);
      setShowCaptureButton(true);
      alert('Cow added successfully!');
      
    } catch (error) {
      console.error('Error adding cow: ', error);
      alert('Failed to add cow');
    }
  };

  const handleCapture = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      setStream(mediaStream);

      const video = document.querySelector('video');
      video.srcObject = mediaStream;
      video.onloadedmetadata = () => {
        video.play();
      };
    } catch (error) {
      console.error('Error accessing camera: ', error);
    }
  };

  const captureImage = () => {
    const video = document.querySelector('video');
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageDataURL = canvas.toDataURL('image/jpeg');
    setImageSrc(imageDataURL);
    setShowCaptureButton(false);
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
  };

  return (
    <div className='cow-container'>
      <form onSubmit={handleAddCow} className="add-cow-form">
      <h2>Add Cow</h2>
      <input type="text" value={eartag} onChange={(e) => setEartag(e.target.value)} placeholder="Eartag" required />
      <input type="text" value={insurance} onChange={(e) => setInsurance(e.target.value)} placeholder="Insurance" required />
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" required />
      {showCaptureButton ? (
        <button type="button" onClick={handleCapture}>Open Camera</button>
      ) : (
        <button type="button" onClick={handleCapture}>Click Image Again</button>
      )}
      <div className="camera-container">
        <video className="video-feed"></video>
        {imageSrc && <img src={imageSrc} alt="Captured" className="captured-image" />}
        {!showCaptureButton && (
          <button type="button" onClick={captureImage}>Capture Image</button>
        )}
      </div>
      <button type="submit">Add Cow</button>
    </form>
    </div>
  );
}

export default AddCow;

