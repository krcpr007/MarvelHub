import React from "react";

function Carousel() {
  return (
    <>
      <div className="w-full carousel">
        <div id="item1" className="w-full pt-20 carousel-item">
          <img
            src="https://source.unsplash.com/daily?marvel,thor"
            className="w-full"
            alt="imagePic"
          />
        </div>
        <div id="item2" className="w-full pt-20 carousel-item">
          <img
            src="https://source.unsplash.com/daily?marvel,black widow"
            className="w-full"
            alt="imagePic"
          />
        </div>
        <div id="item3" className="w-full pt-20 carousel-item">
          <img
            src="https://source.unsplash.com/daily?marvel,vision"
            className="w-full"
            alt="imagePic"
          />
        </div>
        <div id="item4" className="w-full pt-20 carousel-item">
          <img
            src="https://source.unsplash.com/daily?marvel,hulk"
            className="w-full"
            alt="imagePic"
          />
        </div>
      </div>
    </>
  );
}

export default Carousel;
