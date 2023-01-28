import { useContext } from "react";
import { UserContext } from "./context/UserContext";


export const DefaultPage = () => {

  const algo = useContext( UserContext );

  return (
    <div>
      <h1>Default Page</h1>
      <pre>{JSON.stringify(algo, null, 3)}</pre>
    </div>
  )
}
