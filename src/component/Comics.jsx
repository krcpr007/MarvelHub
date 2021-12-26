import React, { useEffect, useState } from "react";
import ComicsCard from "./ComicsCard";
function Comics({ charName , name}) {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true)
    fetch(
      `https://gateway.marvel.com/v1/public/comics?ts=1&title=${charName}&apikey=a3938f63f5fed93b827255a83feeecd3&hash=7fe5fce16f2f9f493ac53936f10beff0`
    )
      .then((resp) => resp.json())
      .then((resp) => (
        <>{(setData(resp.data.results))}</>
      ));
      setLoader(false);
    }, [charName]);

  return (
    <div className="lg:text-center">
      <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">

      </h2>
      <p className="mt-5 text-3xl leading-8 font-extrabold tracking-tight text-primary sm:text-4xl text-center">
        Marvel Comics of {name}
      </p>
      <p className=" max-w-4xl text-xl text-gray-400 lg:mx-auto text-justify px-4 py-5">
        Marvel Comics is the brand name and primary imprint of Marvel Worldwide
        Inc., formerly Marvel Publishing, Inc. and Marvel Comics Group, a
        publisher of American comic books and related media. In 2009, The Walt
        Disney Company acquired Marvel Entertainment, Marvel Worldwide's parent
        company.
      </p>
      <div className="container">
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  items-center mt-5 px-4 py-10">
          {data.map((item) => {
            return (
              <ComicsCard
                key={item.id}
                title={item.title}
                description={item.description}
                More_info={item.urls[0].url}
                imageUrl= {item.thumbnail.path}
                publishDate={item.dates[0].date}
                loader={loader}
                // data={data}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Comics;
