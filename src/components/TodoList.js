import React from "react";
import Todo from "./Todo";
import Proptypes from 'prop-types';
const TodoList = ({todos,setTodos,filteredTodos}) =>{
    //console.log(filteredTodos);
    return (
        <div className="todo-container">
          <ul className="todo-list">
         {filteredTodos.map(todo => (
             <Todo 
             setTodos={setTodos} 
             todo={todo} 
             todos={todos} 
             key={todo.id} 
             text={todo.text}/>
         ))
         }
          </ul>
        </div>
    );
};
TodoList.propTypes = {
    todos:Proptypes.any,
    setTodos:Proptypes.map,
    filteredTodos:Proptypes.any
   };
export default TodoList;