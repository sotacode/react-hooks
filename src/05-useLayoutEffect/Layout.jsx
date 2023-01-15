import { useLayoutEffect, useRef } from "react";
import { useFetch } from "../hooks/useFetch"


export const Layout = () => {

    const { data, isLoading, hasError } = useFetch('https://valorant-api.com/v1/agents?language=es-ES&isPlayableCharacter=true');
    const titleAgentRef = useRef();

    useLayoutEffect(()=>{

    },[])
    return (
        <div className="hookCard">
            <h2>useFetch - Custom Hook</h2>
            <hr />
            <p>This is a custom hook where we have an Valorant API's call.</p>
            <p>It is identical to "useEffect" but in this case it is fired once the rendering is complete.</p>

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
                            data.map(({ uuid, displayIcon, description, displayName, backgroundGradientColors }) => {
                                return (
                                    <div key={uuid} className="displayAgent d-block">
                                        <p className="m-0 text-center" ref={titleAgentRef} style={{backgroundColor: `#${backgroundGradientColors[1]}`}}>{displayName}</p>
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
