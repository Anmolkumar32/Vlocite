// src/pages/Vlogs.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from '../components/Card';

const Vlogs = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/cards")
      .then(response => setCards(response.data))
      .catch(error => console.error("Error fetching cards:", error));
  }, []);

  return (
    <div>
      <h2>Vlogs</h2>
      <div>
        {cards.map((card) => (
          <div key={card.id}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            {card.image_url && <img src={card.image_url} alt={card.title} width="200" />}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Vlogs;
