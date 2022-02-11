import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { CharacterState } from "./context/ContextAPI";
import Characters from "./components/Characters";
// import CharactersDetail from "./components/CharactersDetail";

function App() {
  return (
    <CharacterState>
      <div className="App">
        <header className="App-header">
          <h1>React Context API</h1>
        </header>

        <Characters />
        {/* <CharactersDetail /> */}
      </div>
    </CharacterState>
  );
}

export default App;
