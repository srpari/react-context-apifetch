import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ContextAPIProvider } from "./context/ContextAPI";
import Characters from "./components/Characters";
// import CharactersDetail from "./components/CharactersDetail";

function App() {
  return (
    <ContextAPIProvider>
      <div className="App">
        <header className="App-header">
          <h1>React Context API</h1>
        </header>
        <Characters />
        {/* <CharactersDetail /> */}
      </div>
    </ContextAPIProvider>
  );
}

export default App;
