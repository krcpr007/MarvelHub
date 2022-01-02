import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cardImage from "./images/ironMan.jpg";
import { FaGithub } from "react-icons/fa";
const About = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://programming-quotes-api.herokuapp.com/Quotes/random`)
      .then((resp) => resp.json())
      .then((resp) => <>{(setData(resp))}</>);
  }, []);
  return (
    <div>
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-25">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl xl:line-through">
            <span
              className="block xl:inline inline"
              style={{ color: "#F28C19" }}
            >
              Welcome to{" "}
            </span>
            <span
              className="block  xl:inline  inline"
              style={{ color: "#F28C19" }}
            >
              Marvel Hub
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 text-justify">
            Hii... A very welcome to marvel hub it's just a simple marvel
            cinematic universe website where you can read about all the MCU
            superheroes, lots of comics of heroes and every detail of the hero
            made by{" "}
            <a
              className="text-decoration-line: underline text-primary"
              href="https://www.linkedin.com/in/krcpr007/"
              target="_blank"
              rel="noreferrer"
            >
              Rajan kumar
            </a>{" "}
            a simple 2nd-year college student of{" "}
            <a
              href="http://www.nitp.ac.in/php/home.php"
              target="_blank"
              rel="noreferrer"
              className="hover:underline text-primary"
            >
              Nit Patna (india)
            </a>
            .
            <br />
            <br />
            This website was first of all made with bootstrap since bootstrap is
            not that much classy so I moved on tailwindcss and daisyUI. The
            JavaScript library used in the website which Reactjs is A JavaScript
            library for building user interfaces along with it I used marvel API
            for fetching every data. if you wanna contribute{" "}
            <a
              href="https://github.com/krcpr007/MarvelHub"
              target="_blank"
              rel="noreferrer"
              className="hover:underline text-primary"
            >
              here
            </a>{" "}
            is the repository link. happy code!!
            <br />
            <br />
          </p>
          <h1 className="text-xl text-primary">Programing Quote</h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 text-justify">
            {data.en}
          </p>
          <span className="footer text-primary"> -- {data.author}</span>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Link
                to="/"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md  bg-primary hover:bg-indigo-100 md:py-4 md:text-lg md:px-10"
              >
                Home
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="https://github.com/krcpr007/MarvelHub"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md  bg-primary hover:bg-indigo-200 md:py-4 md:text-lg md:px-10 btn btn-primary"
              >
                <FaGithub fontSize={25} />
              </a>
            </div>
          </div>
        </div>
      </main>
      <div className="lg:absolute lg:inset-y-20 lg:right-20 mt-10 md:mt-0 px-4">
        {/* <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt=""/> */}
        <div className="card drop-shadow-2xl card-bordered border border-primary w-72 my-12 ">
          <figure>
            <img src={cardImage} alt="cardImage" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Iron Man
              <div className="badge mx-2 badge-primary">RIP</div>
            </h2>
            <p>
              Wounded, captured and forced to build a weapon by his enemies,
              billionaire industrialist Tony Stark instead created an advanced
              suit of armor to save his life and escape captivity. Now with a
              new outlook on life, Tony uses his money and intelligence to make
              the world a safer, better place as Iron Man
            </p>
            {/* <div className="justify-end card-actions">
              <button className="btn btn-secondary">More info</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
