import React from "react";
function Card({ Img, name, Description }) {
  if(name===''){
    return <h2>loading....</h2>
  }
  return (
    <div
      className="flex items-center w-full px-4 py-10 bg-cover card bg-base-200"
      style={{
        backgroundImage: `url('https://source.unsplash.com/daily?${name}')`,
      }}
    >
      <div className="card glass lg:card-side text-neutral-content">
        <figure className="p-4">
          <img
            src={`${Img}/portrait_uncanny.jpg`}
            className="rounded-lg shadow-lg"
            alt={`${name}-Pic`}
          />
        </figure>
        <div className="max-w-md card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-justify">{Description || "No Data Available"}</p>
          <div className="card-actions">
            <button className="btn btn-primary btn glass rounded-full">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
