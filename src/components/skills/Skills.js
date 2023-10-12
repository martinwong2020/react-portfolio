import React from 'react'
import { useState, useRef, useEffect } from 'react';
import "./style.css"

import { useInView } from 'react-intersection-observer';
function Skills() {
  const [data, setData]=useState([
    {
      name:"Javascript",
      description:"Throughout my web development journey, I've harnessed the power of JavaScript to drive a wide range of projects. I've launched and managed numerous React applications, utilizing JavaScript to breathe life into their interactive interfaces and robust state management. Additionally, I've honed my skills with jQuery to enhance website interactivity and user engagement. My proficiency in JavaScript extends to working with APIs, employing asynchronous functions and promises to ensure seamless data retrieval and integration. Furthermore, I've leveraged JavaScript's capabilities to connect web applications to databases and servers, creating efficient, full-stack solutions. JavaScript is my go-to tool for crafting dynamic and responsive web experiences, and I'm excited to continue pushing the boundaries of web development with this versatile language.",
      expanded:false
    },
    {
      name:"React",
      description:"My journey with React has been marked by a series of projects where I've harnessed its power to create dynamic and responsive web applications. React has been my go-to framework for front-end development, seamlessly connecting with back-end systems. Notably, I developed a stock trading web app that leverages React to interact with APIs, enabling real-time trading and data analysis. My expertise extends to integrating React with APIs, facilitating smooth data communication. Whether it's building intuitive user interfaces or using JavaScript within React to connect to servers and collaborate with back-end systems, React has consistently been at the forefront of my web development toolkit, empowering me to bring complex ideas to life with efficiency.",
      expanded:false
    },
    {
      name:"Html/CSS",
      description:"My proficiency in HTML and CSS has been instrumental in my experience in front-end, enabling me to craft visually appealing and user-friendly web designs. I have earned certificates in modern web design and responsive web design, applying these principles to numerous projects. Responsive web design, in particular, has been a cornerstone of my work, ensuring that websites I've contributed to look and function seamlessly across various devices and screen sizes. I've also delved into the creative realm of animations, harnessing the power of keyframes and transitions to add dynamic styling elements that enhance the user experience. HTML and CSS serve as my creative palette, allowing me to bring digital visions to life while adhering to best practices in design and responsiveness. I continue to learn more in animation and develop my interest in 3d animations.",
      expanded:false
    },
    {
      name:"Python",
      description:"My Python journey has led me through a diverse range of projects, from data science endeavors to cutting-edge artificial intelligence applications. I've harnessed Python's capabilities in data science, where I've tackled complex projects involving data analysis and manipulation. My experience extends to the realm of machine learning and AI, where I've delved into various models and algorithms, including game AI development featuring algorithms like Minimax and A*. Additionally, I've ventured into front-end development using Python with the Flask framework, broadening my skill set to create dynamic web applications.",
      expanded:false
    },
    {
      name:"Server",
      description:"My journey in server-side development has been centered around Node.js, a powerful runtime that I've used to launch numerous projects. In combination with Express.js, I've bridged the gap between front-end and back-end, creating robust and responsive web applications. My proficiency with this technology stack has allowed me to architect scalable and efficient back-end systems that complement the user experience. I've also expanded my server-side expertise by diving into the PERN stack (PostgreSQL, Express.js, React, and Node.js), gaining valuable knowledge and hands-on experience in building full-stack applications. Additionally, I've utilized Postman for backend server testing, ensuring the reliability and functionality of the systems I've developed.",
      expanded:false
    },
    {
      name:"Database",
      description:"My experience with databases spans a wide spectrum of technologies, enabling me to tailor solutions to diverse project requirements. I've employed Firebase in a stock trading project, effectively storing user data and implementing user authentication seamlessly. My expertise extends to SQL databases, where I've worked with SQLite and PostgreSQL, crafting robust and efficient database systems for various applications. Additionally, I've utilized local storage mechanisms and PouchDB to enhance data storage and synchronization.",
      expanded:false
    },
    {
      name:"C++",
      description:"My journey with C++ has been an immersive exploration into the world of object-oriented programming and low-level system interaction. Proficiently wielding C++, I've crafted a diverse range of projects, including essential data organization tools and applications. My expertise in C++ has allowed me to work with operating systems.  Moreover, my journey extends beyond high-level languages, encompassing in-depth forays into C and assembly languages. These experiences have granted me valuable insights into computer system internals and knowledge at machine levels.",
      expanded:false
    },
    {
      name:"AI/ML",
      description:"My journey in machine learning (ML) and artificial intelligence (AI) has been a captivating exploration of data-driven insights and intelligent decision-making systems. I've acquired valuable experience by working with diverse datasets, honing my skills in training models on training sets and evaluating their performance on testing sets. One of my projects integrates image recognition, where I developed a solution to identify flowers, employing neural networks and different activation functions to achieve accurate predictions. Additionally, I've delved into AI for gaming, creating games and implementing AI opponents using algorithms like A* and Minimax to provide engaging challenges for users. This multifaceted journey in ML and AI has empowered me to harness data and algorithms to solve real-world problems and create interactive experiences.",
      expanded:false
    },

  ]);
  const toggleExpand=(index)=>{
    const updatedata=[...data]
    updatedata[index].expanded=!updatedata[index].expanded;
    setData(updatedata);
  }

  const [animation_reference,inView]=useInView({
    triggerOnce:true,
  })
  const isEven=(index)=>{
    return (index%2==0);
  }
  return (
    <div className="skills_container">
      <h1 className="skills_header">Technical Skills</h1>
      <p className="skills_header_caption"><em>*Click on the skills to learn more*</em></p>
      <main className="skill_in_container">
        {data.map((data,index)=>{
          return(
            <div className={`card_container 
              ${isEven(index)? `${inView ?'slide_right_active':'slide_right_inactive'}`:`${inView ?'slide_left_active':'slide_left_inactive'}`}`} 
              ref={animation_reference}
            >
              <div className={`card ${data.expanded? 'card_expand':''}`}  onClick={()=>{
                toggleExpand(index);
              }} >
                <h1>{data.name}</h1>
              </div>
              <div className={`card_content ${data.expanded? 'card_content_expand':''}`}>{data.description}</div>
            </div>
          )
        })}
      </main>
    </div>
  )
}

export default Skills