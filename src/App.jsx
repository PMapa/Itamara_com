import React from "react";
import "./styles/App.css";

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
          <h3 id="about">Sobre nós</h3>
          <Sobre />

          <Lista />

          <Formulario />
        </main>

        <Rodape />
      </>
    );
  }
}
export default App;
