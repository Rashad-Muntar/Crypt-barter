import './App.css';
import { Route, Switch } from 'react-router-dom';
import CryptoList from './Components/CryptoList';

function App() {
  return (
    <div>
      <Switch>
        <CryptoList />
      </Switch>
    </div>
  );
}

export default App;
