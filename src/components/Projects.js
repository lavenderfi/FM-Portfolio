import { Card, Button } from 'react-bootstrap';
import projects from './projectData'

export default function Projects() {
  return (
    <section id='projects'> 
     <div className='line'></div>
    <div className="projects">
    {projects.map(project => {
      return (
        <Card>
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>{project.description}</Card.Text>
          <div className="techs">
            {project.techs.map(tech  => {
              return (
                <img src={tech[0]} alt={tech[1]} />
              )
            })}
          </div>
          {project.github &&
              <Card.Link href={project.github}>
              <Button variant="dark">Github</Button>
              </Card.Link>
           }
          {project.live &&
              <Card.Link href={project.live}>
              <Button variant="dark">Live</Button>
              </Card.Link>
           }
          {project.walkThrough &&
              <Card.Link href={project.walkThrough}>
              <Button variant="dark">Walk-through</Button>
              </Card.Link>
           }
        </Card.Body>
      </Card>
      )
    })}

    </div>
    </section>
  );
}
