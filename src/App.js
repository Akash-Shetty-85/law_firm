import "./App.css";
import Herosection from "./Components/Hero";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <section className="c1-header">
        <header>
          <Navbar />
        </header>
        <Herosection/>
      </section>
      <section className="c1-header">
        <footer>
          <Navbar children={true} />
        </footer>
      </section>
    </>
  );
}

export default App;
