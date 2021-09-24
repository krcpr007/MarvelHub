import React from 'react'

const Welcome = () => {
    return (
        <>
            <div id="carouselExampleDark" class="carousel carousel-fade slide" data-bs-ride="carousel" >
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src="https://source.unsplash.com/1600x600/?superhero,villain,spiderman" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            {/* <h5>Marvel Hub</h5> */}
                            <h5 style={{color:"#ff0000"}}>“I choose to run towards my problems, and not away from them. Because that's what– because that's what heroes do.”</h5>
                            <footer class="blockquote-footer mt-2" >
                                <cite title="Source Title">Thor: Ragnarok</cite>
                            </footer>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="https://source.unsplash.com/1600x600/?avengers,marvel,captionamerica" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            {/* <h5>Second slide label</h5> */}
                            <h5 style={{color:"#ff0000"}}>“I shouldn't be alive... unless it was for a reason. I'm not crazy, Pepper. I just finally know what I have to do. And I know in my heart that it's right.”</h5>
                            <footer class="blockquote-footer mt-2" >
                                <cite title="Source Title">Tony Stark, Iron Man </cite>
                            </footer>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://source.unsplash.com/1600x600/?wonda,marvel,ironman" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            {/* <h5>Third slide label</h5> */}
                            <h5 style={{color:"#ff0000"}}>“Compromise where you can. Where you can't, don't. Even if everyone is telling you that something wrong is something right. Even if the whole world is telling you to move, it is your duty to plant yourself like a tree, look them in the eye, and say 'No, you move'.”</h5>
                            <footer class="blockquote-footer my-2" >
                                <cite title="Source Title ">Peggy Carter</cite>
                            </footer>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container mt-3">
                <div class="card mb-3 border-danger text-danger"
                // style={{ maxWidth: "540px" }}
                >
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="https://source.unsplash.com/weekly?fish" style={{ width: "340px" }} class="img-fluid rounded-start m-2" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome
