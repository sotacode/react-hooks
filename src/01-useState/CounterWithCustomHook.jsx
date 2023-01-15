import { useCounter } from "../hooks/useCounter"


export const CounterWithCustomHook = () => {

    const {counter, decrement, increment, reset} = useCounter(16)

    return (
        <div className="hookCard">
            <h2>useState using Custom Hook</h2>
            <hr />
            <p>In general, we create custom hooks when the logic involved with the state of a variable is very noisy within the component itself, so we create a js file where we center the logic and the react's own hooks to leave a cleaner component.</p>
            <h5>Counter: {counter}</h5>
            <button className="btn btn-primary" onClick={ () => decrement(1) }>-1</button>
            <button className="btn btn-secondary" onClick={() => reset()}>Reset</button>
            <button className="btn btn-primary" onClick={ () => increment(1)}>+1</button>
        </div>
    )
}

