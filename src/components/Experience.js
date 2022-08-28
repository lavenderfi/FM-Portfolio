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
            A three-month intensive program focusing on full-stack Javascript development. Throughout this program, we built up practical knowledge of the entire stack of web development, building on each technology and applying these lessons with coding workshops to build different functional applications. During our senior phase, we worked on multiple full-stack applications in teams, building them from scratch based on what we had learned, as well as picking up new technologies as needed.
          </Card.Text>
          <Card.Text>
            Proficient in Javascript, React, Redux, Express, PostgreSQL, Sequelize, HTML, CSS, Bootstrap, and learning more
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
