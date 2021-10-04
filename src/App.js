import React, { useReducer } from 'react';
import reducer, { initialState } from './reducers';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { addOne, applyNumber, changeOperator, clearDisplay, addToMemory, memoryDisplay, memoryClear } from './actions/index';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const handleAddButton = () => {
  //   dispatch(addOne());
  // }

  const handleApplyNumber = (number) => {
    dispatch(applyNumber(number));
  }

  const handleChangeOperator = (operator) => {
    dispatch(changeOperator(operator));
  }

  const handleClearDisplay = (value) => {
    dispatch(clearDisplay(value));
  }

  const handleAddToMemory = (value) => {
    dispatch(addToMemory(value));
  }

  const handleMemoryDisplay = (value) => {
    dispatch(memoryDisplay(value))
  }

  const handleClearMemory = () => {
    dispatch(memoryClear())
  }


  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={() => handleAddToMemory()} value={"M+"}/>
              <CalcButton onClick={() => handleMemoryDisplay()} value={"MR"}/>
              <CalcButton onClick={() => handleClearMemory()} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleApplyNumber(1)} value={1}/>
              {/* onClick={()=> handleAddButton()} */}
              <CalcButton onClick={() => handleApplyNumber(2)} value={2}/>
              <CalcButton onClick={() => handleApplyNumber(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleApplyNumber(4)} value={4}/>
              <CalcButton onClick={() => handleApplyNumber(5)} value={5}/>
              <CalcButton onClick={() => handleApplyNumber(6)} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleApplyNumber(7)} value={7}/>
              <CalcButton onClick={() => handleApplyNumber(8)} value={8}/>
              <CalcButton onClick={() => handleApplyNumber(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleChangeOperator('+')} value={"+"}/>
              <CalcButton onClick={() => handleChangeOperator('*')} value={"*"}/>
              <CalcButton onClick={() => handleChangeOperator('-')} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={() => handleClearDisplay()} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
