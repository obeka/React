import React, {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

    const handleCount = () => setCount(count + 1);
    
    return (
        <div>
            <span>{feedback}</span>  
            <Count count={count}/>
            <Button handleCount={handleCount} />
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

function Button({handleCount}) {
    return (
        <div>
            <button onClick={handleCount}>Add 1!</button>
        </div>
    )
}

export default Counter;