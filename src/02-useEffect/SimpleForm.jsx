import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'sotacode',
        email: 'nelson.rivera@gmail.com'
    });

    const {username, email} = formState;

    const onInputChange = ({target})=>{
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    }


    useEffect(()=>{
        /* console.log("useEffect First Render") */
    },[])

    useEffect(()=>{
        /* console.log("form change") */
    },[formState])

    useEffect(()=>{
        /* console.log("email change") */
    },[email])



    return (
        <div className="hookCard">
            <h2>useEffect</h2>
            <hr />
            <p>The "useEffect" hook is used to trigger secondary effects. This hook receives 2 parameters, the first is a callback that will be executed depending on the second parameter of the function, which consists of a dependency array where we specify that if x variable (entered in the dependency array) changes, then the " useEffect" executes the callback.</p>
            <h5>Simple Form</h5>
            <input
                type="text"
                className="form-control mt-2 inputForm"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-2 inputForm"
                placeholder="nelson.rivera@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            {
                username === 'sotacode2' && <Message/> 
            }
            

        </div>
    )
}
