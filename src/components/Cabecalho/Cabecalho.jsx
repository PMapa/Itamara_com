import React from "react";

import Cabecalho from "./Cabecalho.css";

import logoImg from "../../assets/imgs/logo.PNG";

class Header extends React.Component {

    render() {
        return (
            <header>
                <a href="/">  <img src={logoImg} id="logo"></img>  </a>

                <nav id="nvb">
                    <ul>
                        <li> <a href="#sobreNos">Quem Somos</a> </li>
                        <li> <a href="#suits">Suítes</a> </li>
                        <li> <a href="#formu">Reservas</a> </li>
                        <li> <a href="#rodap">Contato</a> </li>
                    </ul>
                </nav>
            </header>

        );
    };
};
export default Header;