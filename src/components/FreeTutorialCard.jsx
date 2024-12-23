import React from 'react'
import "./comman.css"
import data from "../utils/files/tutorils.json"
import review from "../utils/images/review.png"
import eye from "../utils/images/Vector.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
const FreeTutorialCard = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
  };
  return (
    <div className='tutorial-main-conatiner'>
      <div className='tutorial-left-conatiner'>
        <div className='background-card'>
          <div className="card" style={{ height: "375px" }}>
            <img className='cardimg' src={`https://images.unsplash.com/photo-1503676382389-4809596d5290?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?width=200&height=1600`} alt="Card Image" />
            <div className="card-content">

              <h1>How to work with prototype design with adobe xd featuring tools</h1>
              <div>
                <img src={eye} alt="Views Icon" />
                <h6>2,538 students watched</h6>
              </div>
            </div>
          </div>

        </div>
        <div className='tutorial-left-inner-conatiner'>

          <Slider {...settings}>
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
      <div className='core-right-conatiner' style={{ padding: "0" }}>
        <p className='core-main-heading'>Free tutorial</p>
        <h1 className='core-heading'>More than  thousand <br /> of free tutorial upload<br /> every weeks</h1>
        <p className='dec'>Get your tests delivered at let home collect sample<br /> from the victory of the managments that supplies<br /> best design system guidelines ever. Get your tests<br /> delivered at let home collect sample.</p>
        <div className='core-btn'><p className='core-btn-text'>Explore details</p></div>
      </div>
    </div>
  )
}

export default FreeTutorialCard