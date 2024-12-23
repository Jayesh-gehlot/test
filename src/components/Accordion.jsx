import React, { useState } from 'react'
import "./comman.css"
import plus from "../utils/images/Combined shape 15714.png"
import minus from "../utils/images/Combined shape 15712.png"
import accordianJson from "../utils/files/accordion.json"
const Accordion = () => {
  const [showindex, setShowIndex] = useState()
  return (
    <div className='accordion-main-container'>
      <div className='heading-container'>
        <p>Frequent Question</p>
        <h2>Do you have any question</h2>
      </div>
      <div className='accordion-container' >
        {
          accordianJson.map((item, index) => (
            <div className='question-inner-container' onClick={() => { index === showindex ? setShowIndex("") : setShowIndex(index) }}>
              <div className='icon'><img src={index === showindex ? minus : plus} /></div>
              <div className='question-answer-container'>
                <p className='question'>{item.question}</p>
                {index === showindex && <p className='answer'>{item.answer}</p>}
              </div>
            </div>
          ))
        }
        {/* </div> */}
      </div>
    </div>

  )
}

export default Accordion