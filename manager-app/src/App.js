import logo from './logo.svg';
import './App.css';
import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

function App() {
  axios.get('http://localhost:7878/').then((response)=> {console.log(response)})
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
