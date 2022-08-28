

export default function Home() {

  return (
    <div className="home">
      <div className="card">
        <div className="card-body">
          <div className="button">
            <a href={require("../assets/Resume.pdf")} download='Fiona-Murray-Resume'>
            <button type="button" className="btn btn-outline-secondary">
              Download my resume
            </button>
            </a>
          </div>
          <p className="card-text">
            Hello, welcome! I am an aspiring software engineer, currently
            studying with FullStack Academy through the Grace Hopper Program
          </p>
          <p className="card-text">
            Thus far, I have developed proficiency mainly in Javascript, and
            learned how to build responsive, full-stack programs with React and
            Express. During my time at Fullstack Academy, I have also explored
            multiple technologies on my own such as Bootstrap, Phaser.io, and
            Firebase. I am consistently exploring and learning different technologies and hope to continue learning throughout my career.
          </p>
          <p className="card-text">
            I aspire to bring an emphasis on accessibility and diversity to every
            project I build and work on. Making apps and programs more
            accessible to everyone, starting from the very beginning of
            development is an important goal of mine. When projects are built
            with these things in mind, it benefits everyone and leads to a more
            comprehensive, and log-lasting application. 
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Technologies Used</h4>
          <p className="card-text">
            <ul className="list-group">
              <li className="list-group-item">Javascript</li>
              <li className="list-group-item">Redux</li>
              <li className="list-group-item">React</li>
              <li className="list-group-item">HTML</li>
              <li className="list-group-item">CSS</li>
              <li className="list-group-item">Bootstrap</li>
              <li className="list-group-item">Material UI</li>
              <li className="list-group-item">Express</li>
              <li className="list-group-item">PostgreSQL</li>
              <li className="list-group-item">Sequelize</li>
              <li className="list-group-item">Firebase</li>
              <li className="list-group-item">Git CLI</li>
              <li className="list-group-item">Heroku</li>
              <li className="list-group-item">Phaser</li>
              <li className="list-group-item">Stripe</li>
              <li className="list-group-item">Leaflet</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
