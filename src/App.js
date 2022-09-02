import logo from './logo.svg';
import './App.css';
import Game from './Game';
import Random from './Random';
import Button from './Button';
import BrokenButton from './BrokenButton';
import Exp from './Exp';
function App() {
  return (
    <div className="App">
      <Game />
     {/* <Random maxNum={10}/> */}
     <Button />
     <BrokenButton />
     <Exp />
    </div>
  );
}

export default App;
