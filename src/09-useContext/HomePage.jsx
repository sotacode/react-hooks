import { useContext } from "react"
import { UserContext } from "./context/UserContext"


export const HomePage = () => {

  const algo = useContext( UserContext );

  return (
    <div>
      <h1>Home</h1>
      <pre>{JSON.stringify(algo, null, 3)}</pre>
    </div>
  )
}

