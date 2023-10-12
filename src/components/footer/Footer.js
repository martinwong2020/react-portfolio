import React from 'react'
import "./style.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
    const open_link=(url)=>{
        window.open(url, '_blank');
    }
    return (
        <div className="footer_container">
            <div className="email">
                Contact: martinwong2023bvt@gmail.com
            </div>
            <div className="icon_container">
                <LinkedInIcon className="sc-icons" onClick={()=>{
                                    open_link("https://www.linkedin.com/in/martin-wong-27a354178/")
                                }} />
                <GitHubIcon className="sc-icons" onClick={()=>{
                    open_link("https://github.com/martinwong2020")
                }} />
            </div>
        </div>
    )
}

export default Footer