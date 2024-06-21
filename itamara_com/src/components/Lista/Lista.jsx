import React from "react";

import FotoMaster1 from "../../assets/imgs/quartoMaster/FotoMaster1.jpg";

import Descricao from "../Descricao/Descricao.jsx"

class Lista extends React.Component {
    constructor() {
        super();

        this.state = { mostrarDescricao: false };
    }
    render() {
        return (
            <>
                <h3>Nossas instalações</h3>

                <div class="cardSuites">
                    <button onClick={ () =>
                        this.setState({ mostrarDescricao: ! this.state.mostrarDescricao })
                    }>
                        <img src={FotoMaster1}></img>
                        <br></br>
                        {this.state.mostrarDescricao ? "Mostrar menos" : "Mais detalhes"}
                    </button>

                    {this.state.mostrarDescricao ? <Descricao /> : null}
                </div>

            </>
        )
    }
}

export default Lista;