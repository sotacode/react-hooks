# Elementary Hooks
First of all, excuse my english.
In this repository, I try to explain the use of the most elementary hooks.

---

## useState
Basically, we use "useState" to tell react to re-render the component in case the associated variable changes its state.


## useState with customHook
In general, we create custom hooks when the logic involved with the state of a variable is very noisy within the component itself, so we create a js file where we center the logic and the react's own hooks to leave a cleaner component.


## useEffect
The "useEffect" hook is used to trigger secondary effects. This hook receives 2 parameters, the first is a callback that will be executed depending on the second parameter of the function, which consists of a dependency array where we specify that if x variable (entered in the dependency array) changes, then the " useEffect" executes the callback.

## useEffect
This is a custom hook to maintain the state of a form.

