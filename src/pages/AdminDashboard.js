// src/pages/AdminDashboard.js
import React, { useState } from 'react';
import Card from '../components/Card';

const AdminDashboard = () => {
  const [cards, setCards] = useState([]);
  const [newCard, setNewCard] = useState({
    title: '',
    description: '',
    imageUrl: '',
  });

  const handleAddCard = () => {
    setCards([...cards, newCard]);
    setNewCard({ title: '', description: '', imageUrl: '' }); // Reset form
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div>
        <h3>Add New Card</h3>
        <input
          type="text"
          placeholder="Title"
          value={newCard.title}
          onChange={(e) => setNewCard({ ...newCard, title: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={newCard.description}
          onChange={(e) => setNewCard({ ...newCard, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newCard.imageUrl}
          onChange={(e) => setNewCard({ ...newCard, imageUrl: e.target.value })}
        />
        <button onClick={handleAddCard}>Add Card</button>
      </div>
      <div>
        <h3>Cards List</h3>
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} imageUrl={card.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
