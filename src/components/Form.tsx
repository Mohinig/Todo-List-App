import React,{FC} from "react";

interface FormProps{
  setStatus:any,
  setInputText:any,
  inputText:string,
  todos:any,
  setTodos:any
}
const Form :FC<FormProps> = ({setStatus,setInputText,todos,setTodos,inputText}) => {
    const inputTextHandler =(e: { target: { value: any; }; }) =>{
        //console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitTodoHandler =(e: { preventDefault: () => void; })=>{
     e.preventDefault();
     setTodos([
         ...todos,{text:inputText,completed:false,id:Math.random()*1000},
     ]);
     setInputText("");
    };  
    const statusHandler =(e: { target: { value: any; }; })=>{
      setStatus(e.target.value);
    }
    return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    );
};

export default Form;
