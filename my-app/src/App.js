import logo from './logo.svg';
import './App.css';
import ColorfulMessage from './components/ColorfulMessage';

function App() {
  const onClickButton = () => alert();

  return (
    <>
      <h1>hellow react!</h1>
      <ColorfulMessage color="blue">how are you?</ColorfulMessage>
      <ColorfulMessage color="pink">im fine!</ColorfulMessage>
      <p><button onClick={onClickButton}>OK</button></p>
    </>
  );
}

export default App;
