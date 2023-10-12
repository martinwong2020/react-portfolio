import React from 'react'
import "./style.css"
function Path() {
  
  const card_info=[
    {
      header:"Intern Guys",
      postion:"Software Engineer Intern",
      time:"11/2022 - 3/2023",
      description:`● Demonstrated skills in building responsive and user-friendly designs to ensure a seamless user experience across different devices and screen sizes.
                   ● Attained knowledge to backend development by setting up and running the server locally, providing valuable insights into the full-stack development process.`
    },
    {
      header:"Google Developer's Club",
      postion:"Tech Lead",
      time:"11/2022 - 3/2023",
      description:`● Actively collaborated with a team to develop a React website with Material-UI and a PDF converter library for a resume
      builder webpage within the club.
      ● Demonstrated strong teamwork skills by effectively coordinating tasks, sharing ideas, and resolving challenges.
      ● Contributed to the creation of a high-quality and impactful project through active collaboration, enhancing both technical
      and interpersonal abilities.`
    },
    {
      header:"Hack The Hood",
      postion:"Data Science Student Developer",
      time:"6/2022 - 9/2022",
      description:`● Utilized Python Libraries(Pandas, Scikit, Matplot) and SQL to clean missing data, display, and manipulate datasets.
      ● Collaboration with peer associates on a weekly basis discussing improvements and approaches to Python projects.
      ● Built a Machine Learning model on a California housing dataset to understand and predict attributes that influence
      housing prices using Python and SciKit.`
    },
    {
      header:"Ascend Leadership Club",
      postion:"Web Developer",
      time:"01/2022 - 07/2022",
      description:`● Increased efficiency by around 40% on the club website by collaborating with a team on a weekly basis to demonstrate
      the media queries and responsive designs I developed in CSS, Javascript, and HTML.
      ● Debugging and problem-solving previous websites and projects using HTML, CSS, and Javascript.
      ● Hosted CyberSecurity Workshop to 30+ club members on the CyberSecurity tools on the internet`
    },
    {
      header:"Victor Pang and Associates",
      postion:"Administrative Office Assistant",
      time:"8/2018 - 8/2021",
      description: `● Updated and managed a substantial database of 1000+ records, ensuring data accuracy and efficient production
      processes for the company.
      ● Significantly improved productivity by implementing a streamlined system for accessing and navigating important data,
      resulting in a 20% increase in efficiency.
      ● Provided consistent communication and administrative support to business leaders, enabling faster decision-making and
      enhancing production levels within the organization.`
    },
    {
      header:"Code Nation",
      postion:"Student Software Developer",
      time:"11/2018 - 2/2020",
      description:`● Worked in a team environment at LaunchDarkly and Salesforce to maintain a high level of productivity.
      ● Developed 10+ front-end projects using HTML, CSS, and JQuery with other Software engineers.
      ● Created a client base Movie website in HTML, CSS, and JavaScript using API alongside a fellow Software Developer.`
    }
  ]
  return (
    <div className="path_container">
      {/* <div className="path_card">
        <div className="card_header">Google Developer's Club</div>
        <div className="card_content">
        
        </div>
      </div> */}
      <div className='card_container'>
        {card_info.map((card,index)=>{
          return(
            <div className="path_card">
              <div className="top_light"></div>
              <div className="card_header">
                {card.header}
              </div>
              <div className="mini_light"></div>
              <div className="card_content">
                <div className="card_sub"> 
                  <div>
                    {card.postion}
                  </div>
                  <div>
                    {card.time}
                  </div>
                </div>
                {card.description}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Path