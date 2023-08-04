
import "./App.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenAlt } from "@fortawesome/free-solid-svg-icons";
import React, { FormEvent } from "react";

const App : React.FC = () =>{
  const [todo, setTodo] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState <number | null>(null);
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState('')
  const [active, setActive] = useState('')

  const filterCategory = (filter :string) =>{
setFilter(filter)
setActive(filter)
  }
const input = (e : React.ChangeEvent<HTMLInputElement>) => {
  setInputValue(e.target.value);

};

interface Todo{
  text: string;
  category: string;
}
const newInput = (e: FormEvent<HTMLFormElement>) => {
e.preventDefault();
  if (inputValue && filter) {
    if (editIndex !== null) {
      const newTodo: Todo[] = [...todo];
      newTodo[editIndex] = { text: inputValue, category: filter };
      setTodo(newTodo);
      setEditIndex(null);
    } else {
      setTodo([...todo, { text: inputValue, category: filter }]);
    }
    setInputValue("");
  } else {
    setCategory("Please insert a text or select a Category.");
    const displayCategory = document.querySelector(".display-category");
    if (displayCategory) {
      displayCategory.classList.add("show");
      setTimeout(() => {
        setCategory("");
        displayCategory.classList.remove("show");
      }, 3000);
    }
  }
};

  const deleteInput = (index:number) => {
    const newTodo = todo.filter((item, i) => i !== index);
    setTodo(newTodo);
  };

  const editButton = (index: number) => {
    setInputValue(todo[index].text);
    setEditIndex(index);
  };

  return (
    <div className="todo">
      <h3>My To-Do list</h3>
      <form onSubmit={newInput} className="input-div">
      <input type="text" onChange={input} value={inputValue} />
      <button type="submit" className="add-task">Add</button>
      </form>
    <div className="category-list"></div>
      <div className="categories">
        <div
         
         className={`category ${active === "Work" ? "active" : ''}`}
         onClick={() => {
           filterCategory("Work");
           setCategory('Work');
           setInputValue('');
         }}
         
        >
        <span>Work</span>
        </div>
        <div
         
         className={`category ${active === "Health" ? "active" : ''}`}
onClick={() => {
  filterCategory("Health");
  setCategory('Health');
  setInputValue('');
}}

        >
          <span>Health</span>
        </div>
        <div
         
          className={`category ${active === "Finance" ? "active" : ''}`}
          onClick={() =>  {
            filterCategory("Finance");
            setCategory('Finance'); 
            setInputValue('')}}
        >
          <span>Finance</span>
        </div>
        <div
         
          className={`category ${active === "Home" ? "active" : ''}`}
          onClick={() => {
            filterCategory("Home");
            setCategory('Home');
          setInputValue('')}}
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
