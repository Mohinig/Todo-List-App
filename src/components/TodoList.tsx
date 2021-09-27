import React, { FC } from "react";
import Todo from "./Todo";

interface TodoListProps {
    todos: any,
    setTodos: any,
    filteredTodos: any
}
const TodoList: FC<TodoListProps> = ({ todos, setTodos, filteredTodos }) => {
    //console.log(filteredTodos);
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo: { id: React.Key | null | undefined; text: any; }) => (
                    <Todo
                        setTodos={setTodos}
                        todo={todo}
                        todos={todos}
                        key={todo.id}
                        text={todo.text} />
                ))
                }
            </ul>
        </div>
    );
};

export default TodoList;
