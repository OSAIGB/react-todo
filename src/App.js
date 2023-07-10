
import './App.css';
import { useState } from 'react';

function App() {
const  [todo, setTodo] = useState([])
const [inputValue, setInputValue] = useState('')
const [editIndex, setEditIndex] = useState(null)
const [categories, setCatogories] = useState(false)

const input = (e) =>{
  setInputValue(e.target.value)
}


const newInput = () =>{
  if(inputValue){
    if(editIndex !== null){
      const newTodo = [...todo]
      newTodo[editIndex] = inputValue
      setTodo(newTodo)
      setEditIndex(null)
    } else{
      setTodo([...todo, inputValue])
    
    }
    setInputValue('')
  }
}

const editButton = (index) =>{
  setInputValue(todo[index])
  setEditIndex(index)
}

const deleteInput = (index) => {
  const newTodo = todo.filter((item, i) => i !== index);
  setTodo(newTodo);
};


return(
    <div className='todo'>
 <input 
 type='text'
 onChange={input}
  value={inputValue}/>

 <button onClick={newInput}>Add</button>

 
 <ul >
 {todo.map((todos, index) => {
  return (
    <li className="lists" key={index}>
      {todos}
      <button key={index} onClick={() => deleteInput(index)}>
        Delete
      </button>
      <button key={index} onClick={() =>editButton(index)}>Edit</button>
    </li>
  );
})}

 </ul>

    </div>
  );
}

export default App;
