import React,{FC} from "react";

interface TodoProps{
    text:string,
    todo:any,
    todos:any,
    setTodos:any,
}
const Todo :FC<TodoProps>=({text, todo, todos, setTodos})=>{
    const deleteHandler = () =>{
         setTodos(todos.filter((el: { id: any; }) => el.id !== todo.id));
         //console.log(todo);
        };
    const completeHandler = () =>{
        setTodos(todos.map((item: { id: any; completed: any; }) => {
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

export default Todo;