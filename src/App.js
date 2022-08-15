import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { Main } from "./components/main/main";
import { Footer } from "./components/footer/footer.jsx";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
