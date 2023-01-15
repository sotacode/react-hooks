import { useFetch } from "../hooks/useFetch"


export const MultipleCustomHooks = () => {

    const { data, isLoading, hasError } = useFetch('https://valorant-api.com/v1/agents?language=es-ES&isPlayableCharacter=true');

    return (
        <div className="hookCard">
            <h2>useFetch - Custom Hook</h2>
            <hr />
            <p>This is a custom hook where we have an Valorant API's call.</p>
            <p>In this case, I've implemented a custom hook that allows me to make an http call and save the "loading" status while the request is being made to know when I can render the component, and while the data isn't arriving, then display something indicating that it's loading.</p>

            <h5>Examples</h5>
            {
                isLoading
                    ?
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                    :
                    <div className="gridAgents">
                        {
                            data.map(({ uuid, displayIcon, description, displayName }) => {
                                return (
                                    <div key={uuid} className="displayAgent d-block">
                                        <p className="m-0 text-center">{displayName}</p>
                                        <img className="agentImg" src={displayIcon}/>
                                    </div>
                                )
                            })
                        }
                    </div>
            }





        </div>
    )
}
