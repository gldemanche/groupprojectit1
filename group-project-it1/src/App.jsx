import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Model } from './model/model';
import axios from "axios";

let instance = axios.create({
  baseURL: 'https://qsnf3fzubl.execute-api.us-east-1.amazonaws.com/Prod/'
});

function App() {
  const [model, setModel] = React.useState(new Model());
  const [redraw, forceRedraw] = React.useState(0);       // used to conveniently request redraw after model change

  /** Ensures initial rendering is performed, and that whenever model changes, it is re-rendered. */
  React.useEffect (() => {

    // do something
    // updateConstants()
    // document.getElementById("guessedLetter").focus()
  }, [model, redraw])

  const registerDesigner = (email) => {
    instance.post('/registerdesigner', {
        "email" : email
    }).then((response) => {
      model.registerDesigner(response.email);
      forceRedraw(redraw+1);
    });

    console.log(model.designers);
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => registerDesigner('test')}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
