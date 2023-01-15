import React from 'react'
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { SimpleFormWithCustomHook } from './02-useEffect/SimpleFormWithCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'

export const HooksApp = () => {
  return (
    <div>
      <h1>Elemetary Hooks</h1>
      <CounterApp/>               {/* useState */}
      <CounterWithCustomHook/>    {/* useState with customHook */}
      <SimpleForm/>               {/* useEffect */}
      <SimpleFormWithCustomHook/> {/* useForm using customHook */}
      <MultipleCustomHooks/>      {/* useFetch */}
      <FocusScreen/>              {/* useRef */}
      <Layout/>                   {/* useLayoutRef */}
    </div>
  )
}
