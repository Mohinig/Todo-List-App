import React from 'react';
import Proptypes from 'prop-types';
const Todo =({text, todo, todos, setTodos})=>{
    const deleteHandler = () =>{
         setTodos(todos.filter((el) => el.id !== todo.id));
         //console.log(todo);
        };
    const completeHandler = () =>{
        setTodos(todos.map(item => {
           if(item.id === todo.id){
               return {
                   ...item, completed: !item.completed
               };
               
           }
           return item;
        })
        );
    };
    return (
         <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn" ><i className="fas fa-trash"></i></button>
         </div>
    );
}

Todo.propTypes = {
   text:Proptypes.string,
   todo:Proptypes.any,
   todos:Proptypes.any,
   setTodos:Proptypes.map,
  };
export default Todo;