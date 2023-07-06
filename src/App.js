
import './App.css';
import { useState } from 'react';

function App() {

  const [inputField, setInputField] = useState('')
const [newInput, setNewInput]= useState('hello')

const TodoInput = () =>{
  setNewInput(...inputField)
}
  const TodoField = (e) =>{
setInputField(e.target.value)
  }


  return (
    <div className="App">
  <input type='text' 
  className='input-field' onChange={TodoField}/>
   <input value={inputField} />
<button onClick={TodoInput}>click</button>
   <ul>
    <li>
      {newInput}
    </li>
   </ul>
    </div>
    
  );
}

export default App;
