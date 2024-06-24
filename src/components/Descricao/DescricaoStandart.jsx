import React from "react";

import descricaoo from "./descricaoo.css";
class Descricao extends React.Component {
    render() {
        return (
            <>
                <section className="descricaoArea">
                    <div>
                        <h5>Sobre a suíte Standart</h5>

                        <p>
                            Espaço de 86m2, Cama queen size, TV 42” por assinatura com canais privados, frigobar completos, ar condicionado quente/frio, wi-fi, sistema de automação inteligente (que controla todos os equipamentos e iluminação do quarto) e decoração clean.
                        </p>
                        <br></br>
                        <p>
                            *Check-in Pernoite: 2ª a 5ª feira (exceto feriados, vésperas e Dia dos Namorados): 20h |
                            6ª a domingo + feriados, vésperas e Dia dos Namorados: 22h
                        </p>
                        <p>
                            Feriados específicos, Dia dos Namorados e períodos de alta procura poderão sofrer reajuste nas tarifas.
                            <br></br>
                            Consulte o valor atualizado antes de fazer sua reserva.
                        </p>
                    </div>
                    <div>
                        <h5>TARIFAS</h5>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Período (3 horas):</td>
                                    <td>R$ 220,00</td>
                                </tr>
                                <tr>
                                    <td>Hora Extra:</td>
                                    <td>R$ 60,00</td>
                                </tr>
                                <tr>
                                    <td>Pernoite:</td>
                                    <td>R$ 355,00</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                        {/* <p>
                            Período (3 horas): R$ 490,00            <br></br>
                            Hora adicional: R$ 90,00                <br></br>
                            Pernoite (20h às 12h)*: R$ 610,00       <br></br>
                            Day Use (7h às 17h): R$ 610,00          <br></br>
                            <br></br>
                            Diária (14h às 12h):                    <br></br>
                            - 2ª a 5ª feira: R$ 720,00              <br></br>
                            - 6ª feira, sábado e domingo: R$ 980,00 <br></br>
                            - Feriados: R$ 1120,00                  <br></br>
                        </p> */}
                </section >
            </>
        );
    };
};

export default Descricao;