import React from 'react';
import logo from './logo.svg';
import Numeral from 'numeral';
import './App.css';

function App() {
  const [played, setPlayed] = React.useState([false, false]);
  const [bandwidth, setBandwidth] = React.useState(0);
  const [errors, addError] = React.useState([]);

  React.useEffect(() => {
    fetch('/stream')
      .then(res => {
        const reader = res.body.getReader();

        async function readBytes() {
          try {
            const { done, value } = await reader.read();
            
            if (done) {
              addError(errors.concat([new TypeError('done === true')]));
              return;
            }

            setBandwidth(bytes => bytes += value.length);
            readBytes();
          } catch(error) {
            addError(errors.concat([error]));
          }
        }
        
        readBytes();
      })
      .catch(err => addError(errors.concat([err])));
  }, [errors]);

  function play() {
    setPlayed([true, true]);
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const context = new AudioContext();
    const gainNode = context.createGain();
    const o = context.createOscillator();
    gainNode.gain.value = .001;
    o.connect(gainNode);
    gainNode.connect(context.destination);
    o.type = "sine";
    // o.connect(context.destination);
    o.start();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {!played[0] && <button style={{
          padding: '10px 25px',
          backgroundColor: 'white',
          border: '1px solid rgba(0,0,0,.3)',
          color: 'black',
          borderRadius: '4px'
        }} onClick={play}>Keep running in background for ~1 hour (IPhone)</button>}
        <p onClick={() => window.location.reload()}>streaming: {Numeral(bandwidth).format('0.0 b')}</p>
        {errors.map(error => <code>{error.toString()}</code>)}
      </header>
    </div>
  );
}

export default App;
