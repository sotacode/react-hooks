import { useContext } from "react";
import { UserContext } from "./context/UserContext";


export const LoginPage = () => {

  const algo = useContext( UserContext );


  return (
    <div>
      <h1>Login</h1>
      <pre>{JSON.stringify(algo, null, 3)}</pre>

      <button className="btn btn-primary" onClick={() => algo?.onSetUser({id: 123, nombre: 'Sota Code'})}>
        Set User
      </button>
    </div>
  )
}

