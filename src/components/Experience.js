import { Card } from "react-bootstrap";

export default function Experience() {
  return (
    <div className="experience">
      <Card>
        <Card.Body>
          <Card.Title>Student</Card.Title>
          <Card.Title>
            Grace Hopper Program at FullStack Academy
          </Card.Title>
          <Card.Text>
            Currently taking the 3-month intensive course, focusing on
            Javascript and fullstack development.
          </Card.Text>
          <Card.Text>
            Profficient in Javascript, React, Redux, Express, PostreSQL, Sequelize, HTML, CSS, Boostrap, and learning more
          </Card.Text>
        </Card.Body>
      </Card>
      
      <Card>
        <Card.Body>
          <Card.Title>Bachelor's in Psychology</Card.Title>
          <Card.Title>
            Hofstra University
          </Card.Title>
          <Card.Text>
            Graduated in 2020 with minors in LGBT+ Studies and Religion
          </Card.Text>
          <Card.Text>
            Gained skills in communication, research, and advocating for others. I hope to use my background in Psychology to cater to what attracts people in a good application, as well as being sensitive to a diverse customer base.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
