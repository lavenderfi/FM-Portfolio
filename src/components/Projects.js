import {projects,descriptions} from './projectData'
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Autoplay, Navigation, Pagination,A11y} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from 'react-bootstrap/Button'

export default function Projects() {
  const [show, setShow] = useState(false);
  let [current,setCurrent] = useState(0)
  const handleClose = () => {
    setShow(false)
    ;}
  const handleShow = (e) => {
    setShow(true);
    setCurrent(e.target.value)
  }
  const chooseDescription = () => {
    let proj = descriptions.filter(proj => {
      return Number(current) === Number(proj.id)
    })
    return `${proj[0].description}`
  }
  return (
    <section id='projects' className='projects'> 
     <div className='line'></div>
     <h1>Projects</h1>
     <Swiper
       breakpoints={{
        // when window width is >= 640px
        640: {
          width: 600,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          width: 700,
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
        <div>
        <SwiperSlide className='proj' key={project.title} style={{borderRadius:'10px'}}>
      <div >
        <div>
            <h1>{project.title}</h1>
         <p>{project.description}</p> 
 <Button size='sm' onClick={handleShow} value={project.id}>More</Button>
          <div className="techs">
            {project.techs.map((tech,i)  => {
              return (
                <img src={tech[0]} alt={tech[1]} key={i}/>
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
           } </div>   
           </div>  
           
             </SwiperSlide>
                    
             </div>
      )
    })}
       <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered style={{color:'black'}}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {chooseDescription()}</Modal.Body>
      </Modal>
        </Swiper>


    </section>
  );
}
