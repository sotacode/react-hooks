import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";


export const CallBackHook = () => {

    const [counter, setCounter] = useState(10);

    /* const increment =()=>{
        setCounter(counter+1)
    } */

    const increment = useCallback((factor = 1) => {
        setCounter((value) => value + factor); 
    }, [])

    return (
        <div className="hookCard">
            <h2>useCallBack - React Hook</h2>
            <hr />
            <p>the "useCallBack" hook is another hook used to memorize, but in this case it memorizes functions so that when a component is re-rendered, they do not change their memory address, influencing the child components that receive said function as property. It is generally used together with child components that receive this function as a property, and for its proper functioning, the child component must be accompanied by the "memo" function.</p>
            <p>Another use case is when a hook such as "useEffect" is used and within it x function is called, which is also a dependency of "useEffect" itself, so without the "useCallBack" this would be running in an infinite loop.</p>
            <h5>Example with Counter</h5>
            <h6>Counter: {counter}</h6>
            <ShowIncrement increment={increment} />

        </div>
    )
}

