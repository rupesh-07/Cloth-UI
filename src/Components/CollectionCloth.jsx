import React from "react";
import "./CollectionCloth.css";

const data = [
  {
    id: 1,
    image: "/img/dress-1.webp",
  },
  {
    id: 2,
    image: "/img/dress-2.webp",
  },
  {
    id: 3,
    image: "/img/dress-3.webp",
  },
  {
    id: 4,
    image: "/img/dress-4.webp",
  },
  {
    id: 5,
    image: "/img/dress-5.webp",
  },
  {
    id: 6,
    image: "/img/dress-6.webp",
  },
  {
    id: 7,
    image: "/img/dress-7.webp",
  },
  {
    id: 8,
    image: "/img/dress-8.webp",
  },
];

export default function CollectionCloth() {
  return (
    <>
      <div className="collection-container">
        <div className="collection-container-heading">
          <div>
            <p className="most-selling-text">MOST SELLING ITEMS</p>
            <h3 className="explore-text">
              Explore Our Women’s Fashion Collection
            </h3>
          </div>
          <div className="selling-btn">
            <button>Top Rating</button>
            <button>On Sale</button>
          </div>
        </div>

        <div className="collection-container-card">
          {data.map((item, index) => (
            <div key={item.id} className="cardStyle">
              <img src={item.image} alt="Dress" className="imageStyle" />
              <p>Dress</p>
              <span className="star-rating">★★★★★</span>
              <span className="price">₹ 999/-</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
