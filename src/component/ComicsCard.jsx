import React from "react";
import Loader from "./Loader";
function ComicsCard({ title, description, More_info, imageUrl, publishDate, loader }) {

   const stringDate= new Date(publishDate).toLocaleDateString(); 
   if(loader){
     return <Loader/>
   }
  return (

    <div className="card glass text-neutral-content">
      <figure>
        <img src={`${imageUrl}/portrait_uncanny.jpg`} alt={`${title}-Pic`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-primary text-left">{title}</h2>
        <p className="text-justify">{description || "No Data Available"}</p> <br />
        <p className="text-left">Published <span className="text-primary">{stringDate}</span> </p>
        <div className="justify-end card-actions">
          <a
            className="btn btn-primary btn-sm glass"
            href={More_info}
            target="_blank"
            rel="noreferrer"
          >
            know more
          </a>
        
        </div>
      </div>
    </div>
  );
}

export default ComicsCard;
