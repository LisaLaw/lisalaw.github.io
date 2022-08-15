import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Main } from "./components/main/Main";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
};

export default App;
