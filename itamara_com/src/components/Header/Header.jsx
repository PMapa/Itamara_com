import React from "react";

import logoImg from "../../assets/imgs/logo.PNG";

class Header extends React.Component {

    render() {
        return (
            <header>
                <a href="/">  <img src={logoImg} id="logo"></img>  </a>

                <nav>
                    <ul>
                        <li> <a href="/">Quem Somos</a> </li>
                        <li> <a href="/">Suítes</a> </li>
                        <li> <a href="/">Reservas</a> </li>
                        <li> <a href="/">Contato</a> </li>
                    </ul>
                </nav>
            </header>

        );
    };
};
export default Header;