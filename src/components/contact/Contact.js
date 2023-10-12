import React from 'react'
import "./style.css"
function Contact() {
  return (
    <div className="contact_container">
        <form className="contact_content">
            <div className="input_container">
                <input type="email" id="email" placeholder='Email@gmail.com'/>
            </div>
            <div className="input_container">
                <input type="text" id="name" placeholder='Name'/>
            </div>
            <div className="input_container content_container">
                <textarea type="text" id="content" placeholder="Message"></textarea>
            </div>
            <div className="button_container">
                <button type="submit" value="Submit" ><strong>Send</strong></button>
            </div>
        </form>
    </div>
  )
}

export default Contact