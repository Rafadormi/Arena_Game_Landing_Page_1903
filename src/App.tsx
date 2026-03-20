import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Strip from "./components/Strip";
import Servicos from "./components/Servicos";
import BancoDoBrasil from "./components/BancoDoBrasil";
import Pacotes from "./components/Pacotes";
import Historia from "./components/Historia";
import CtaCentral from "./components/CtaCentral";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="relative z-10 bg-grid min-h-screen">
      <Nav />
      <Hero />
      <Strip />
      <Servicos />
      <BancoDoBrasil />
      <Pacotes />
      <Historia />
      <CtaCentral />
      <Contato />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
