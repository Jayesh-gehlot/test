import React from 'react'
import "./comman.css"
import data from "../utils/files/tutorils.json"
import review from "../utils/images/review.png"
import eye from "../utils/images/Vector.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
const CardSilder = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <div className='card-main-container'>
            <div className='heading-container'>
                <p>Quality features</p>
                <h2>Tutorials that people love most</h2>
            </div>
            <div style={{marginTop:"50px" }}>
                <Slider {...settings} style={{ height: 'auto' }}>
                    {data.map((item, index) => (
                        <div key={index} className="card">
                            <img className='cardimg' src={`${item.img}?width=200&height=1600`} alt="Card Image" />
                            <div className="card-content">
                                <div>
                                    <img src={review} alt="Review Icon" />
                                    <p>{item.rating}</p>
                                </div>
                                <h1>{item.decription}</h1>
                                <div>
                                    <img src={eye} alt="Views Icon" />
                                    <h6>{item.views}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default CardSilder