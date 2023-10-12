import React from 'react'
import "./style.css"
import { useEffect } from 'react';
// import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useInView } from 'react-intersection-observer';
function AboutMe() {
    const about_sentence="Hello! Glad to have you here! I am a current senior at the University of California, Davis studying computer science. I am an aspiring software and full-stack developer who has worked on front-end and backend technologies and wish to continue to share my knowledge while also continuing to grow. I have developed knowledge in Front end skills such as HTML, CSS, Javascript, React, and much more. Alongside front-end, I have developed skills on backend using Node.js, Express, Firebase, SQL, and much more. I continue to hone and excel my skills by having the opportunity to work with clubs such as Google Developers Club and Ascend.";
    const open_link=(url)=>{
        window.open(url, '_blank');
    }
    const [animation_reference,inView]=useInView({
        triggerOnce:true,
      })
    useEffect(() => {
        if(inView){
            const words=document.querySelectorAll('.hightlight_word');
            words.forEach((word, index) => {
                setTimeout(() => {
                    word.classList.add('animate_highlight');
                }, index * 100);
            });
        }
      }, [inView]);
    return (
        <div className="about_me_container">
            {/* <div className="parallax">

            </div> */}
            <main className="about_me_content">
                <div className="about_me_intro">
                    <h1>Martin Wong</h1>
                    <h3 ref={animation_reference}>
                        {about_sentence.split(" ").map((word,index)=>{
                            return(
                                <span className="hightlight_word" key={index} style={{ color:"black" }}>
                                    {word}{' '}
                                </span>
                            )
                        })}
                        {/* or working for companies such as Intern Guys. */}
                    </h3>
                    <div className="icon_container">
                            <LinkedInIcon className="sc-icons" onClick={()=>{
                                open_link("https://www.linkedin.com/in/martin-wong-27a354178/")
                            }} />
                            <GitHubIcon className="sc-icons" onClick={()=>{
                                open_link("https://github.com/martinwong2020")
                            }} />
                        
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AboutMe