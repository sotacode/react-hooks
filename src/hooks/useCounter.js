import { useState } from "react"


export const useCounter = (initialValue = 0) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = (value) => {
        setCounter(counter+value)
    }
    const reset = () => {
        setCounter(initialValue)
    }
    const decrement = (value) => {
        if(counter-value<0) return;
        setCounter(counter-value)
    }


    return {
        counter,
        increment,
        reset,
        decrement
    }
}

