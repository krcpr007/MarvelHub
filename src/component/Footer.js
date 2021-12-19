import React from "react";

const Footer = ({charName}) => {
  return (
    <div>
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "#caced1" }}
      >
        <div className="container p-4">
          <section className="">
            <div className="row">
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <img
                    src={`https://source.unsplash.com/daily?,marvel`}
                    className="w-100"
                    alt="..."
                  />
                  <a href="\">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <img
                    src="https://source.unsplash.com/daily?ironman"
                    className="w-100"
                    alt="..."
                  />
                  <a href="\">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <img
                    src="https://source.unsplash.com/daily?marvel,kingpin"
                    className="w-100"
                    alt="..."
                  />
                  <a href="\">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <img
                    src="https://source.unsplash.com/daily?thor,marvel"
                    className="w-100"
                    alt="..."
                  />
                  <a href="\">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <img
                    src="https://source.unsplash.com/daily?groot,marvel"
                    className="w-100"
                    alt="..."
                  />
                  <a href="\">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                <div
                  className="bg-image hover-overlay ripple shadow-1-strong rounded"
                  data-ripple-color="light"
                >
                  <img
                    src="https://source.unsplash.com/daily?avengers,marvel"
                    className="w-100"
                    alt="..."
                  />
                  <a href="\">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Section: Images --> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a
            className="text-white"
            style={{ textDecoration: "none" }}
            href="https://www.instagram.com/cr7.rajan"
          >
            {" "}
            Rajan
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </div>
  );
};

export default Footer;
