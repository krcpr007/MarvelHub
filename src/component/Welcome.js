import React from 'react'
import { useEffect ,useState } from 'react';
import { FaSearchengin } from 'react-icons/fa';
import backgroundImg from './images/ironMan.jpg';
const Welcome = () => {
    
   const [name, setname] = useState();
   const [charName, setcharName] = useState();
   const [Description, setDescription] = useState();
   const [Img, setImg] = useState(); 
   const Search = (text) =>{
    console.log(text); 
    setcharName(text) ; 
}
const onclick = (e) =>
{
    e.preventDefault();
}
   useEffect(() => {
        const charName = "hulk"; 
        fetch(`https://gateway.marvel.com/v1/public/characters?ts=1&name=${charName}&apikey=a3938f63f5fed93b827255a83feeecd3&hash=7fe5fce16f2f9f493ac53936f10beff0`).then((res) => res.json()).then((resp) =>  <> console.log(resp.data.results[0].name) {setname(resp.data.results[0].name), setDescription(resp.data.results[0].description),setImg(resp.data.results[0].thumbnail.path)  }</>);
    }, [])
    
    
    return (
        <>
            
            {/* carousel */}
            <div id="carouselExampleDark" className="carousel carousel-fade slide" data-bs-ride="carousel" >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="https://source.unsplash.com/1600x800/?marvel" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://source.unsplash.com/1600x800/?hulk" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/1600x800/?super hero" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
{/* SearchBar  */}
<section className="search-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <form action="">
                                <div>
                                    <div className="input-group">
                                        <input type="text" placeholder="Search your Hero" value={charName} name="search" className="form-control" onChange={(e)=>Search(e.target.value)} />
                                        <div className="input-group-append">
                                           {/* here is dropdown */}
                                            <button type="submit" className="btn btn-link" onClick={onclick} > <FaSearchengin />  </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
         <img src={backgroundImg} className="img-fluid" alt="..." />
            <div className="container m-3">
                <div className="card" style={{ width: "18rem" }}>
                    <img src={`${Img}/portrait_incredible.jpg`}  className="card-img-top p-1" alt="..." />
                    <div className="card-body">

                        <h2>{name}</h2>
                   
                        <p className="card-text">{Description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome
