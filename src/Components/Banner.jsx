import React from "react";
import { motion } from "framer-motion";
import "./Banner.css";

export default function Banner() {
  return (
    <div className="main-container">
      <p className="banner-text">
        Access to high-quality, <span className="eco-text">Eco-Friendly</span>{" "}
        fashion style with a conscience.
      </p>

      <div className="banner-img-container">
        {/* Image 1: Grey Dress */}
        <motion.div
          className="image-container"
          initial={{ opacity: 0, rotateY: -180 }} // Start with flip effect
          animate={{ opacity: 1, rotateY: 0 }} // End with normal view
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }} // Delay for animation
        >
          <img src="/img/grey-dress.jpg" className="dress" alt="Grey Dress" />
          <div className="bottom-left-text">
            <p>
              Get up to 5% off <br />
              discounts
            </p>
          </div>
          <div className="top-right-button">
            <button className="heart-btn">
              <i className="fa fa-heart"></i>
            </button>
          </div>
        </motion.div>

        {/* Image 2: Yellow Dress */}
        <motion.div
          className="image-container"
          initial={{ opacity: 0, rotateY: -180 }} // Start with flip effect
          animate={{ opacity: 1, rotateY: 0 }} // End with normal view
          transition={{ delay: 0.4, type: "spring", stiffness: 120 }} // Delay for animation
        >
          <img
            src="/img/yellow-dress.jpg"
            className="dress"
            alt="Yellow Dress"
          />
          <div className="bottom-left-text">
            <p>
              Exclusive Deals, <br />
              Just for You
            </p>
          </div>
          <div className="top-right-button">
            <button className="heart-btn">
              <i className="fa fa-heart"></i>
            </button>
          </div>
        </motion.div>

        {/* Image 3: Orange Dress */}
        <motion.div
          className="image-container"
          initial={{ opacity: 0, rotateY: -180 }} // Start with flip effect
          animate={{ opacity: 1, rotateY: 0 }} // End with normal view
          transition={{ delay: 0.6, type: "spring", stiffness: 120 }} // Delay for animation
        >
          <img
            src="/img/orange-dress.jpg"
            className="dress"
            alt="Orange Dress"
          />
          <div className="bottom-left-text">
            <p>
              Look Great, <br /> Pay Less!
            </p>
          </div>
          <div className="top-right-button">
            <button className="heart-btn">
              <i className="fa fa-heart"></i>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
