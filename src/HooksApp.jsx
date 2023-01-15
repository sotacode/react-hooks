import React from 'react'
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { SimpleFormWithCustomHook } from './02-useEffect/SimpleFormWithCustomHook'

export const HooksApp = () => {
  return (
    <div>
      <h1>Elemetary Hooks</h1>
      <CounterApp/>               {/* useState */}
      <CounterWithCustomHook/>    {/* useState */}
      <SimpleForm/>               {/* useEffect */}
      <SimpleFormWithCustomHook/> {/* useEffect */}
    </div>
  )
}
