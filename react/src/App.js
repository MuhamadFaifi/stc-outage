import React from 'react';
import logo from './logo.svg';
import Numeral from 'numeral';
import useInterval from './useInterval';
import './App.css';

function App() {
  const [bandwidth, setBandwidth] = React.useState(0);
  const [errors, addError] = React.useState([]);

  useInterval(() => {
    setBandwidth(bandwidth => bandwidth += 3);
  }, errors.length === 0 ? 1000 : null);

  React.useEffect(() => {
    fetch('/stream').catch(err => addError(errors.concat([err])));
  }, [errors]);

  function play() {
    const context = new AudioContext();
    const o = context.createOscillator();
    o.type = "sine";
    o.connect(context.destination);
    o.start();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={play}>Play</button>
        <p>bandwidth: {Numeral(bandwidth).format('0.0 b')}</p>
        <p>errors: {errors.length}</p>
        {errors.map(error => <code>{error.toString()}</code>)}
      </header>
    </div>
  );
}

export default App;
