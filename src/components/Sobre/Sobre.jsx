import React from "react";
import About from "./About.css";

import motelFachada from "../../assets/imgs/motelFachada.jpg";
class Sobre extends React.Component {
  render() {
    return (
      <div id="sobreNos">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
            maxime, molestiae unde quidem blanditiis est iusto. Error, excepturi
            velit nostrum explicabo alias in et vitae quo, expedita, cumque
            perspiciatis non? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Perferendis placeat molestias asperiores distinctio natus
            eaque sapiente eum eos ad ipsa adipisci cupiditate, quaerat
            laboriosam blanditiis tempora impedit error ut corporis? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Inventore nulla
            similique consequuntur odit, voluptas ipsa voluptatem autem deserunt
            saepe iste, nesciunt sunt repudiandae accusamus modi voluptatibus
            quidem non, vitae dolore. Lorem ipsum dolor sit.
          </p>
        </div>
        <div>
          <img src={motelFachada} alt="" id="imageAbout" />
        </div>
      </div>
    );
  }
}

export default Sobre;
