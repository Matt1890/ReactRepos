import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <code>src/App.js</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>This is an H1</h1>
        <p>This is a paragraph element</p>
        <ul>
          <li>This is a list item</li>
          <li>Another list item</li>
          <li>yet another list item</li>
        </ul>
      </header>
    </div>
    
  );
}

export default App;
