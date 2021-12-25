import React from "react";
function ComicsCard({ title, description, More_info, imageUrl, publishDate }) {
   const stringDate= new Date(publishDate).toLocaleDateString(); 
  return (
    <div className="card glass w-72 border-2 border-primary shadow card-bordered card-compact lg:card-normal ml-3 md:ml-4">
      <figure>
        <img src={`${imageUrl}/portrait_uncanny.jpg`} alt={`${title}-Pic`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description || "No Data Available"}</p>
        <div className="justify-end card-actions">
          <a
            className="btn btn-primary btn-sm glass"
            href={More_info}
            target="_blank"
            rel="noreferrer"
          >
            know more
          </a>
        Publish Date {stringDate}
        </div>
      </div>
    </div>
  );
}

export default ComicsCard;
