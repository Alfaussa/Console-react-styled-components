import React from 'react';
// import Counter from "./components/counter";

function App() {


  const [value, setValue] = useState( 'текст в инпуте');
return (
    <div className="App">
      <div className="post">
        <div className=".post__content">
            <strong>1. Javascript</strong>
            <div>
              something on here
            </div>
        </div>
        <div className="post__btns">
          <button>
            remove
          </button>
        </div>

     </div>

    </div>
);
}

export default App;
