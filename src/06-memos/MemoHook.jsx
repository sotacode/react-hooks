import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter"

const heavyStuff = (iterationnNumber = 100) => {
    for (let i = 0; i < iterationnNumber; i++) {
        console.log('Ahi vamos');
    }

    return `${iterationnNumber} iterations done`;
}


export const MemoHook = () => {

    const {counter, increment} = useCounter(10);
    const [show, setShow] = useState(true);

    const memorizeValue = useMemo(() => heavyStuff(counter) , [counter]);
    return (
        <div className="hookCard">
            <h2>useMem - React Hook</h2>
            <hr />
            <p>the "useMem" hook has the same goal as the "memo" function. The difference is that now it does not memorize a component, we want to memorize a value that is obtained by executing some logic inside the component that, if it is the same, does not recalculate its value because it was already calculated before.</p>
            <h5>Example with Counter</h5>
            <h6 className="mt-2">Counter: <small>{counter}</small> </h6>
            <h6 className="mt-2">{ memorizeValue }</h6>
            <button className="btn btn-primary mt-1" onClick={() => increment(1)}>+1</button>
            <button className="btn btn-outline-primary mt-1" onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>

        </div>
    )
}

