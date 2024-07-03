import React from "react";
import About from "./About.css";

import motelFachada from "../../assets/imgs/motelFachada.jpg";
class Sobre extends React.Component {
  render() {
    return (
      <div id="sobreNos">
        <div id="textoAbout">
          <p>
          <h3>Sobre nós</h3>
            O <span>Itamara</span> atua a mais de 25 anos para atender o público
            da Região dos Inconfidentes com localização privilegidada entre{" "}
            <span>Ita</span>birito e<span> Amara</span>ntina, às margens da
            Rodovia dos Inconfidentes (BR356).
            <br />
            <br />
            uma opção diferenciada no ramo de hospedagem e motelaria. Com suítes
            que estabelecem um novo padrão de conceito, buscamos em cada
            detalhe, uma oportunidade para surpreender você.
            <br />
            <br />
            Fique por dentro de novidades e promoções inéditas em nossas redes
            sociais.
          </p>
        </div>
        <div id="fotoFachada">
          <img src={motelFachada} alt="" id="imageAbout" />
        </div>
      </div>
    );
  }
}

export default Sobre;
