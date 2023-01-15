import { Child } from './Child'
import { useCallback, useState } from 'react';

export const Parent = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    const incrementar = useCallback(
        ( num ) => {
            setValor((oldValue) => oldValue + num )
        }
    ,[])




    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Child 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Child /> */}
        </div>
    )
}
