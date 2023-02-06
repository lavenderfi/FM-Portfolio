import { Card, ListGroup } from 'react-bootstrap';

export default function Experience() {
  return (
    <section id="experience">
      <div className="line"></div>
      <div className="experience">
        <div className="edu">
          <h2>
            {' '}
            <span aria-label="books">&#x1F4DA;</span> Education
          </h2>
          <Card>
            <Card.Body>
              <Card.Title>Grace Hopper Program at FullStack Academy</Card.Title>
              <Card.Text>2022</Card.Text>
              <Card.Text>
                A 17-week (553 hours) immersive software engineering program
                based in New York City, centered on full-stack JavaScript
                development, including Node.js, Express, Sequelize ORM for
                PostgreSQL databases, React and Redux; along with HTML, CSS, and
                CS fundamentals.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>Hofstra University</Card.Title>
              <Card.Subtitle>BA of Psychology</Card.Subtitle>
              <Card.Text>2020</Card.Text>
              <Card.Text>
                Gained skills in communication, research, and advocating for
                others. I hope to use my background in Psychology to cater to
                what attracts people in a good application, as well as being
                sensitive to a diverse customer base. I also worked as a mentor
                to new LGBTQ+ students.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <h2 style={{ padding: '10px' }}>
          {' '}
          <span aria-label="computer">&#128187;</span> Technologies
        </h2>
        <div className="techies">
          <Card>
            <Card.Body>
              <Card.Title>Languages</Card.Title>
              <ListGroup className="list" variant="flush">
                <ListGroup.Item className="item">JavaScript</ListGroup.Item>
                <ListGroup.Item className="item">Node.js</ListGroup.Item>
                <ListGroup.Item className="item">HTML5/CSS3</ListGroup.Item>
                <ListGroup.Item className="item">Python</ListGroup.Item>
                <ListGroup.Item className="item">TypeScript</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Libraries/Frameworks</Card.Title>
              <ListGroup className="list" variant="flush">
                <ListGroup.Item className="item">React</ListGroup.Item>
                <ListGroup.Item className="item">Next.js</ListGroup.Item>
                <ListGroup.Item className="item">Redux</ListGroup.Item>
                <ListGroup.Item className="item">Bootstrap</ListGroup.Item>
                <ListGroup.Item className="item">Material UI</ListGroup.Item>
                <ListGroup.Item className="item">Express.js</ListGroup.Item>
                <ListGroup.Item className="item">D3</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Databases/Other</Card.Title>
              <ListGroup className="list" variant="flush">
                <ListGroup.Item className="item">PostgreSQL</ListGroup.Item>
                <ListGroup.Item className="item">Firebase</ListGroup.Item>
                <ListGroup.Item className="item">Stripe</ListGroup.Item>
                <ListGroup.Item className="item">Git</ListGroup.Item>
                <ListGroup.Item className="item">Prisma</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
}
