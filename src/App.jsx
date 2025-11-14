import "./app.scss"
import { Contact } from "./components/Contact/Contact";
import { Cursor } from "./components/Cursor/Cursor";
import { Hero } from "./components/Hero/Hero";
import { NavBar } from "./components/NavBar/NavBar";
import { Parallax } from "./components/Parallax/Parallax";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Services } from "./components/Services/Services";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return <div >
    <div>
      <Cursor />
      <section id="HomePage">
        <NavBar />
        <Hero />
      </section>
      <section id="Services"><Parallax type="services" /></section>
      <section>
        <Services />
      </section>
      <section id="Portfolio"><Parallax type="portfolio" /></section>
      <Portfolio />
      <section id="Contact"><Contact /></section>
      <Analytics />
    </div>
  </div>;
};

export default App;
