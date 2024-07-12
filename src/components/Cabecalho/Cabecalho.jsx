import React from "react";

import Cabecalho from "./Cabecalho.css";

import logoImg from "../../assets/imgs/logo.PNG";

class Header extends React.Component {

    render() {
        return (
            <header>
                <a href="/">  <img src={logoImg} id="logo"></img>  </a>

                <nav>
                    <ul  id="nvb">
                        <li className="nav-link"> <a href="#sobreNos">Home</a> </li>
                        <li className="nav-link"> <a href="#suits">Suítes</a> </li>
                        <li className="nav-link"> <a href="#formu">Reservas</a> </li>
                        <li className="nav-link"> <a href="#about">Cardápio</a> </li>
                        <li className="nav-link"> <a href="#rodap">Contato</a> </li>
                    </ul>
                </nav>
            </header>
        );
    };
};
export default Header;