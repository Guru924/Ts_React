import React, { useState } from "react";
import Todo from "./components/Todo";
import Counter from "./components/Counter";
import Board from "./components/TicTacToe/Board";
import ApiCall from "./components/Api";


interface Item {
    title: string;
    completed: boolean;
}


const App: React.FC = () => {
    const [isToggle, setIsToggle] = useState<boolean>(false);
    const [isToggleToe, setIsToggleToe] = useState<boolean>(false);
    const [isToggleAPI, setIsToggleAPI] = useState<boolean>(false);
    

    const [todoItems, setTodoItems] = useState<Item[]>([
        { title: "Learn React", completed: false },
        { title: "Learn TypeScript", completed: true },
        { title: "Build a Todo App", completed: false }
    ])

    return (
        <>
            <h1>Hello from react app</h1>
            <Todo items={todoItems} setTodoItems={setTodoItems} />

            <button onClick={() => setIsToggle(!isToggle)}>ToggleCounter</button>
            <button onClick={() => setIsToggleToe(!isToggleToe)}>Toggle TicTacToe</button>
            <button onClick={() => setIsToggleAPI(!isToggleAPI)}>Toggle API</button>

            {!!isToggle && <Counter />}
            {!!isToggleToe && <Board/>}
            {!!isToggleAPI && <ApiCall/>}
            
        </>
    )
};

export default App;