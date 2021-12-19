import React from 'react'

function Card({Img , name, Description}) {
    return (
        <div className="card" style={{ width: "18rem" }}>
        <img style={{width:"100%"}}
          src={`${Img}/portrait_incredible.jpg`}
          className="card-img-top img-thumbnail"
          alt={`${name}-Pic`}
        />
        <div className="card-body">
          <h2>{name}</h2>
          <p className="card-text" style={{textAlign:"justify"}}>{Description || "No Data Available"}</p>
        </div>
      </div>
    )
}

export default Card
