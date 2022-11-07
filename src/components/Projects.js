import { Card, Button } from 'react-bootstrap';

export default function Projects() {
  return (
    <section id='projects'> 
     <h1>Projects</h1>
    <div className="projects">
    
      <Card className="flip-card-back">
        <Card.Body>
          <Card.Title>Webby</Card.Title>
          <Card.Text>A hobby-centric social media application</Card.Text>
          <div className="techs">
            <img src="/jslogo.png" alt="javascript-logo" />
            <img src="/logo8.png" alt="react.js-logo" />
            <img src="/logo1.png" alt="Redux-logo" />
            <img
              src="https://raw.githubusercontent.com/d3/d3-logo/master/d3-black.png"
              alt="D3-logo"
            />
            <img src="/firebase.png" alt="firebase-logo" />
          </div>
          <Card.Link href="https://github.com/THEM-exclamationpoint/Webby">
            <Button variant="dark"> Github</Button>
          </Card.Link>
          <Card.Link href="https://webby-social.netlify.app">
            <Button variant="dark">Live</Button>
          </Card.Link>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Card.Title>Every Daisy of the Week</Card.Title>
          <Card.Text>A plant-themed online shopping website</Card.Text>
          <div className="techs">
            <img src="/jslogo.png" alt="javascript-logo" />
            <img src="/logo8.png" alt="react.js-logo" />
            <img src="/logo1.png" alt="Redux-logo" />
            <img
              src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png"
              alt="Express-logo"
            />
            <img src="/logo7.png" alt="PostgreSQL-logo" />
          </div>
          <Card.Link href="https://github.com/Sassy-Software-Engineers/Grace-Shopper">
            <Button variant="dark">Github</Button>
          </Card.Link>
          <Card.Link href="https://every-daisy.herokuapp.com/">
            <Button variant="dark">Live</Button>
          </Card.Link>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Eat Up!</Card.Title>
          <Card.Text>
            React Application that gives you a random recipe using the Tasty API
          </Card.Text>
          <div className="techs">
            <img src="/jslogo.png" alt="javascript-logo" />
            <img src="/logo8.png" alt="react.js-logo" />
          </div>
          <Card.Link href="https://github.com/lavenderfi/Eat-Up">
            <Button variant="dark">Github</Button>
          </Card.Link>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Junior Phase Final Project</Card.Title>
          <Card.Text>
            CRUD application for a database of students and campuses
          </Card.Text>
          <div className="techs">
            <img src="/jslogo.png" alt="javascript-logo" />
            <img src="/logo8.png" alt="react.js-logo" />
            <img src="/logo1.png" alt="Redux-logo" />
            <img
              src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png"
              alt="Express-logo"
            />
            <img src="/logo7.png" alt="PostgreSQL-logo" />
          </div>
          <Card.Link href="https://youtu.be/VBvD4EOo9Xc">
            <Button variant="dark">Walk-through</Button>
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
    </section>
  );
}
