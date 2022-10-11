import "./App.css";
// import Parent from "./components/ParentClass";
import Parent from "./components/Parent";
// import Parent from "./components/ParentCallBackRef";

function App() {
  console.log("app");
  return (
    <div className="App">
      <Parent />
    </div>
  );
}

export default App;
