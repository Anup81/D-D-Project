import logo from "./logo.svg";
import "./App.css";
import Alphabets from "./components/alphabets/Alphabets ";
import Operator from "./components/operators/Operator";
import Equation from "./components/equation/Equation";
import Evaluate from "./components/evaluate/Evaluate";

function App() {
  return (
    <div>
      <Alphabets />
      <Operator />
      <Equation />
      <Evaluate />
    </div>
  );
}

export default App;
