import Header from './components/header.jsx'
import Balance from './components/balance.jsx'
import Income from './components/income.jsx'
import Transactionlist from './components/transactionlist.jsx';
import Addtran from './components/addtran.jsx';
import './App.css';

import {GlobalProvider} from './context/GlobalState.js'

function App() {
  return (
    <GlobalProvider>
      <Header / >
      <div className='container'>
        <Balance/>
        <Income/>
        <Transactionlist/>
        <Addtran/>
      </div>

    </GlobalProvider>
  );
}

export default App;
