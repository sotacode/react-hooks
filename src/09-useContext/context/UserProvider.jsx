import { useState } from "react"
import { UserContext } from "./UserContext"

/* const user = {
    id: 123,
    name: 'Sota Code',
    email: 'sotacode@gmail.com'
} */


export const UserProvider = ({ children }) => {

    const [user, setUser] = useState({});

    const onSetUser = (value)=>{
        setUser(()=>value);
    }

    return (
        <UserContext.Provider value={{user, onSetUser}}>
            {children}
        </UserContext.Provider>
    )
}
