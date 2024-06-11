import React, { useContext } from 'react';
import Tran from './Tran';
import { GlobalContext } from '../context/GlobalState';

export default function TransactionList() {
  const {transactions} = useContext(GlobalContext);


  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Tran key={transaction.id} transaction={transaction} />))}
  
      </ul>
    </div>
  );
}
