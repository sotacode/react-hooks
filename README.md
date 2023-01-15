# Elementary Hooks
First of all, excuse my english.
In this repository, I try to explain the use of the most elementary hooks.
It is very important that you look at the code to understand what the example hooks that I implement in this repository actually do. Each card is a different component.

---

## useState - React Hook
Basically, we use "useState" to tell react to re-render the component in case the associated variable changes its state.


## useState with customHook
In general, we create custom hooks when the logic involved with the state of a variable is very noisy within the component itself, so we create a js file where we center the logic and the react's own hooks to leave a cleaner component.


## useEffect - React Hook
The "useEffect" hook is used to trigger secondary effects. This hook receives 2 parameters, the first is a callback that will be executed depending on the second parameter of the function, which consists of a dependency array where we specify that if x variable (entered in the dependency array) changes, then the " useEffect" executes the callback.

## useForm - Custom Hook
This is a custom hook to maintain the state of a form.


## useFetch - Custom Hook
In this case, I've implemented a custom hook that allows me to make an http call and save the "loading" status while the request is being made to know when I can render the component, and while the data isn't arriving, then display something indicating that it's loading.

## useRef - React Hook
It is identical to "useState" but in this case we tell react that if the value of the variable associated with useRef changes, then the component should NOT be rendered.
It is generally used to reference html

## useLayoutEffect - React Hook
It is identical to "useEffect" but in this case it is fired once the rendering is complete.


