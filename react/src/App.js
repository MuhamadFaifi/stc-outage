import React from 'react';
import logo from './logo.svg';
import Numeral from 'numeral';
import useInterval from './useInterval';
import './App.css';

function App() {
  const [played, setPlayed] = React.useState([false, false]);
  const [bandwidth, setBandwidth] = React.useState(0);
  const [errors, addError] = React.useState([]);

  let delay;

  if (errors.length > 0) {
    delay = null;
  } else if (played[0] && !played[1]) {
    delay = null;
  } else {
    delay = 1000;
  }

  useInterval(() => {
    setBandwidth(bandwidth => bandwidth += 3);
  }, delay);

  React.useEffect(() => {
    fetch('/stream').catch(err => addError(errors.concat([err])));
  }, [errors]);

  function play() {
    setPlayed([true, true]);
    const AudioContext = window.AudioContext || window.webkitAudioContext;
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
        {!played[0] && <button onClick={play}>Play</button>}
        <p>bandwidth: {Numeral(bandwidth).format('0.0 b')}</p>
        <p>errors: {errors.length}</p>
        {errors.map(error => <code>{error.toString()}</code>)}
      </header>
    </div>
  );
}

export default App;
