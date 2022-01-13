import "./App.css";
import { Navbar } from "./components/Navbar/navbar";
import { ContactSidebar } from "./components/ContactSidebar/contactSidebar";
import { Main } from "./components/Main/main";
import { Footer } from "./components/Footer/footer.jsx";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ContactSidebar />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
