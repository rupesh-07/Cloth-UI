import React from "react";
import "./Categories.css";

export default function Categories() {
  return (
    <>
      <h1 className="category-headline">
        Browse Through Our Premium Collections
      </h1>

      <div className="categories-container">
        {/* Dresses Category */}
        <div className="cloth-item">
          <img src="/img/cate-dresses.jpg" alt="Dresses" />
          <p>Dresses</p>
          <i className="fa-solid fa-arrow-right"></i>
        </div>

        {/* Blazers Category */}
        <div className="cloth-item">
          <img src="/img/cate-blazers.avif" alt="Blazers" />
          <p>Blazers</p>
          <i className="fa-solid fa-arrow-right"></i>
        </div>

        {/* Jackets Category */}
        <div className="cloth-item">
          <img src="/img/cate-jackets.avif" alt="Jackets" />
          <p>Jackets</p>
          <i className="fa-solid fa-arrow-right"></i>
        </div>

        {/* Tops Category */}
        <div className="cloth-item">
          <img src="/img/cate-tops.avif" alt="Tops" />
          <p>Tops</p>
          <i className="fa-solid fa-arrow-right"></i>
        </div>

        {/* Jeans Category */}
        <div className="cloth-item">
          <img src="/img/cate-jeans.avif" alt="Jeans" />
          <p>Jeans</p>
          <i className="fa-solid fa-arrow-right"></i>
        </div>

        {/* Shirts Category */}
        <div className="cloth-item">
          <img src="/img/cate-shirts.avif" alt="Shirts" />
          <p>Shirts</p>
          <i className="fa-solid fa-arrow-right"></i>
        </div>

        {/* Skirts Category */}
        <div className="cloth-item">
          <img src="/img/cate-skirts.avif" alt="Skirts" />
          <p>Skirts</p>
          <i className="fa-solid fa-arrow-right"></i>
        </div>

        {/* Others Category */}
        <div className="cloth-item">
          <img src="/img/cate-others.avif" alt="Others" />
          <p>Others</p>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </>
  );
}
