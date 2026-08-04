import "./App.css";

import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";
import FAQ from "./components/FAQ/FAQ";

function App() {
  return (
    <>
      <Header />

      <main>
        <Section />
      </main>
      
        <FAQ/>
      <Footer />
    </>
  );
}

export default App;