import { useState } from 'react'

export interface Props {
  init: number;
}

// const Counter = () => {
  // const [count, setCount] = useState(0)
  // return (
    // <div>
      // <h3>Update the count and edit src/App.tsx, state is preserved</h3>
      // <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
    // </div>
  // )
// }


function Counter ({init}: Props): React.JSX.Element {
  const [count, setCount] = useState(init);
  return (
    <div>
      <h3>Update the count and edit src/App.tsx, state is preserved</h3>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
	  {/*<button onClick={() => setCount('hello world')}>Teksti - {count}</button>*/}	  
    </div>
  )
}


export default Counter;