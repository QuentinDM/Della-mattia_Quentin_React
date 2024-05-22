import data from '../data.json';
import '../App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {console.log(data)}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header>
    </div>
  );
}

export default App;
