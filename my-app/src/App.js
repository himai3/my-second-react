import logo from './logo.svg';
import './App.css';
import ColorfulMessage from './components/ColorfulMessage';
import { useState } from 'react';

function App() {
  const onClickCountUp = () => {
    setNum(num+1);
  }
  const [num, setNum] = useState(0);
  return (
    <>
      <h1>hellow react!</h1>
      <ColorfulMessage color="blue">how are you?</ColorfulMessage>
      <ColorfulMessage color="pink">im fine!</ColorfulMessage>
      <p><button onClick={onClickCountUp}>CountUp</button></p>
      <p>{num}</p>
    </>
  );
}

export default App;
