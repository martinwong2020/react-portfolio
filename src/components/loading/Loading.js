import React from 'react'
import "./style.css"
function Loading(props) {
    const change_state=(e)=>{
        e.preventDefault();
        props.change_state(true);
        props.welcomeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  return (
    <div className="loading_container">
        <div className="button_container">
            <div className='inner_button' onClick={(e)=>{change_state(e)}}>
                <div className="left_arrow" onClick={(e)=>{change_state(e)}}></div>
                <div className="right_arrow" onClick={(e)=>{change_state(e)}}></div>
            </div>   
        </div>
        <div className="note">
            <p>*Note all background images are property of Wall haven for personal use and belong to their respective authors.</p>
        </div>
    </div>
  )
}

export default Loading