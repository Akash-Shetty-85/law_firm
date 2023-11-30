import "./App.css";
import FAQ from "./Components/FAQ";
import Happy from "./Components/Happy_clients";
import Herosection from "./Components/Hero";
import Introduction from "./Components/Intro";
import Navbar from "./Components/Navbar";
import Newsletter from "./Components/Newsletter";
import Options from "./Components/Options";
import Practices from "./Components/Practices";
import Team from "./Components/Team";

function App() {
  return (
    <>
      <section className="c1-header">
        <header>
          <Navbar />
        </header>
        <Herosection />
      </section>
      <section className="c2-main-section">
        <article>
          <Introduction />
        </article>
        <article>
          <Options />
        </article>
        <article>
          <Practices />
        </article>
        <article>
          <Happy />
        </article>
        <article>
          <Team />
        </article>
        <article>
          <FAQ />
        </article>
        <article>
          <Newsletter />
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
