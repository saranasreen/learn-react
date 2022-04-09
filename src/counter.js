import React, {useState, useEffect} from "react";

const Counter = (props) => {
    const [count, setCount] = useState(0);

    const [countBy, setCountBy] = useState(1);
    let a = 3;

    useEffect(() => {
        setCountBy(props.incrementer)
        a = 4
    })
    return (
        <div>
        <p>{count} </p>
        <button onClick={() => setCount(count + countBy)}>
          Click me
        </button>
      </div>
    )
}

export default Counter