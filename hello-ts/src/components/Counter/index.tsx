import React, { useEffect, useState } from 'react';
import './style.css';

const Counter: React.FC = () => {

    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        console.log("Counter mounted");

        return () => {
            console.log("Counter unmounted");;
        }
    }, [])

    useEffect(() => {
        console.log("Counter updated");

        return()=> {
            console.log("Counter updated cleanup", count);
            
        }

    }, [count])

    const handleInc = () => {
        setCount(prevCount => prevCount + 1);
    }
    const handleDec = () => {
        setCount(prevCount => prevCount - 1);
    }

    return <div className='counter'>
        <span>{count}</span>
        <button onClick={handleInc}>INC</button>
        <button onClick={handleDec}>DEC</button>
    </div>
}

export default Counter;