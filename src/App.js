import './App.css';
import Number from './components/Number';
import Operator from './components/Operator';
import { useState } from 'react';

function App() {
const [input, setInput] = useState("0")

const checkError = () => {
  if(input === "ERR" || input === "NaN" || input === "0"){
    return ""
  } else {
    return input
  }
}

const clickNum = (num) => {
  let working = checkError()
  setInput(working + num.toString())
}

const clickOperator = (operator) => {
  let working = checkError()
  let lastChar = working.charAt(input.length - 1)
  let copy = working.toString()
  switch(lastChar){
    case '+':
    case '-':
    case '*':
    case '/':
      copy = copy.slice(0, working.length - 1)
      copy += operator
      break;
    default:
      copy = copy + operator;
      break;
  }
  setInput(copy)
}

const clickClear = () => {
  setInput("0")
}

const clickBackspace = () => {
  if(input.length != 1){
  let copy = input.toString()
  copy = copy.slice(0, input.length - 1)
  setInput(copy)
  } else {
    setInput("0")
  }
}

const evaluate = () => {
  let answer;
  try{
  answer = eval(input).toString()
  } catch {
  answer = "ERR"
  }
  setInput(answer);
}


  return (
    <div className="App">
      <div className = "buttons">

      <div className="row">
      <p className="display">{input}</p>
      </div>

      <div className="row">
      <Number num="1" clickNum={clickNum}/>
      <Number num="2" clickNum={clickNum}/>
      <Number num="3" clickNum={clickNum}/>
      <Operator operator="+" handleClick={clickOperator} />
      </div>

      <div className="row">
      <Number num="4" clickNum={clickNum}/>
      <Number num="5" clickNum={clickNum}/>
      <Number num="6" clickNum={clickNum}/>
      <Operator operator="-" handleClick={clickOperator} />
      </div>

      <div className="row">
      <Number num="7" clickNum={clickNum}/>
      <Number num="8" clickNum={clickNum}/>
      <Number num="9" clickNum={clickNum}/>
      <Operator operator="*" handleClick={clickOperator} />
      </div>
      
      <div className="row">
      <button value="B" className="red" onClick={() => clickBackspace()}>&larr;</button>
      <Number num="0" clickNum={clickNum}/>
      <button value="C" className="red" onClick={() => clickClear()}>C</button>
      <Operator operator="/" handleClick={clickOperator} />
      </div>

      <div className="row">
      <button value="=" className="equals" onClick={() => evaluate()}>=</button>
      </div>

      </div>
    </div>
  );
}

export default App;
