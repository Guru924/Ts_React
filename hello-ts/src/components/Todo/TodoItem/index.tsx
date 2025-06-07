import React from "react";
import './style.css'

interface Item {
    title: string;
    completed: boolean;
}
interface TodoItemProps {
    item: Item;
    setTodoItems: Function;
}


const TodoItem: React.FC<TodoItemProps> = ({item, setTodoItems}) => {

    const handleCheck = () => {
        setTodoItems((prevItem : Item[])=> (
            prevItem.map((todoItem)=> 
            todoItem.title === item.title
                ? {...todoItem, completed : !todoItem.completed} : todoItem
            )
        ))
    }
    return <>
        <li>
            <div className="todo-item-container">
                <span>{item.title}</span>
                <input type="checkbox"
                checked={item.completed}
                onChange={handleCheck}
                />
            </div>
        </li>
    </>
};

export default TodoItem;