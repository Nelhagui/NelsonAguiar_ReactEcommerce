import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Desafío 1
        </p>
        <a
          className="App-link"
          href="https://google.com.ar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Googlear
        </a>
      </header>
    </div>
  );
}

export default App;
