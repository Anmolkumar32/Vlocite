import React, { useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleAddCard = () => {
    if (!title || !description) {
      alert("Title and description are required");
      return;
    }

    axios.post("http://localhost:5000/api/cards", { title, description, image_url: imageUrl })
      .then(() => {
        alert("Card added successfully");
        setTitle("");
        setDescription("");
        setImageUrl("");
      })
      .catch(error => console.error("Error adding card:", error));
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="text" placeholder="Image URL (optional)" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
      <button onClick={handleAddCard}>Add Card</button>
    </div>
  );
};

export default AdminDashboard;
