import { Button, Card, ListGroup } from 'react-bootstrap';

export default function Home() {
  return (
    <div className="home">
      <Card>
        <Card.Body>
            <a
              href={require('../assets/Resume.pdf')}
              download="Fiona-Murray-Resume"
            >
              <Button className="btn btn-dark btn-sm" style={{ margin: '5px' }}>
                Download my resume
              </Button>
              <Button
                className="btn btn-dark btn-sm"
                onClick={() =>
                  (window.location = 'mailto:fionam.dev@gmail.com')
                }
              >
                fionam.dev@gmail.com
              </Button>
            </a>
          <Card.Text>
            I am a software developer, recently graduated from the
            Grace Hopper program at Fullstack Academy.
          </Card.Text>
          <Card.Text>
            I aspire to bring an emphasis on accessibility and diversity to
            every project I build and work on. Making apps and programs more
            accessible to everyone, starting from the very beginning of
            development is an important goal of mine. When projects are built
            with these things in mind, it benefits everyone and leads to a more
            comprehensive, and log-lasting application.
          </Card.Text>
        </Card.Body>
      </Card>


          <h2>Technologies</h2>

          <Card>
          <Card.Body>
            <ListGroup className='list' variant='flush'>
              <Card.Title>Proficient</Card.Title>
              <ListGroup.Item className='item'>Javascript</ListGroup.Item>
              <ListGroup.Item className='item'>React</ListGroup.Item>
              <ListGroup.Item className='item'>Redux</ListGroup.Item>
              <ListGroup.Item className='item'>Express</ListGroup.Item>
              <ListGroup.Item className='item'>Node.js</ListGroup.Item>
              <ListGroup.Item className='item'>PostgreSQL</ListGroup.Item>
              <ListGroup.Item className='item'>Sequelize</ListGroup.Item>
              <ListGroup.Item className='item'>Firebase</ListGroup.Item>
              <ListGroup.Item className='item'>Git</ListGroup.Item>
              <ListGroup.Item className='item'>HTML</ListGroup.Item>
              <ListGroup.Item className='item'>CSS</ListGroup.Item>
              <ListGroup.Item className='item'>Bootstrap</ListGroup.Item>
              <ListGroup.Item className='item'>Material UI</ListGroup.Item>
              </ListGroup>
              <ListGroup className='list' variant='flush'>
              <Card.Title>Familiar</Card.Title>
              <ListGroup.Item className='item'>Heroku</ListGroup.Item>
              <ListGroup.Item className='item'>Phaser</ListGroup.Item>
              <ListGroup.Item className='item'>Stripe</ListGroup.Item>
              <ListGroup.Item className='item'>Leaflet</ListGroup.Item>
              <ListGroup.Item className='item'>D3</ListGroup.Item>
            </ListGroup>
            </Card.Body>
      </Card>
      </div>
  );
}
