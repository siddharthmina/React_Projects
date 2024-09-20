import "./App.css";
import Navigation from "./components/Nav/Navigation.jsx";
import ContactHeader from "./components/ContactHeader/ContactHeader.jsx";
import Hero from "./components/Hero/Hero.jsx"
function App() {
  return (
    <>
      <Navigation />
      <main className="main_container">
      <ContactHeader/>
      <Hero/> 
      </main>
    </>
  );
}

export default App;
