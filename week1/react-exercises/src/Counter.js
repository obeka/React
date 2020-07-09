import React, {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";
    
    return (
        <div>
            <span>{feedback}</span>  
            <Count count={count}/>
            <Button setCount={setCount} />
        </div>
    )
}

function Count({count}) {
    return (
        <div>
           {count}
        </div>
    )
}

function Button({setCount}) {
    return (
        <div>
            <button onClick={() => setCount(prev => prev + 1)}>Add 1!</button>
        </div>
    )
}

export default Counter;