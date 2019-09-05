import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [response, setResposne] = React.useState(null);

  React.useEffect(() => {
    fetch('/stream')
      .then(response => response.body)
      .catch(err => setResposne(err.toString()));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {response && <code>{response}</code>}
      </header>
    </div>
  );
}

export default App;
