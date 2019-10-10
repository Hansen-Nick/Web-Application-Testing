import React, {useState} from 'react';
import './App.css';
import CountTracker from './components/CountTracker'
import Buttons from './components/Buttons'


function App() {

  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0); 

  const addStrike = (strikes) => {
    if (strikes < 2) {
      setStrikes(strikes + 1)
    } else {
      setStrikes(0); 
      setBalls(0)
    }
  }

  const addBall = () => {
    if(balls < 3) {
      setBalls(balls + 1)
    } else {
      setBalls(0);
      setStrikes(0)
    }
  }

  const foul = () => {
    if (strikes < 2) {
      setStrikes(strikes + 1)
    }
  }

  const hit = () => {
    setStrikes(0);
    setBalls(0);
  }

  return (
    <div className="App">
      <CountTracker strikes={strikes} balls={balls} />
      <Buttons addBall={addBall} addStrike={addStrike} hit={hit} foul={foul} setStrikes={setStrikes}/>
    </div>
  );
}

export default App;
