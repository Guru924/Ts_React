import React from "react";
import TodoItem from "./TodoItem";
import './style.css';

interface Items {
    title: string;
    completed: boolean;
}
interface TodoItemProps {
    items: Items[];
    setTodoItems: Function;
}

const Todo: React.FC<TodoItemProps> = ({items, setTodoItems}) => {
    return (
        <div className="todo-container">
            <ol>
                {items.map((item, index)=> (
                    <TodoItem key={index} item={item} setTodoItems={setTodoItems}/>
                ))}
            </ol>
        </div>
    )
}
export default Todo;