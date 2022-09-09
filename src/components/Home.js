import { Button, Card } from 'react-bootstrap';

export default function Home() {
  return (
    <div className="home">
      <img className="photo" src={'/pic.jpg'} alt="Fionas face" />
      <h1>FIONA MURRAY</h1>
      <div style={{ padding: '5px' }}>
        <a
          href={require('../assets/Resume.pdf')}
          download="Fiona-Murray-Resume"
        >
          <Button className="btn btn-dark btn-sm" style={{ margin: '5px' }}>
            Resume
          </Button>
        </a>
        <Button
          className="btn btn-dark btn-sm"
          onClick={() => (window.location = 'mailto:fionam.dev@gmail.com')}
        >
          fionam.dev@gmail.com
        </Button>
      </div>
      <Card>
        <Card.Body>
          <Card.Text>
            Welcome! I'm a software developer, recently graduated from the Grace
            Hopper program at Fullstack Academy.
          </Card.Text>
          <Card.Text>
            I aspire to bring an emphasis on accessibility and diversity to
            every project I build and work on.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
