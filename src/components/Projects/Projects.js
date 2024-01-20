import {FaReact} from "react-icons/fa"
import {SiCss3,SiHtml5,SiTailwindcss,SiTypescript,SiNextdotjs} from "react-icons/si"
import {TbApi} from "react-icons/tb"
import {IoLogoJavascript} from "react-icons/io"

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


import '../ProjectContainer/ProjectContainer.css'
import './Projects.css'


function Projects()
{
  


  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title about_project' >Projects</h2>


      <div className='project' id='project'>

{/* <-------------------------------------------------1 start-------------------------------------------> */}

<div>
<Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
             <img src="https://github.com/SanaUllahRasheed123/image-gallery/blob/master/Nike_app_1.JPG?raw=true" alt="Image 1"/>
            </SplideSlide>
           <SplideSlide>
           <img src="https://github.com/SanaUllahRasheed123/image-gallery/blob/master/Nike_app_2.JPG?raw=true" alt="Image 2"/>
           </SplideSlide>

           <SplideSlide>
           <img src="https://github.com/SanaUllahRasheed123/image-gallery/blob/master/Nike_app_3.PNG?raw=true" alt="Image 3"/>
           </SplideSlide>

           <SplideSlide>
           <img src="https://github.com/SanaUllahRasheed123/image-gallery/blob/master/Nike_app_4.PNG?raw=true" alt="Image 4"/>
           </SplideSlide>

           <SplideSlide>
           <img src="https://github.com/SanaUllahRasheed123/image-gallery/blob/master/Nike_app_5.PNG?raw=true" alt="Image 5"/>
           </SplideSlide>

           <SplideSlide>
           <img src="https://github.com/SanaUllahRasheed123/image-gallery/blob/master/Nike_app_6.PNG?raw=true" alt="Image 6"/>
           </SplideSlide>

           <SplideSlide>
           <img src="https://github.com/SanaUllahRasheed123/image-gallery/blob/master/Nike_app_7.PNG?raw=true" alt="Image 7"/>
           </SplideSlide>

           <SplideSlide>
           <img src="https://github.com/SanaUllahRasheed123/image-gallery/blob/master/Nike_app_8.PNG?raw=true" alt="Image 8"/>
           </SplideSlide>

           <SplideSlide>
           <img src="https://github.com/SanaUllahRasheed123/image-gallery/blob/master/Nike_app_9.PNG?raw=true" alt="Image 9"/>
           </SplideSlide>


        </Splide>
</div>

<div>

  <h3 className="about_project">Nike Website</h3>

  <p className='project__description' style={{ textAlign: 'justify' }}>

  Explore Nike's online world, where style meets performance. Our website, crafted by a talented team in just five days, showcases top-notch sportswear and iconic footwear. Dive into a user-friendly experience that reflects our dedication to excellence. Elevate your online shopping with Nike - where innovation and style come together 
  </p>


  <ul className='project__stack' >
 
    <li className='project__stack-item' id='stacks'>
      {/* <SiHtml5 size={40} /> */}
      <FaReact size={40}/>
      <SiTailwindcss size={40}/>

       <SiTypescript size={40} />
      <SiNextdotjs size={40}/>


    </li>

  </ul>


   <div id='b'>
       <a href="https://nike-ten-xi.vercel.app/#home"  target="_blank">
            <span type='button' className='btn btn--outline'>  Watch Live </span>
          </a>


          <a href="https://github.com/SanaUllahRasheed123/nike"  target="_blank">
            <span type='button' className='btn btn--outline'>  View Code </span>
          </a>
    
     </div>


</div> 


</div>

{/* <-------------------------------------------------1 End-------------------------------------------> */}

{/* <-------------------------------------------------2 start-------------------------------------------> */}

    <div className='project' id='project'>

      <div>
         <Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
             <img src="https://github.com/SanaUllahRasheed123/image-gallery/blob/master/travel_app_1.JPG?raw=true" alt="Image 1"/>
            </SplideSlide>
           <SplideSlide>
           <img src="https://github.com/SanaUllahRasheed123/image-gallery/blob/master/travel_app_2.JPG?raw=true" alt="Image 2"/>
           </SplideSlide>

           <SplideSlide>
           <img src="https://github.com/SanaUllahRasheed123/image-gallery/blob/master/travel_app_3.JPG?raw=true" alt="Image 3"/>
           </SplideSlide>

           <SplideSlide>
           <img src="https://github.com/SanaUllahRasheed123/image-gallery/blob/master/travel_app_4.JPG?raw=true" alt="Image 4"/>
           </SplideSlide>

           <SplideSlide>
           <img src="https://github.com/SanaUllahRasheed123/image-gallery/blob/master/travel_app_5.JPG?raw=true" alt="Image 5"/>
           </SplideSlide>

           <SplideSlide>
           <img src="https://github.com/SanaUllahRasheed123/image-gallery/blob/master/travel_app_6.JPG?raw=true" alt="Image 6"/>
           </SplideSlide>

       

        </Splide>
      </div>
   
     <div>

        <h3 className="about_project">Travel App</h3>

        <p className='project__description' style={{ textAlign: 'justify' }}>
        
Discover and plan your journeys effortlessly with the Travel App. Explore destinations, find hotels, flights, and activities. Access details like reviews, prices, and key attractions. Your ultimate travel companion for seamless adventures.
        </p>

   
        <ul className='project__stack' >
       
          <li className='project__stack-item' id='stacks'>
          <FaReact size={40}/>
      <SiTailwindcss size={40}/>

       <SiTypescript size={40} />
      <SiNextdotjs size={40}/>

          </li>
      
        </ul>


   
   


      <div id='b'>
       <a href="https://sanaullahrasheed123-app-travel.vercel.app/"  target="_blank">
            <span type='button' className='btn btn--outline'>  Watch Live </span>
          </a>


          <a href="https://github.com/SanaUllahRasheed123/app_travel.git" target="_blank" >
            <span type='button' className='btn btn--outline'>  View Code </span>
          </a>
    
     </div>

  
  </div> 


  </div>

{/* <-------------------------------------------------2 end-------------------------------------------> */}


{/* <-------------------------------------------------3 start-------------------------------------------> */}

<div className='project' id='project'>

<div>
<Splide  options={ { rewind: true , gap   : '1rem', heightRatio:.53 } } aria-label="React Splide Example">
            <SplideSlide>
             <img src="https://github.com/SanaUllahRasheed123/image-gallery/blob/master/e-comm-app_1.PNG?raw=true" alt="Image 1"/>
            </SplideSlide>
           <SplideSlide>
           <img src="https://github.com/SanaUllahRasheed123/image-gallery/blob/master/e-comm-app_2.PNG?raw=true" alt="Image 2"/>
           </SplideSlide>

           <SplideSlide>
           <img src="https://github.com/SanaUllahRasheed123/image-gallery/blob/master/e-comm-app_3.PNG?raw=true" alt="Image 3"/>
           </SplideSlide>

           <SplideSlide>
           <img src="https://github.com/SanaUllahRasheed123/image-gallery/blob/master/e-comm-app_4.PNG?raw=true" alt="Image 4"/>
           </SplideSlide>

           <SplideSlide>
           <img src="https://github.com/SanaUllahRasheed123/image-gallery/blob/master/e-comm-app_5.PNG?raw=true" alt="Image 5"/>
           </SplideSlide>

           <SplideSlide>
           <img src="https://github.com/SanaUllahRasheed123/image-gallery/blob/master/e-comm-app_6.PNG?raw=true" alt="Image 6"/>
           </SplideSlide>

           <SplideSlide>
           <img src="https://github.com/SanaUllahRasheed123/image-gallery/blob/master/e-comm-app_7.PNG?raw=true" alt="Image 7"/>
           </SplideSlide>

           <SplideSlide>
           <img src="https://github.com/SanaUllahRasheed123/image-gallery/blob/master/e-comm-app_8.PNG?raw=true" alt="Image 8"/>
           </SplideSlide>

           <SplideSlide>
           <img src="https://github.com/SanaUllahRasheed123/image-gallery/blob/master/e-comm-app_9.PNG?raw=true" alt="Image 9"/>
           </SplideSlide>

           <SplideSlide>
           <img src="https://github.com/SanaUllahRasheed123/image-gallery/blob/master/e-comm-app_10.PNG?raw=true" alt="Image 10"/>
           </SplideSlide>

           <SplideSlide>
           <img src="https://github.com/SanaUllahRasheed123/image-gallery/blob/master/e-comm-app_11.PNG?raw=true" alt="Image 11"/>
           </SplideSlide>


           

        </Splide>
</div>

<div>

  <h3 className="about_project">Cara E-commerce Web App</h3>

  <p className='project__description' style={{ textAlign: 'justify' }}>
  Our project portfolio proudly showcases the successful development and implementation of the Cara E-commerce Website. As a cutting-edge online shopping platform, Cara seamlessly blends user-friendly design with robust functionality to deliver an unparalleled shopping experience.
  </p>


  <ul className='project__stack' >
 
    <li className='project__stack-item' id='stacks'>
      <SiHtml5 size={40} />
       <IoLogoJavascript size={40} />
      <SiCss3 size={40}/>
      {/* <FaReact size={40}/> */}

    </li>

  </ul>


   <div id='b'>
       <a href="https://sanaullahrasheed123-e-commerce-store.vercel.app/"  target="_blank">
            <span type='button' className='btn btn--outline'>  Watch Live </span>
          </a>


          <a href="https://github.com/SanaUllahRasheed123/E-commerce.git"  target="_blank">
            <span type='button' className='btn btn--outline'>  View Code </span>
          </a>
    
     </div>


</div> 


</div>

{/* <-------------------------------------------------3 end-------------------------------------------> */}



    </section>
  )
}

export default Projects
