import React from "react";
import { useEffect, useState } from "react";
import { FaSearchengin } from "react-icons/fa";
import Card from "./Card";
import Carousel from "./Carousel";
import Comics from "./Comics";
// import backgroundImg from "./images/ironMan.jpg";
const Welcome = () => {
  const [name, setname] = useState();
  const [charName, setcharName] = useState("hulk");
  const [Description, setDescription] = useState();
  const [Img, setImg] = useState();
  const [ search , setSearch]= useState(null); 
  const onclickbutton = (e) => {
    e.preventDefault();
    setcharName(search);
    
    // fetch(
    //   `https://gateway.marvel.com/v1/public/characters?ts=1&name=${charName || "hulk"}&apikey=a3938f63f5fed93b827255a83feeecd3&hash=7fe5fce16f2f9f493ac53936f10beff0`
    //   )
    //   .then((resp) => resp.json())
    //   .then((resp) => (
    //     <>
    //       {
    //         (setname(resp.data.results[0].name),
    //         setDescription(resp.data.results[0].description),
    //         setImg(resp.data.results[0].thumbnail.path))
    //         // console.log(resp)
    //       }
    //     </>
    //   ));
      // https://gateway.marvel.com/v1/public/comics?ts=1&title=hulk&apikey=a3938f63f5fed93b827255a83feeecd3&hash=7fe5fce16f2f9f493ac53936f10beff0
  };
  useEffect(() => {
      fetch(
        `https://gateway.marvel.com/v1/public/characters?ts=1&name=${charName || "hulk"}&apikey=a3938f63f5fed93b827255a83feeecd3&hash=7fe5fce16f2f9f493ac53936f10beff0`
        )
        .then((resp) => resp.json())
        .then((resp) => (
          <>
            {  
              (setname(resp.data.results[0].name),
              setDescription(resp.data.results[0].description),
              setImg(resp.data.results[0].thumbnail.path ))
              
            }
          </>
        ));
  }, [charName])
  return (
    <>
      <Carousel/>
      {/* SearchBar  */}
      <section className="search-bar">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <form>
                <div>
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="hulk"

                      name="search"
                      className="form-control rounded-pill"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <div className="input-group-append">
                      {/* here is dropdown */}
                      <button
                        type="submit"
                        className="btn btn-link"
                        onClick={onclickbutton}
                      >
                        <FaSearchengin />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <img src={backgroundImg} className="img-fluid" alt="..." /> */}
      {/* card result */}
      <div className="">
        <div className="container">
          <Card Img={Img} name ={name} Description= {Description}/>
        </div>
        {/* <h2>{charName.length}</h2> */}

        <Comics charName={charName}/>
      </div>
    </>
  );
};

export default Welcome;
