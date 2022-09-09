import { Card, ListGroup } from 'react-bootstrap';

export default function Experience() {
  return (
    <div className="experience">
      <h2>Education</h2>
      <Card>
        <Card.Body>
          <Card.Title>Grace Hopper Program at FullStack Academy</Card.Title>
          <Card.Text>2022</Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Card.Title>Bachelor's in Psychology</Card.Title>
          <Card.Title>Hofstra University</Card.Title>
          <Card.Text>2020</Card.Text>
          <Card.Text>
            Gained skills in communication, research, and advocating for others.
            I hope to use my background in Psychology to cater to what attracts
            people in a good application, as well as being sensitive to a
            diverse customer base.
          </Card.Text>
        </Card.Body>
      </Card>
      <div>
      <h2 style={{padding:'10px'}}>Technologies</h2>

      <Card>
        <Card.Body>
          <Card.Title>Proficient</Card.Title>
          <ListGroup className="list" variant="flush">
            <ListGroup.Item className="item">Javascript</ListGroup.Item>
            <ListGroup.Item className="item">React</ListGroup.Item>
            <ListGroup.Item className="item">Redux</ListGroup.Item>
            <ListGroup.Item className="item">Express</ListGroup.Item>
            <ListGroup.Item className="item">Node.js</ListGroup.Item>
            <ListGroup.Item className="item">PostgreSQL</ListGroup.Item>
            <ListGroup.Item className="item">Sequelize</ListGroup.Item>
            <ListGroup.Item className="item">Firebase</ListGroup.Item>
            <ListGroup.Item className="item">Git</ListGroup.Item>
            <ListGroup.Item className="item">HTML</ListGroup.Item>
            <ListGroup.Item className="item">CSS</ListGroup.Item>
            <ListGroup.Item className="item">Bootstrap</ListGroup.Item>
            <ListGroup.Item className="item">Material UI</ListGroup.Item>
          </ListGroup>
          </Card.Body>
          </Card>
          <Card>
            <Card.Body>
          <Card.Title>Familiar</Card.Title>
          <ListGroup className="list" variant="flush">
            <ListGroup.Item className="item">Heroku</ListGroup.Item>
            <ListGroup.Item className="item">Phaser</ListGroup.Item>
            <ListGroup.Item className="item">Stripe</ListGroup.Item>
            <ListGroup.Item className="item">Leaflet</ListGroup.Item>
            <ListGroup.Item className="item">D3</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card></div>
    </div>
  );
}
