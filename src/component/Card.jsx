import React from "react";

function Card({ Img, name, Description }) {


  if(name==''){
    return <h2>loading....</h2>
  }
  return (
    //   <div className="card m-3 border-danger" style={{ width: "18rem" }}>
    //   <img style={{width:"100%"}}
    //     src={`${Img}/portrait_incredible.jpg`}
    //     className="card-img-top img-thumbnail"
    //     alt={`${name}-Pic`}
    //   />
    //   <div className="card-body">
    //     <h2>{name}</h2>
    //     <p className="card-text" style={{textAlign:"justify"}}>{Description || "No Data Available"}</p>
    //   </div>
    // </div>
    <div
      class="flex items-center w-full px-4 py-10 bg-cover card bg-base-200"
      style={{
        backgroundImage: `url('https://source.unsplash.com/daily?${name}')`,
      }}
    >
      <div class="card glass lg:card-side text-neutral-content">
        <figure class="p-4">
          <img
            src={`${Img}/portrait_incredible.jpg`}
            class="rounded-lg shadow-lg"
            alt={`${name}-Pic`}
          />
        </figure>
        <div class="max-w-md card-body">
          <h2 class="card-title">{name}</h2>
          <p>{Description || "No Data Available"}</p>
          <div class="card-actions">
            <button class="btn btn-ghost btn glass rounded-full">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
