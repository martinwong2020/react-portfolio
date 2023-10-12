import React from 'react'
import { useState } from 'react';
import "./style.css"
import Path from '../path/Path';
import Project from '../project/Project';
function DuoDisplay() {

    const [default_view,setDefault_view]=useState(true);

    return (
        <div className="duo_container">
            <div className="button_switch_container">
                <div className="path_view button" onClick={()=>{setDefault_view(true)}}>Path</div>
                <div className="project_view button" onClick={()=>{setDefault_view(false)}}>Project</div>
            </div>
            <div className={`${default_view ? 'slide_in_animate' : 'slide_in_animate2'}`}>
                {default_view ? <Path /> : <Project />}
            </div>
        </div>
    )
}

export default DuoDisplay