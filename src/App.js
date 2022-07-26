import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Fiona Murray</h1>
       <Router>
        <NavBar/>
       </Router>
      </header>
      <p>Junior web developer</p>
    </div>
  );
}

export default App;
