import React from "react";
import './styles/App.css';

import Header from "./components/Header/Header.jsx";
import Sobre from "./components/Sobre/Sobre.jsx";
import Lista from "./components/Lista/Lista.jsx";
import Formulario from "./components/Formulario/Formulario.jsx";
import Footer from "./components/Footer/Footer.jsx";

class App extends React.Component {

  render() {
    return (
      <>

        <Header />

        <main>
          <section id="sobreNos">
            <Sobre />
          </section>

          
          <h3>Nossas instalações</h3>
          <section id="suitesList">
            <Lista />
          </section>

          <section id="secaoSuites">
            
          </section>

          <section id="formu">
            <Formulario />
          </section>
        </main>

        <footer>
          <Footer />
        </footer>

      </>
    );
  };
};
export default App;
