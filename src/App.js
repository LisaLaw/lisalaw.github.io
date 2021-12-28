import "./App.css";
import { Navbar } from "./components/Navbar/navbar";
import { ContactSidebar } from "./components/ContactSidebar/contactSidebar";
// import { HomePage } from './Main/homePage';
// import { Footer } from './Footer/footer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ContactSidebar />
      {/*<HomePage />
      <Footer />*/}
    </div>
  );
};

export default App;
