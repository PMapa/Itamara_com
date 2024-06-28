import React from "react";

import rodape from "./rodape.css";

import faceIco from "../../assets/ico/faceIco.svg";
import instaIco from "../../assets/ico/instaIco.svg";
import whatsIco from "../../assets/ico/whatsIco.svg";
import localIco from "../../assets/ico/localIco.svg";
import whatsappIco from "../../assets/ico/whatsappIco.svg";
import phoneIco from "../../assets/ico/phoneIco.svg";
import mailIco from "../../assets/ico/mailIco.svg";

class Rodape extends React.Component {

    render() {
        return (
            <footer id="rodap">
                <div className="toe">
                    <div id="socialIcos">
                        <a href="https://www.facebook.com/itamara.motel" target="_blank">
                            <img id="facebook" src={faceIco}></img>
                        </a>

                        <a href="https://www.instagram.com/itamaramotel/" target="_blank">
                            <img id="instagram" src={instaIco}></img>
                        </a>

                        <a href="https://api.whatsapp.com/send?phone=553198948494" target="_blank">
                            <img id="whatsapp" src={whatsIco}></img>
                        </a>
                    </div>
                    <br></br>
                    <h4>TELEFONES</h4>
                    <br></br>
                    <p><img className="ico" src={phoneIco} alt="" />(31) 3105-0700</p>
                    <br></br>
                    <p><img className="ico" src={whatsappIco} alt="" />(31) 99894-8494</p>

                </div>
                <div className="toe">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.350666914301!2d-43.712745700000006!3d-20.285747399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa4080ea528bff3%3A0x25d367c28e96ff1e!2sItamara%20Motel!5e0!3m2!1sen!2sbr!4v1718997641367!5m2!1sen!2sbr"
                        width="250rem"
                        height="250rem"
                        // style="border:0;" 
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="toe">
                    <h4>ENDEREÇO</h4>
                    <br></br>
                    <p><img className="ico" src={localIco} alt="" />Rodovia dos Incofidentes (BR-356), km 64, s/n</p>
                    <p>Coelhos | Ouro Preto - MG, CEP: 35412-000</p>
                    <br></br>
                    <p><img className="ico" src={mailIco} alt="" />atendimento@itamara.com.br</p>
                </div>
                <div className="toe">
                    [api trip advisor]
                </div>

            </footer>
        );
    };
};

export default Rodape;