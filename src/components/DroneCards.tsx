import React, { useState } from "react";
import "./DroneCards.css";

const cardData = [
  {
    id: 1,
    number: "01",
    title: "Launching and Piloting",
    description:
      "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque.",
    link: "#",
    image: "/images/1.webp",
  },
  {
    id: 2,
    number: "02",
    title: "Area Mapping",
    description:
      "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque.",
    link: "#",
    image: "/images/2.jpg",
  },
  {
    id: 3,
    number: "03",
    title: "Area 3D Modeling",
    description:
      "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque.",
    link: "#",
    image: "/images/3.webp",
  },
  {
    id: 4,
    number: "04",
    title: "Agrodrone Piloting",
    description:
      "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque.",
    link: "#",
    image: "/images/4.webp",
  },
];

const DroneCards = () => {
  const [activeCard, setActiveCard] = useState(cardData[0]); // Set first card as default

  return (
    <div
      className="cards-container"
      style={{ backgroundImage: `url(${activeCard.image})` }}
    >
      {cardData.map((card) => (
        <div
          key={card.id}
          className={`card ${activeCard.id === card.id ? "active" : ""}`}
          onMouseEnter={() => setActiveCard(card)}
        >
          <span className="card-number">{card.number}</span>
          <h2 className="card-title">{card.title}</h2>
          {activeCard.id === card.id && (
            <div className="card-content">
              <p>{card.description}</p>
              <a href={card.link} className="card-link">
                →
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DroneCards;
