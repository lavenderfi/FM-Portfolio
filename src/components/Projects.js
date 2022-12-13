import { Card } from 'react-bootstrap';
import projects from './projectData'
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";


import { Autoplay, Navigation, Pagination,A11y} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


export default function Projects() {
  return (
    <section id='projects'> 
     <div className='line'></div>
     <Swiper
       breakpoints={{
        // when window width is >= 640px
        640: {
          width: 600,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          width: 600,
          slidesPerView: 1,
        },
      }}
     modules={[Navigation,Pagination,Autoplay,A11y]}
     spaceBetween={50}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        pagination={{clickable:true}}
        navigation={true}
        className="mySwiper"
      >
         {projects.map(project => {
      return (
        <SwiperSlide>
      <Card className='proj'>
        <Card.Body key={project.title}>
            <h1>{project.title}</h1>
         <p>{project.description}</p> 
 
          <div className="techs">
            {project.techs.map(tech  => {
              return (
                <img src={tech[0]} alt={tech[1]} key={tech[0]}/>
              )
            })}
          </div>
          {project.github &&
              <a className='btn btn-dark' role='button' href={project.github}>
              Github
              </a>
           }
          {project.live &&
              <a className='btn btn-dark' role='button' href={project.live}>
              Live
              </a>
           }
          {project.walkThrough &&
              <a className='btn btn-dark' role='button' href={project.walkThrough}>
              Walk-Through
              </a>
           } </Card.Body>   
           </Card>   
             </SwiperSlide>
      )
    })}
      
        </Swiper>


    </section>
  );
}
