import React from 'react'

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="mt-5 carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators my-0">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active indicate" aria-current="true" aria-label="Slide 1" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} className="indicate" aria-label="Slide 2" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} className="indicate" aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="../images/carousel1.png" className="d-block w-100" alt="..." />
                <div className='carousel-text'>
                    <h1>Discover | Optimize | Share</h1>
                    <p>Explore the world of user experiences.</p>
                    <div>
                        <button >Try For free</button>
                        {/* <img className="m-0" alt="logo" src="/images/logo.png" /> */}
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <img src="../images/carousel1.png" className="d-block w-100" alt="..." />
                <div className='carousel-text'>
                    <h1>Discover | Optimize | Share</h1>
                    <p>Explore the world of user experiences.</p>
                    <button >Try For free</button>
                </div>
            </div>
            <div className="carousel-item">
                <img src="../images/carousel1.png" className="d-block w-100" alt="..." />
                <div className='carousel-text'>
                    <h1>Discover | Optimize | Share</h1>
                    <p>Explore the world of user experiences.</p>
                    <button >Try For free</button>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
        </button>
    </div>
  )
}

export default Carousel