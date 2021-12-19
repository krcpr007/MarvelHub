import React , {useEffect, useState} from 'react'
import Card from './Card';

function Comics({charName}) {

    // const [name, setname] = useState();
    // const [Description, setDescription] = useState();
    // const [Img, setImg] = useState();
    const [data, setData] = useState(JSON);
    
    useEffect(() => {
        fetch(
            `https://gateway.marvel.com/v1/public/comics?ts=1&title=hulk&apikey=a3938f63f5fed93b827255a83feeecd3&hash=7fe5fce16f2f9f493ac53936f10beff0`
            )
            .then((resp) => resp.json())
            .then((resp) =>(
                <>
                  {  (setData(resp), 
                  console.log(data))
                    // (setname(resp.data.results[0].title ),
                    // setDescription(resp.data.results[0].description ),
                    // setImg(resp.data.results[0].images.path))
                    
                  }
                </>
              ));


    }, [charName])

    return (
        <div className='container'>
            <h2>Hiii this comics section</h2>
            <p> lots of work are remain to do</p>
            {/* {data.map((item)=>{
            return    <Card  img={"img"} name={"name"} Description={"Description"}  />
                
            })} */}
        </div>
    )
}

export default Comics
