import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meep Moop</h1>
        <h2>This is React.</h2>
        <img src={logo} className="App-logo" alt="logo" />
        {/* WARNING: This will hack NASA. DO NOT RUN! */}
        <code>
          if <b>ice is cool</b> = boop <b>end</b>
        </code>
      </header>
    </div>
  );
}

export default App;
