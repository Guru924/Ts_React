import React, { useEffect, useState } from "react";
import axios from "axios";

interface Todo {
    id: number;
    title: string
    userId: number
    completed: boolean
}

const ApiCall : React.FC = ()=> {

    const [data, setData] = useState<Todo[]>([]);

    const fetchData = async()=> {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data : Todo[] = await res.json();
        setData(data)
        console.log(data)
    }

    useEffect(()=> {
        //  fetchData();
        axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
        .then((res) => setData(res.data));
    }, [])
    return <div>
        {data.map((todo)=> (
            <li key={todo.id}>{todo.title}</li>
        ))}

    </div>
}

export default ApiCall