# Elementary Hooks
First of all, excuse my english.
In this repository, I try to explain the use of the most elementary hooks.
It is very important that you look at the code to understand what the example hooks that I implement in this repository actually do. Each card is a different component.
Link: [https://sotageneralhooks.netlify.app/](https://sotageneralhooks.netlify.app/)

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


## memo function - React function for components
The "memo" function allows us to memorize the state of a component, so that the renderings of a parent component do not make the child component re-render if it is not necessary given its logic. This is especially useful and is recommended to be implemented only when components have very expensive logic that may be affecting performance when rendering or processing data.

## useMem - React Hook
the "useMem" hook has the same goal as the "memo" function. The difference is that now it does not memorize a component, we want to memorize a value that is obtained by executing some logic inside the component that, if it is the same, does not recalculate its value because it was already calculated before.

## useCallback - React Hook
the "useCallBack" hook is another hook used to memorize, but in this case it memorizes functions so that when a component is re-rendered, they do not change their memory address, influencing the child components that receive said function as property. It is generally used together with child components that receive this function as a property, and for its proper functioning, the child component must be accompanied by the "memo" function.

Another use case is when a hook such as "useEffect" is used and within it x function is called, which is also a dependency of "useEffect" itself, so without the "useCallBack" this would be running in an infinite loop.
