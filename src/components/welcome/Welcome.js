import React, { useState } from 'react'
import "./style.css"
import {forwardRef} from 'react';

import { useInView } from 'react-intersection-observer';
const Welcome=forwardRef((props, ref)=>{
  const [hover_letter, setHover_letter]=useState(null);

  const [animation_reference,inView]=useInView({
    triggerOnce:true,
  })

  
  return (
    <div className="welcome_container" ref={ref}>
      <div className="welcome_header_container">
        <div className={`welcome_animate_container ${inView? 'glow_border': ""}`} ref={animation_reference}>
          <h1 className={`white-text ${inView? 'glow_text': ""}`} ref={animation_reference}>
            {["W","e","l","c","o","m","e"].map((letter, index)=>{
              console.log("1");
              return (
                <span 
                  key={index} 
                  className={hover_letter===index ? "hovered" : "" }
                  onMouseEnter={()=>setHover_letter(index)}
                  onMouseLeave={()=>setHover_letter(null)}
                >{letter}</span>
              )
            })}
          </h1>
        </div>
        <h2 className={`white-text ${inView ? 'slide-text-1':""}`} ref={animation_reference}>
          Hello! I am glad you came to check out my portfolio. Hope you have a wonderful stay.
        </h2>
      </div>
    </div>
  )
}); 
export default Welcome