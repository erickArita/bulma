import logo from './logo.svg';
import './App.scss';
import { Button } from 'react-bulma-components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button color='primary'>
          Learn React
        </Button>
      </header>
    </div>
  );
}

export default App;
