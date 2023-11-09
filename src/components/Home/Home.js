import "./Home.css"
import Typewriter from "typewriter-effect";
import { Email, Phone } from '@material-ui/icons'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

function Home()
{

    return(

        <section className="section home center">
         <h1>
          Hi, I am <span className='about__name'>Sana Ullah Rasheed</span>
        </h1>
    
      <h2 className="typer"> 
        <Typewriter options={{strings:["A Full Stack Web Developer", "A Sport person","Curious to learn new things"],
        autoStart:true,loop:true,deleteSpeed:50}}/>
      </h2> 


        <p id="des">Adaptable and responsible web developer capable of writing production ready code using HTML, CSS, JavaScript,
         React.Js on the front-end and NodeJs, Express.Js, and MongoDB on the back-end to build single-page applications.</p>
  
 
       <section id="social">
         <a href="https://github.com/SanaUllahRasheed123" target="_blank" aria-label='github' className='link link--icon'> <GitHubIcon /> </a>
         
         <a href="https://www.linkedin.com/in/sana-ullah-5a3844264" target="_blank" aria-label='linkedin' className='link link--icon'> <LinkedInIcon /> </a>
         
         <a href='mailto:sanaullahrasheed3@gmail.com' aria-label="email" className='link link--icon'> <Email/> </a>

         <a href='tel:+923099113463' aria-label="phone" className='link link--icon'> <Phone/> </a>
    
      </section>
     
   
         <a href="https://drive.google.com/file/d/1KhxDJmZtSJxAluWnaMjp5R3wpmBZFKb6/view?usp=sharing" target="_blank" id="resumeButton">
            <span type='button' className='btn btn--outline'>  Resume </span>
          </a>
   
    </section>)
}

export default Home