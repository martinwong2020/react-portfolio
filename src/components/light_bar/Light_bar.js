import React from 'react'
import "./style.css"
function Light_bar(props) {
    const light_color={
        backgroundColor:"white",
        height:"0.5vh",
        width:"100vw",
        boxShadow: `0 0 10px #fff, inset 0 0 10px #fff, 0 0 10px ${props.neon_color}, inset 0 0 10px ${props.neon_color}, 0 0 10px ${props.neon_color}, inset 0 0 10px ${props.neon_color}`
    }
    return (
        <div style={light_color}></div>
    )
}

export default Light_bar