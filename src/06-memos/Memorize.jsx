import { useState } from "react";
import { useCounter } from "../hooks/useCounter"
import { Small } from "./Small"


export const Memorize = () => {

    const {counter, increment} = useCounter(1);
    const [show, setShow] = useState(true);

    return (
        <div className="hookCard">
            <h2>useMem - React Hook</h2>
            <hr />
            <p>The "memo" function allows us to memorize the state of a component, so that the renderings of a parent component do not make the child component re-render if it is not necessary given its logic. This is especially useful and is recommended to be implemented only when components have very expensive logic that may be affecting performance when rendering or processing data.</p>
            <h5>Example with Counter</h5>
            <h6 className="mt-2">Counter: <Small value={counter}/> </h6>
            <button className="btn btn-primary mt-1" onClick={() => increment(1)}>+1</button>
            <button className="btn btn-outline-primary mt-1" onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>

        </div>
    )
}

