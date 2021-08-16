import React,{useState} from 'react';
import './App.css';
import TodoList from './components/TodoList';




function App() {
  const [inputval, setInputval]=  useState("");
  const[ items, setItems]= useState([]);
  const handleInput=(event)=>{
    setInputval(event.target.value);
  }

  const handleSumite=()=>{
    setItems((oldItems)=>{
      return[...oldItems, inputval];
    })
  }
  return (
    <div className="bg-gray-700 ">
    <div className="justify-center w-80  h-96 bg-red-700">
      <div className=" bg-red-700">
      <h1>Add Your Todo!</h1>
      </div>
      <input type="text" placeholder="Add Todo Here" onChange={handleInput}/>
      <button onClick={handleSumite}>+</button>
      <ol>
        {items.map((Itemval)=>{
         return <TodoList text={Itemval}/>
        })}
      </ol>
    </div>
    </div>
  );
}

export default App;
