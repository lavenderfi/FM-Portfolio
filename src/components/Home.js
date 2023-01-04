import { Card } from 'react-bootstrap';

export default function Home() {
  return (
    <section id='home'><div className='line'></div>
    <div className="home">
      <div>
      <div className='photo' aria-label={'image'} alt={`Fiona's picture`}/>
      <h1>FIONA MURRAY</h1></div>
      <div style={{ padding: '5px' }}>
      <a className='btn btn-dark' role='button'href={require('../assets/Resume.pdf')}
          download="Fiona-Murray-Resume">
              Resume
              </a>  
  
      <Card>
        <Card.Body>
          <Card.Text>
            Welcome! I'm a software developer, graduated from the Grace
            Hopper program at Fullstack Academy.
          </Card.Text>
          <Card.Text>
            I aspire to bring an emphasis on accessibility and diversity to
            every project I build and work on. 
          </Card.Text>
          <Card.Text className='fun-fact'>

          </Card.Text>
        </Card.Body>
      </Card>    
      <span role="img" aria-label="roller-skate" style={{fontWeight:'bold'}}>🛼 Fun Fact:</span>
          <small> I spend my time outside of coding learning flips and tricks on roller-skates at skate-parks!</small>
      </div>          
    </div>
    </section>
  );
}
