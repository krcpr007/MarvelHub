import React from 'react'

const Welcome = () => {
    return (
        <>
            <div id="carouselExampleDark" className="carousel carousel-fade slide" data-bs-ride="carousel" >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="https://source.unsplash.com/1600x800/?superhero,villain,spiderman" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            {/* <h5>Marvel Hub</h5> */}
                            <h5 style={{ color: "#ff0000" }}>“I choose to run towards my problems, and not away from them. Because that's what– because that's what heroes do.”</h5>
                            <footer className="blockquote-footer mt-2" >
                                <cite title="Source Title">Thor: Ragnarok</cite>
                            </footer>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://source.unsplash.com/1600x800/?avengers,marvel,captionamerica" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            {/* <h5>Second slide label</h5> */}
                            <h5 style={{ color: "#ff0000" }}>“I shouldn't be alive... unless it was for a reason. I'm not crazy, Pepper. I just finally know what I have to do. And I know in my heart that it's right.”</h5>
                            <footer className="blockquote-footer mt-2" >
                                <cite title="Source Title">Tony Stark, Iron Man </cite>
                            </footer>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/1600x800/?wonda,marvel,ironman" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            {/* <h5>Third slide label</h5> */}
                            <h5 style={{ color: "#ff0000" }}>“Compromise where you can. Where you can't, don't. Even if everyone is telling you that something wrong is something right. Even if the whole world is telling you to move, it is your duty to plant yourself like a tree, look them in the eye, and say 'No, you move'.”</h5>
                            <footer className="blockquote-footer my-2" >
                                <cite title="Source Title ">Peggy Carter</cite>
                            </footer>
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
            <div className="container m-3">
                <div class="card" style={{width: "18rem"}}>
                    <img src="https://source.unsplash.com/random" class="card-img-top p-1" alt="..." />
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome
