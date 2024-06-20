import React from "react";
import './styles/App.css';

import Header from "./Header/Header.jsx";
import Sobre from "./Sobre/Sobre.jsx";
import Lista from "./Lista/Lista.jsx";
import Descricao from "./Descricao/Descricao.jsx";
import Formulario from "./Formulario/Formulario.jsx";
import Footer from "./Footer/Footer.jsx";

class App extends React.Component {

  render() {
    return (
      <>

        <Header />

        <main>
          <section id="sobreNos">
            <Sobre />
          </section>

          <section id="suitesList">
            <Lista />
          </section>

          <section id="secaoSuites">
            <Descricao />
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
