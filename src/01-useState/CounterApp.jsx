import { useState } from "react"


export const CounterApp = () => {

    const [state, setState] = useState({
        counter: 0,
        state2: 10,
        state3: 20
    });

    const {counter, state2, state3} = state;
    return (
        <div className="hookCard">
            <h2>useState</h2>
            <hr />
            <p>Basically, we use "useState" to tell react to re-render the component in case the associated variable changes its state.</p>
            <h5>Counter: {counter}</h5>
            <button className="btn btn-primary" onClick={()=>{ setState({...state, counter: counter+1}) }}>+1</button>
        </div>
    );
}

