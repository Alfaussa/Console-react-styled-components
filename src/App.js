import { useState } from "react";

function App() {

  const [likes, setLikes] = useState( 5);
  const [value, setValue] = useState( 'текст в инпуте');
  function increment() {
    setLikes(likes +1)
  }
  function decrement() {
    setLikes(likes -1)
  }



  return (
    <div className="App">
      <h1>{likes}</h1>
      <h1>{value}</h1>
      <input 
        type="text" 
        value={value}
        onChange={event => event.target.value}
        ></input>
      <button onClick={increment} >Increment</button>
      <button onClick={decrement} >Decrement</button>
    </div>
  );
}

export default App;
