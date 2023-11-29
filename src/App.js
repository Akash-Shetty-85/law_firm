import "./App.css";
import Herosection from "./Components/Hero";
import Introduction from "./Components/Intro";
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
      <section className="c2-main-section">
        <article>
          <Introduction/>
        </article>

      </section>
      <section className="c1-header c3-footer">
        <footer>
          <Navbar children={true} />
        </footer>
      </section>
    </>
  );
}

export default App;
