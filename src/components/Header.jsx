import React from 'react'
import "./comman.css"
import logo from "../utils/images/logo.png"
import arrow from "../utils/images/icons8-expand-arrow-26.png"
import Rating from "../utils/images/rating.png"
import frame from "../utils/images/Frame.png"
import search from "../utils/images/Combined shape 15225.png"
import paypal from "../utils/images/paypal.png"
import google from "../utils/images/google.png"
import dropbox from "../utils/images/Dropbox_logo_2017.png"
import image from "../utils/images/image (1).png"
import pattern from "../utils/images/pattern.png"

const Header = () => {
    return (
        <div className='header-main-container'>
            <div className='header-inner-container'>
                <div className='header-left-container'>
                    <div className='header-menu-bar'>
                        <div className='logo-container'>
                            <img src={logo} />
                        </div>
                        <div className='list-container'>
                            <div><p>Home</p> </div>
                            <div><p>Adversite</p><img src={arrow} /></div>
                            <div><p>Support</p><img src={arrow} /></div>
                            <div><p>Contact</p></div>
                        </div>
                    </div>
                    <div className='header-content-container'>
                        <div className='header-content-inner-container'>
                            <div className='rating-container'>
                                <img src={Rating} />
                                <p>Trused by over 4,332 students</p>
                            </div>
                            <div>
                                <h1>Learn Design <br />with Nia Matos</h1>
                                <div className='frame-container'><img src={frame} />
                                </div>
                            </div>
                            <p className='dec'>Get your blood tests delivered at let home collect sample<br></br> from the victory of the managments that supplies best4
                                <br></br>
                                design system guidelines ever.</p>
                            <div className='search-container'>
                                <p>Search Course Name</p>
                                <img src={search} />
                            </div>
                            <div className='social-media-conatiner'>
                                <p>Sponsored by :</p>
                                <img src={paypal} />
                                <img src={google} />
                                <img src={dropbox} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right-container'>

                </div>
                <div className='video-main-conatiner'>
                    <div className='video-container'>
                        <img src={image} />
                        <div className='video'>
                            {/* <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/ppR_QhxqgEE?autoplay=1&loop=1&playlist=ppR_QhxqgEE&mute=1"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe> */}
                        </div>
                    </div>
                    <div className='pattern-container'>
                        <img src={pattern} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header