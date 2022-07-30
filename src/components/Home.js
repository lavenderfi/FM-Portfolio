export default function Home() {
  return (
    <div className="home">
        
      <div className="card">
        <div className="card-body">
          <div className="button">
            <button type="button" className="btn btn-outline-secondary">
              Download my resume
            </button>
          </div>
          <p className="card-text">
            Hello, welcome! I am an aspiring software engineer, currently
            studying with FullStack Academy through the Grace Hopper Program
          </p>
          <p className="card-text">
            Thus far, I have developed profficiency mainly in Javascript, and
            learned how to build responsive, full-stack programs with React and
            Express. I have also gained familiarity with CSS and Bootstrap. In
            the future, I hope to explore and develop skills in Python and React
            Native as well.
          </p>
          <p className="card-text">
            I hope to bring an emphasis on accessibility and diversity to every
            project I build and work on. Making apps and programs more
            accessible to everyone, starting from the very beginning of
            development is an important goal of mine. When projects are built
            with these things in mind, it benefits everyone and leads to a more
            comphrensive, and log-lasting application.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Skills</h4>
          <p className="card-text">
            <ul className="list-group">
              <li className="list-group-item">Javascript</li>
              <li className="list-group-item">React/Redux</li>
              <li className="list-group-item">PostreSQL/Sequelize</li>
              <li className="list-group-item">HTML</li>
              <li className="list-group-item">CSS</li>
              <li className="list-group-item">Bootstrap</li>
              <li className="list-group-item">Express</li>
            </ul>
          </p>
        </div>
      </div>

    </div>
  );
}
