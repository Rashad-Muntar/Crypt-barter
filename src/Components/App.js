import { Route, Switch } from 'react-router-dom';
import CryptoList from '../Containers/Home';
import CryptoDetails from '../Containers/CryptoDetails';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" component={CryptoList} exact />
        <Route path="/details/:id" component={CryptoDetails} />
        <Route>Oooops 404 NOT FOUND</Route>
      </Switch>
    </div>
  );
}

export default App;
