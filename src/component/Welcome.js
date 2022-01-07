import React from "react";
import { useEffect, useState } from "react";
import { FaSearchengin } from "react-icons/fa";
import Card from "./Card";
import Comics from "./Comics";
import Carousel from "./Carousel";
import { toast } from "react-toastify";
const Welcome = () => {
  const [name, setname] = useState();
  const [loader, setLoader] = useState(true);
  const [charName, setcharName] = useState("hulk");
  const [description, setDescription] = useState([]);
  const [Img, setImg] = useState();
  const [search, setSearch] = useState(null);
  const onclickbutton = (e) => {
    e.preventDefault();
    setcharName(search);
  };
  useEffect(() => {
    setLoader(true)
    fetch(
      `https://gateway.marvel.com/v1/public/characters?ts=1&name=${
        charName 
      }&apikey=a3938f63f5fed93b827255a83feeecd3&hash=7fe5fce16f2f9f493ac53936f10beff0`
    )
      .then((resp) => resp.json())
      .then((resp) => (
        <>
          {
            (
              setLoader(false),
               setImg(resp.data.results[0].thumbnail.path),
               setname(resp.data.results[0].name),
               setDescription(resp.data.results[0].description)
            )
          }
        </>
      )).catch(()=>{
        console.log("error");
        toast.error("Enter correct super hero name")
      });
  }, [charName]);
  return (
    <> 
    <Carousel name={name}  charName={charName} />
      <section className="search-bar">
        <div className="grid gird-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
          <div>
            <form>
              <div className="from-control">
                <div className="relative ">
                  <input
                    type="text"
                    className="w-full  pr-40 bg-gray-200 input text-black border-1 border-primary"
                    placeholder="hulk"
                    name="search"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button
                    className="absolute top-0 right-0 rounded-l-none w-36 btn border-1 border-primary text-primary"
                    onClick={onclickbutton}
                  >
                   <FaSearchengin/>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <div>
        <div className="container">
          <Card Img={Img} name={name} Description={description} loader={loader}/>
        </div>
        <Comics charName={charName} name={name}/>
      </div>
    </>
  );
};

export default Welcome;
