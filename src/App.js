
import "./App.css";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState('')

const input = (e) => {
  setInputValue(e.target.value);

};

const newInput = () => {
  if (inputValue && filter) {

    if (editIndex !== null) {
      const newTodo = [...todo];
      newTodo[editIndex] = { text: inputValue, category: filter };
      setTodo(newTodo);
      setEditIndex(null);
    } else {
      setTodo([...todo, { text: inputValue, category: filter }]);
    }
    setInputValue("");
  
    
  }
  else{
    setCategory('Click a category')
  }
};


  const deleteInput = (index) => {
    const newTodo = todo.filter((item, i) => i !== index);
    setTodo(newTodo);
  };

  const editButton = (index) => {
    setInputValue(todo[index].text);
    setEditIndex(index);
  };

  return (
    <div className="todo">
      <div>
      <input type="text" onChange={input} value={inputValue} />
    
      <button onClick={newInput}>Add</button>
      </div>
    
      <div className="categories">
        <div
         
          className="category"
          onClick={() => 
            setFilter("Work", 
            setCategory('Work'),
            setInputValue('')) }
        >
          Work
        </div>
        <div
         
          className="category"
          onClick={() => 
            setFilter("Health" , 
          setCategory('Health'), 
          setInputValue(''))}
        >
          Health
        </div>
        <div
         
          className="category"
          onClick={() => 
            setFilter("Finance" , 
            setCategory('Finance'), 
            setInputValue(''))}
        >
          Finance
        </div>
        <div
         
          className="category"
          onClick={() => 
            setFilter("Home" , 
            setCategory('Home'), 
          setInputValue(''))}
        >
          Home
        </div>
      </div>
      <div className="display-category">
        {category}
      </div>

      <ul>
        {todo
          .filter((item) => !filter || item.category === filter)
          .map((todos, index) => {
            return (
              <li className="lists" key={index}>
                {todos.text}
                <button key={index} onClick={() => deleteInput(index)}>
                  Delete
                </button>
                <button key={index} onClick={() => editButton(index)}>
                  Edit
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;
