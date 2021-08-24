import './App.css';
import axios from 'axios';
import CurrencyList from './Containers/CurrencyList';

const dataFetchHander = async () => {
  try{
    const response = await axios.get('https://api.coincap.io/v2/assets', { mode: 'cors' },)
    response.data.data.map(data => {
      console.log(data.name)
    })
    console.log()
  }catch (err){
    console.log(err)
  }
}

function App() {
  return (
    <div>
        <CurrencyList />
        <button onClick={dataFetchHander}>Run api</button>
    </div>
  );
}

export default App;
