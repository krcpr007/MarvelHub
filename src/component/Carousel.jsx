import React from "react";

function Carousel({name, charName}) {
  return (
    <>
      <div className="w-full carousel mb-6">
        <div id="item1" className="w-full carousel-item">
          <img
            src={`https://source.unsplash.com/1600x600/?${name},comics`}
            className="w-full"
            alt="imagePic"
          />
        </div>
        <div id="item2" className="w-full  carousel-item">
          <img
            src={`https://source.unsplash.com/1600x600/?${name}`}
            className="w-full"
            alt="imagePic"
          />
        </div>
        <div id="item3" className="w-full  carousel-item">
          <img
            src={`https://source.unsplash.com/1600x600/?${name},groot,comics`}
            className="w-full"
            alt="imagePic"
          />
        </div>
        <div id="item4" className="w-full  carousel-item">
          <img
            src={`https://source.unsplash.com/1600x600/?${name},superhero`}
            className="w-full"
            alt="imagePic"
          />
        </div>
      </div>
    </>
  );
}

export default Carousel;
