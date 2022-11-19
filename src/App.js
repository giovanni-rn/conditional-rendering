import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setDisplay(!display)}>Changer l'affichage</button>
      {display ? <h1>Display est vrai</h1> : <h1>Display est faux</h1>}
      {console.log(display)}
    </div>
  );
}

export default App;
