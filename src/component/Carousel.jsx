import React from "react";

function Carousel() {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-fade slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src="https://source.unsplash.com/1600x800/?marvel"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block"></div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="https://source.unsplash.com/1600x800/?hulk"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block"></div>
        </div>
        <div className="carousel-item">
          <img
            src="https://source.unsplash.com/1600x800/?super hero"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block"></div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
