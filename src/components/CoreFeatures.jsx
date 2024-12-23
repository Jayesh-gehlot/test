import React from 'react'
import "./comman.css"
const CoreFeatures = () => {
  return (
    <div className='core-main-conatiner'>
      <div className='core-left-conatiner'>
        <div className='core-main-card'>
          <div className='core-inner-card'>
            <div className='core-card' >
              <h1 >80K+</h1>
              <p>We have more than students</p>
            </div>
            <div className='core-card' style={{marginTop:"-35px"}}>
              <h1 style={{color:"#FF753A"}}>150+</h1>
              <p>Free online tutorials
              videos avaialble</p>
            </div>
          </div>
          <div className='core-inner-card' >
          <div className='core-card'>
              <h1 style={{color:"#FA578E"}}>90+</h1>
              <p>Daily updated blog
              post maintain</p>
            </div>
            <div className='core-card' style={{marginTop:"-35px"}}>
            <h1 style={{color:" #E682FF"}}>& 3M</h1>
              <p>Job posted everydays with  qualification</p>
            </div>
          </div>
          <div className='core-inner-card' >
          <div className='core-card'>
              <h1 style={{color:"#EF9E48"}}>120+</h1>
              <p>Daily updated blog
              post maintain</p>
            </div>
            <div className='core-card' style={{marginTop:"-35px"}}>
            <h1 style={{color:"#FF753A"}}>3M</h1>
              <p>Job posted everydays with  qualification</p>
            </div>
          </div>
          {/* <div className='core-inner-card' >
            <div className='core-card' >
              <h1 >1</h1>
            </div>
            <div className='core-card'>
              <h1 >2</h1>
            </div>
          </div> */}
        </div>

      </div>
      <div className='core-right-conatiner'>
        <p className='core-main-heading'>Core features</p>
        <h1 className='core-heading'>Smart Jackpots<br/> that you may love this <br/>anytime & anywhere</h1>
        <p className='dec'>Get your tests delivered at let home collect sample<br/> from the victory of the managments that supplies<br/> best design system guidelines ever. Get your tests<br/> delivered at let home collect sample.</p>
        <div className='core-btn'><p className='core-btn-text'>Explore details</p></div>
      </div>
    </div>
  )
}

export default CoreFeatures