import React,{useState} from 'react'

function MyComponent() {

    const [state, setstate] = useState(0)
  
    return (
      <div>
        <button id='abc' onClick={(e)=>setstate(state+1)}>clicked {state} times</button>
        <button id='xyz' onClick={(e)=>setstate(state+1)}>clicked {state} times</button>
      </div>
    )
  }

  export default MyComponent