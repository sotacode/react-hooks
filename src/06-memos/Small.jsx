import { memo } from "react"


export const Small = memo (({value}) => {

    console.log("Small: me volvi a dibujar")
  return (
    <small>{value}</small>
  )
})
