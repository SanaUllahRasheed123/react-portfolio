
import SchoolIcon from "@material-ui/icons/School";
import StarRateIcon from "@material-ui/icons/StarRate";
  import { ThemeContext } from '../../contexts/theme';
  import { useContext } from 'react';
  import { useState } from 'react';
  import { useEffect } from 'react';
import {BiStar} from "react-icons/bi"

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


import './About.css'



function About  () {
  

  const [{ themeName }] = useContext(ThemeContext);
  const [linecolor, setlinecolor] = useState(
    themeName === "light" ? "#23283e" : "#fcfcfc"
  );

 useEffect(() => {
    if (themeName === "dark") {
      setlinecolor("#fcfcfc");
    } else {
      setlinecolor("#23283e");
    }
  }, [themeName]);
 

  return (
     
    <div className='about center' id='about'>
      
      <h2>ABOUT <span className='about__name'> ME</span></h2>     
   
    
    
      <div className='about__contact' >

                 
                 <div>
        
                   <img src='https://avatars.githubusercontent.com/u/110677335?s=400&u=3a569a369b55ff870e272253f07fe99e01b237ba&v=4' alt='sanaullah' id='profile'/>
    
                 </div>

                <div>
                    <h4 className='about__desc' style={{ textAlign: 'justify' }}>
                      Hi Everyone, I am Sana Ullah from Lahore, Pakistan.
                      I'm a student of BS Information Technology from University of Education, Township Lahore
                    </h4>
                    <br/>
                  <div id='interest' >
                   <h4 className='about__desc'> Some of my interests apart from Coding :</h4>
               
                   <BiStar className='about__name'/> <span className='about__name'> Attending Live Concerts</span>
                   <br/>
                   <BiStar className='about__name'/> <span className='about__name'> Playing Badminton,Cricket and Football</span>
                   <br/>
                   <BiStar className='about__name'/> <span className='about__name'> Watching Cricket</span>
                   <br/>
                    <BiStar className='about__name' /> <span className='about__name'>Reading Books</span>
                    </div>
                </div>
                 
          </div>     
                  

           
            
               
                
      <h2 id='timeline'>MY <span className='about__name'>EDUCATION</span> </h2>

     
      <VerticalTimeline lineColor={linecolor}>
        <VerticalTimelineElement date=' 2018 -  2020'  icon={<SchoolIcon />} contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            >
      
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Government College of Science Wahdat Road Lahore <br></br> (Front End Development)
            </h4>
            <p data-aos="fade-right" style={{ textAlign: 'justify' }}>
              Joined the College Bootcamp to learn Web Development
              and Data Structures. Also learned many soft skills in the process.
            </p>

        </VerticalTimelineElement>


        <VerticalTimelineElement date='September 2020 - September 2024'  icon={<SchoolIcon />} contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            >
    
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Bachelor in Information Technology (BS IT)
            </h4>
            <p data-aos="fade-right">
               University of Education, Township Lahore
            </p>

        </VerticalTimelineElement>


        <VerticalTimelineElement
            icon={<StarRateIcon />}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
          ></VerticalTimelineElement>

      </VerticalTimeline>
              
           

    

    
    </div>
  )
}

export default About
