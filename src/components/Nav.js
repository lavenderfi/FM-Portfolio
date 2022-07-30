import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar () {
    return (
    <div className='container-fluid'>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="/">Home</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to='/experience'>Experience</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/projects'>Projects</Link>
      </li>
      {/* <li className="nav-item">
        <Link className="nav-link" to='/about'>More About Me</Link>
      </li> */}
    </ul>
  </div>
</nav>
</div>
    )
}