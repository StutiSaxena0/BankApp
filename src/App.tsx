import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useDispatch,useSelector} from 'react-redux'
import { bindActionCreators } from 'redux';
import { RootState } from './state/reducers';
import { actionCretors } from './state';
function App() {
  const state = useSelector((state:RootState) => state.bank)
  const dispatch = useDispatch();

  const { depositeMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCretors , dispatch)

  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={() => depositeMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(500)}>Withdraw</button>
      <button onClick={() => bankrupt()}>Bankrupt</button>
    </div>
  );
}


export default App;
