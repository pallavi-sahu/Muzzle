import React, { useState } from "react";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import '../Styles/check.css'

function Check() {
  const [uniqueId, setUniqueId] = useState("");
  const [image, setImage] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  // const formData = new FormData();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        file: image,
      };
      console.log(data);

      const response = await axios.post(
        "https://fd0d-1-6-29-197.ngrok-free.app/uploadfile",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "ngrok-skip-browser-warning": "69420",
          },
        }
      );

      setResponse(response.data);
      enqueueSnackbar("fetched result", {variant:'success'})

    } catch (error) {
      setError(error);
      enqueueSnackbar(error.message||"error", {variant:'error'})
    }
  };

  return (
    <div className="check-container">
      <h1>Upload Image</h1>
      <form onSubmit={handleSubmit}>
        <div className="admin-image-upload">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            id="image"
            onChange={(e) => {
              setResponse(null);
              setImage(e.target.files[0]);
            }}
          />
        </div>
        <button type="submit" className="predict-btn">Predict</button>
      </form>
      {response && (
        <div className="response-div">
          <p>Response</p>
          <p>Predicted Class: {response.predicted_class}</p>
          <img
            src={`https://fd0d-1-6-29-197.ngrok-free.app/${response.cropped_image.path}`}
            alt="Cropped"
            width='150px'
            height='150px'
          />
        </div>
      )}
      {/* {error && <div className="response-div">
      <p>Error</p>
       {error.message}
       </div>} */}
    </div>
  );
}

export default Check;
