import { useRef } from "react"

export const FocusScreen = () => {

  const inputRef = useRef();

  const onClickButton = ()=>{
    console.log(inputRef)
    //inputRef.current.focus();
    inputRef.current.select();
  }

  return (
    <div className="hookCard">
      <h2>useRef</h2>
      <hr />
      <p>It is identical to "useState" but in this case we tell react that if the value of the variable associated with useRef changes, then the component should NOT be rendered. It is generally used to reference html.</p>
      <h5>FocusScreen</h5>

      <input
      ref={inputRef}
        type="text"
        placeholder="Type your name..."
        className="form-control"
        name=""
        id=""
      />

      <button className="btn btn-primary mt-2" onClick={onClickButton}>Set Focus</button>

    </div>
  )
}

