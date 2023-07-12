
import "./App.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenAlt } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState('')
  const [active, setActive] = useState('')

  const filterCategory = (filter) =>{
setFilter(filter)
setActive(filter)
  }
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
  else {
    setCategory("Please insert a text or select a Category.");
    document.querySelector(".display-category").classList.add("show");
    setTimeout(() => {
      setCategory("");
      document.querySelector(".display-category").classList.remove("show");
    }, 3000);
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
      <div className="input-div">
      <input type="text" onChange={input} value={inputValue} />
      <button onClick={newInput} className="add-task">Add</button>
      </div>
    <div className="category-list"></div>
      <div className="categories">
        <div
         
          className={`category ${active === "Work" ? "active" : ''}`}
          onClick={() => 
            filterCategory("Work", 
            setCategory('Work'),
            setInputValue('')) }
        >
        <span>Work</span>
        </div>
        <div
         
          className={`category ${active === "Health" ? "active" : ''}`}
          onClick={() => 
            filterCategory("Health" , 
          setCategory('Health'), 
          setInputValue(''))}
        >
          <span>Health</span>
        </div>
        <div
         
          className={`category ${active === "Finance" ? "active" : ''}`}
          onClick={() => 
            filterCategory("Finance" , 
            setCategory('Finance'), 
            setInputValue(''))}
        >
          <span>Finance</span>
        </div>
        <div
         
          className={`category ${active === "Home" ? "active" : ''}`}
          onClick={() => 
            filterCategory("Home" , 
            setCategory('Home'), 
          setInputValue(''))}
        >
          <span>Home</span>
        </div>
      </div>
      <div className="display-category">
      <div className="clicked-category">
       <p>
        {category}</p> 
        </div>  
      <ol className="ol">
        {todo
          .filter((item) => !filter || item.category === filter)
          .map((todos, index) => {
            return (
              <li className="lists" key={index}>
                <div className="span-button">
                   <span>{todos.text}</span>    
                   <div className="icon"> 
                    <FontAwesomeIcon icon={faTrash} className="delete-button" key={index} onClick={() => deleteInput(index)}/>  
              
                <FontAwesomeIcon icon={faPenAlt} className="edit-button" key={index}onClick={() => editButton(index)} /></div> 
             
                </div>
              
              </li>
            );
          })}
      </ol>
      </div>
    </div>
  );
}

export default App;
