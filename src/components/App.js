import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Nav';
import Experience from './Experience';
import Home from './Home';
import Projects from './Projects.js';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
     </header>
      <Router>
         <NavBar/>
         <h1>Fiona Murray</h1>
         <p>Upcoming Software Engineer</p>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/experience' element={<Experience/>}/>
          <Route exact path='/projects' element={<Projects/>}/>
          <Route exact path='/about' />
        </Routes>
       </Router>
       
      
      
    </div>
  );
}

export default App;
