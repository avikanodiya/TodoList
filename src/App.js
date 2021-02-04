
import React, { useState, useEffect } from 'react'
import './App.css';
import Form from './components/Form'
import ToDoList from './components/ToDoList';

const App = () => {
  const [inputText, setInputText] = useState("");
  const [toDo, setToDo] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodo, setFilteredTodo] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [toDo, status])

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodo(toDo.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodo(toDo.filter((todo) => todo.completed === false));
        break;
      case "all":
        setFilteredTodo(toDo);
        break;
    }
  }

  return (
    <div className="App">
      <header>AK's ToDoList</header>
      <Form
        toDo={toDo}
        setToDo={setToDo}
        setInputText={setInputText}
        inputText={inputText}
        setStatus={setStatus}

      />
      <ToDoList toDo={toDo} setToDo={setToDo} filteredTodo={filteredTodo} />

    </div>
  );
}

export default App;
