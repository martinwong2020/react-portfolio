import React from 'react'

function Parallax(props) {
  const component_background={
    background:`url(${props.background})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    height:"80vh",
    width:"100vw"
  }
  return (
    <div style={component_background}className="parallax_container"></div>
  )
}

export default Parallax