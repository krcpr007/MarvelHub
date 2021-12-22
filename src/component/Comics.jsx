import React, { useEffect, useState } from "react";
// import Card from "./Card";

function Comics({ charName }) {
  // const [name, setname] = useState();
  // const [Description, setDescription] = useState();
  // const [Img, setImg] = useState();
  const [data, setData] = useState(JSON);

  useEffect(() => {
    fetch(
      `https://gateway.marvel.com/v1/public/comics?ts=1&title=hulk&apikey=a3938f63f5fed93b827255a83feeecd3&hash=7fe5fce16f2f9f493ac53936f10beff0`
    )
      .then((resp) => resp.json())
      .then((resp) => <>{(setData(resp), console.log(data))}</>);
  }, [charName]);

  return (
    <div className="flex items-center w-full">
      <h2 className="text-4xl">Hiii this comics section</h2>
      <br />
      <p> lots of work are remain to do</p>
    </div>
  );
}

export default Comics;
