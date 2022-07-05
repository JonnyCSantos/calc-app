import { useState } from "react";
import { Input } from "./components/Input";
import { Operator } from "./components/operator";

export const App = () => {
  const [selectedOperator, setSelectedOperator] = useState<string>('')
  
  return (
    <div className="App">
      <div className="content">
        <header>
          <h1><span>CALC</span> APP</h1>
        </header>
        <div className="result">
          <div className="history">
            <span>10 x 10</span>
          </div>
          <div className="equals">
            <span>=</span><span> 100</span>
          </div>
        </div>
        <div className="operator">
          <div className="choose">
            <h2>Escolha a operação</h2>
            <div className="choose__content">
              <Operator type="+" onClick={() =>  setSelectedOperator('+')}/>
              <Operator type="-" onClick={() =>  setSelectedOperator('-')}/>
              <Operator type="x" onClick={() =>  setSelectedOperator('x')}/>
              <Operator type="/" onClick={() =>  setSelectedOperator('/')}/>
            </div>
          </div>
        </div>
        <div className="values">
            <h2>Escolha os valores</h2>
            <div className="values__content">
              <div className="values__item">
                <p>Valor 01</p>
                <Input />
              </div>
              <span className="selectedOperator">{selectedOperator}</span>
              <div className="values__item">
                <p>Valor 02</p>
                <Input />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;