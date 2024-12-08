import React from "react";
import "./LazyLoading.css";

export default function LazyLoading() {
  return (
    <>
      <div className="loading-overlay">
        <img
          src="/img/dress-loading.png"
          alt="Loading..."
          className="loading-img"
        />
      </div>
    </>
  );
}
