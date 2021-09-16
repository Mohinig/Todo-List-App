import React,{ useState,useEffect } from "react";
import "./App.css";
import Form from "./components/Form.js";
import TodoList from "./components/TodoList.js";
function App() {
  

  const [inputText,setInputText]=useState("");
  const [todos,setTodos]=useState([]);
  const [status,setStatus]=useState("all");
  const [filteredTodos,setFilteredTodos]=useState([]);

  useEffect(()=>{
    getLocalTodos();
  },[]);

  useEffect(()=>{
    const filterHandler =()=>{
      switch(status){
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo["completed"] === true));
          break;
        case 'uncompleted':
            setFilteredTodos(todos.filter(todo => todo["completed"] === false));
            break;
        default:
          setFilteredTodos(todos);
          break;
        }
    };
    filterHandler(); 
     
  const saveLocalTodos= () =>{
    localStorage.setItem("todos",JSON.stringify(todos));
};
    saveLocalTodos();
  },[todos,status]);

 
  const getLocalTodos= () =>{
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos",JSON.stringify([]));
    }
    else{
      const todoLocal=JSON.parse(localStorage.getItem("todos") || '{}');
     setTodos(todoLocal);
    }
  };
  return (
    <div className="App">
    <header>
     <h1>Todo List </h1>
    </header>
    <Form 
    setStatus={setStatus} 
    inputText={inputText} 
    todos={todos} 
    setTodos={setTodos} 
    setInputText={setInputText}/>
    <TodoList 
    setTodos={setTodos} 
    filteredTodos={filteredTodos}
    todos={todos}/>
    </div>
  );
}

export default App;
