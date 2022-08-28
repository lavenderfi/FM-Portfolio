import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Nav';
import Experience from './Experience';
import Home from './Home';
import Projects from './Projects.js';
import Email from '../Email';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
     </header>
      <Router>
         <NavBar/>
       <h1><span>FIONA<img className='photo' src={'/pic.jpg'} alt='Fionas face'/></span>MURRAY</h1>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/experience' element={<Experience/>}/>
          <Route exact path='/projects' element={<Projects/>}/>
          <Route exact path='/email' element={<Email/>}/>
        </Routes>
       </Router>
       
      <div className='footer'>
      <footer>      
         <div className='socials'>
           <a href='https://github.com/lavenderfi'><img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='github logo'/></a> 
           <a href='https://www.linkedin.com/in/fiona-murray-58b206157'><img src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt='linked-in logo'/></a> 
        </div>
        </footer>
        </div>
    </div>
  );
}

export default App;
