import React from "react";
import './styles/App.css';

import Header from "./components/Cabecalho/Cabecalho.jsx";
import Sobre from "./components/Sobre/Sobre.jsx";
import Lista from "./components/Lista/Lista.jsx";
import Formulario from "./components/Formulario/Formulario.jsx";
import Rodape from "./components/Rodape/Rodape.jsx";

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

          <section id="formu">
            <Formulario />
          </section>
        </main>

        <footer>
          <Rodape />
        </footer>

      </>
    );
  };
};
export default App;
