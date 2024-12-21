import React from 'react'
import "./comman.css"
import data from "../utils/files/tutorils.json"
import review from "../utils/images/review.png"
import eye from "../utils/images/Vector.png"
const CardSilder = () => {
    return (
        <div className='card-main-container'>
            <div className='heading-container'>
                <p>Quality features</p>
                <h2>Tutorials that people love most</h2>
            </div>
            <div className='card-list-container'>
                {
                    data.map((item, index) => (
                        <div key={index} className='card'>
                            <img src={`${item.img}?width=200&height=200`} />
                            <div className='card-content'>
                                <div>
                                    <img src={review} />
                                    <p>{item.rating}</p>
                                </div>
                                <h1>{item.decription}</h1>
                                <div>
                                <img src={eye} />
                                <h6>{item.views}</h6>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default CardSilder