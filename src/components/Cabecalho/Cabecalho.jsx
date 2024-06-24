import React from "react";

import Cabecalho from "./Cabecalho.css";

import logoImg from "../../assets/imgs/logo.PNG";

class Header extends React.Component {

    render() {
        return (
            <header>
                <a href="/">  <img src={logoImg} id="logo"></img>  </a>

                <nav>
                    <ul>
                        <li> <a href="#sobreNos">Quem Somos</a> </li>
                        <li> <a href="#suitesList">Suítes</a> </li>
                        <li> <a href="#formu">Reservas</a> </li>
                        <li> <a href="#rodap">Contato</a> </li>
                    </ul>
                </nav>
            </header>

        );
    };
};
export default Header;