import NavBar from './Nav';
import Experience from './Experience';
import Home from './Home';
import Projects from './Projects.js';
import Contact from '../Contact';
import { FadeInSection } from './Fade';

function App() {

  return (
    <div className="App">
      <header className="App-header"> 
     </header>
     <NavBar/>
         <FadeInSection><Home/></FadeInSection>
      <FadeInSection> <Experience /></FadeInSection>
      <FadeInSection><Projects /></FadeInSection>
       <FadeInSection><Contact/></FadeInSection>
       
    </div>
  );
}

export default App;
