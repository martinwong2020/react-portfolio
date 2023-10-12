import React, { useEffect } from 'react'
import "./style.css"
import Gumball from "../../images/projects/Gumball.PNG"

import Stock from "../../images/projects/Stock.PNG"

import AI from "../../images/neon-ramen-shop.jpg";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Tic_tac_toe from "../../images/projects/Tic_tac_toe.PNG"
import Pern from "../../images/projects/Pern.PNG"
import Manga from "../../images/projects/Manga.PNG"
import Old_portfolio from "../../images/projects/Old_portfolio.PNG"
import { useState } from 'react'
function Project() {
  const [hover_project,setHover_project]=useState(-1);
  const project_details=[
    {
      name:"Stock Trader",
      skills:"Node.js,API, React, Firebase(Auth & Database), Javascript, Html, CSS",
      image:Stock,
      link:"https://github.com/martinwong2020/Stock_trade"
    },
    {
      name:"Motivational Gumball",
      skills:"React, Node.js, PouchDB, Javascript, Html CSS",
      image:Gumball,
      link: "https://github.com/martinwong2020/Motivation"
    },
    {
      name:"Tic-tac-toe AI",
      skills:"Python, MiniMax algorithm, Pygame(UI)",
      image:Tic_tac_toe,
      link:"https://github.com/martinwong2020/AI-TicTacToe-"
    },
    {
      name:"Cards",
      skills:"C++, Object Oriented Programming",
      image:Gumball,
      link:"https://github.com/martinwong2020/Cards"
    },
    {
      name:"Pern Stack",
      skills:"PostgreSql, Express, React, Node.js, Javascript",
      image:Pern
    },
    {
      name:"Manga Data",
      skills:"React, API, Node.js, Javascript",
      image:Manga,
      link:"https://github.com/martinwong2020/Manga_Search"
    },
    {
      name:"Old Portfolio",
      skills:"Html, CSS, Javascript",
      image:Old_portfolio,
      link:"https://github.com/martinwong2020/portfolio3.0"
    }
  ];
  const card_content_style={
    background: `url(${(hover_project===-1)? AI:project_details[hover_project].image})`,
  }
  const open_link=(url)=>{
    window.open(url, '_blank');
  }
  useEffect(() => {
    console.log(hover_project);
  }, [hover_project]);
  return (
    <div className="project_container">
      {/* <main className="project">
        <div className="search_container"></div>
        <div className="content_container">where</div>
      </main> */}
      <div className="content_container">
        <div className="image_container" style={(hover_project||hover_project===0)?card_content_style:{}}></div>
        <div className="list_container">
          <ul>
            <li>
              <div className="list_title">
                <h1>Projects</h1>  
                <h1>{project_details.length}</h1>
              </div>
            </li>
            {project_details.map((proj,index)=>{
              return (
                <li 
                  key={index}
                  onMouseEnter={()=>setHover_project(index)} 
                  onMouseLeave={()=>setHover_project(-1)}
                >
                  <h1>{proj.name} {(index===4)?"": <OpenInNewIcon className="link_content" onClick={()=>{open_link(proj.link)}}/>}</h1>
                  <h3>Skills/Tools: {proj.skills}</h3>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Project