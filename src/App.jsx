import viteLogo from "/vite.svg";
import "./App.css";
import DarkMode from "./components/DarkMode/DarkMode";
function App() {
  return (
    <>
      <DarkMode />
      <div className="App">
        <header className="App-header">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
        </header>
      </div>
      <h1>Vite</h1>
      {/* <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
