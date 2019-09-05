import React from 'react';
import logo from './logo.svg';
// import Numeral from 'numeral';
import './App.css';

function App() {
  // const [bandwidth, setBandwidth] = React.useState(0);
  const [errors, addError] = React.useState([]);

  React.useEffect(() => {
    fetch('/stream')
      .then(res => res.body)
      .catch(err => addError(errors.concat([err])));
  }, [errors]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>bandwidth: {Numeral(bandwidth).format('0.0 b')}</p> */}
        <p>errors: {errors.length}</p>
        {errors.map(error => <code>{error.toString()}</code>)}
      </header>
    </div>
  );
}

export default App;
