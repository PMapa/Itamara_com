import React from "react";
import lista from "./lista.css";

import FotoStandart1 from "../../assets/imgs/quartoStandart/FotoStandart1.jpg";
import FotoPremium1 from "../../assets/imgs/quartoPremium/FotoPremium1.jpg";
import FotoSupra1 from "../../assets/imgs/quartoSupra/FotoSupra1.jpg";
import FotoMaster1 from "../../assets/imgs/quartoMaster/FotoMaster1.jpg";

import DescricaoStandart from "../Descricao/DescricaoStandart.jsx";
import DescricaoPremium from "../Descricao/DescricaoPremium.jsx";
import DescricaoSupra from "../Descricao/DescricaoSupra.jsx";
import DescricaoMaster from "../Descricao/DescricaoMaster.jsx";

class Lista extends React.Component {
    constructor() {
        super();

        this.state = { mostrarDescricaoStandart: false };
        this.state = { mostrarDescricaoPremium: false };
        this.state = { mostrarDescricaoSupra: false };
        this.state = { mostrarDescricaoMaster: false };
    }
    render() {
        return (
            <>
                <div id="suitesList">

                    <button className="suiteCard"
                        onClick={() => this.setState({ mostrarDescricaoStandart: !this.state.mostrarDescricaoStandart })
                        }>
                        <img src={FotoStandart1} alt=""></img>
                        <div className="description">
                            <h3>Suíte Standart</h3>
                            <p>{this.state.mostrarDescricaoStandart ? "Mostrar menos" : "Mais detalhes"}</p>
                        </div>
                    </button>

                    <button className="suiteCard"
                        onClick={() => this.setState({ mostrarDescricaoPremium: !this.state.mostrarDescricaoPremium })
                        }>
                        <img src={FotoPremium1} alt=""></img>
                        <div className="description">
                            <h3>Suíte Premium</h3>
                            <p>{this.state.mostrarDescricaoPremium ? "Mostrar menos" : "Mais detalhes"}</p>
                        </div>
                    </button>

                    <button className="suiteCard"
                        onClick={() => this.setState({ mostrarDescricaoSupra: !this.state.mostrarDescricaoSupra })
                        }>
                        <img src={FotoSupra1} alt=""></img>
                        <div className="description">
                            <h3>Suíte Supra</h3>
                            <p>{this.state.mostrarDescricaoSupra ? "Mostrar menos" : "Mais detalhes"}</p>
                        </div>
                    </button >

                    <button className="suiteCard"
                        onClick={() => this.setState({ mostrarDescricaoMaster: !this.state.mostrarDescricaoMaster })
                        }>
                        <img src={FotoMaster1} alt=""></img>
                        <div className="description">
                            <h3>Suíte Master</h3>
                            <p>{this.state.mostrarDescricaoMaster ? "Mostrar menos" : "Mais detalhes"}</p>
                        </div>
                    </button >
                </div >

                <div>
                    {this.state.mostrarDescricaoStandart ? <DescricaoStandart /> : null}
                    {this.state.mostrarDescricaoPremium ? <DescricaoPremium /> : null}
                    {this.state.mostrarDescricaoSupra ? <DescricaoSupra /> : null}
                    {this.state.mostrarDescricaoMaster ? <DescricaoMaster /> : null}
                </div>
            </>
        );
    };
};

export default Lista;