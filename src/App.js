import logo from './logo.svg';
import './App.css';
import Counter from "./counter"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter incrementer = {2}/>

      </header>
    </div>
  );
}

export default App;
