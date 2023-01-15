import React from 'react'
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { SimpleFormWithCustomHook } from './02-useEffect/SimpleFormWithCustomHook'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'
import { CallBackHook } from './06-memos/CallBackHook'
import { MemoHook } from './06-memos/MemoHook'
import { Memorize } from './06-memos/Memorize'
import { Parent } from './07-practice-memo/Parent'

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
      <Memorize/>                 {/* memo funtion */}
      <MemoHook/>                 {/* useMem */}
      <CallBackHook/>             {/* useCallBack */}
      {/* <Parent/> */}
    </div>
  )
}
