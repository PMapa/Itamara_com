import React from "react";

import form from "./form.css";
class Formulario extends React.Component {
  render() {
    return (
      <>
        {" "}
        <h3>Não perca tempo, faça já sua reserva!</h3>
        <section id="formu">
          <form>
            <label for="nameInput">
              Nome: <span>*</span>
            </label>
            <input
              className="formulario"
              type="text"
              id="nameInput"
              name="nome"
              placeholder="Digite seu nome..."
              required
            />

            <br />

            <label for="foneInput">
              Telefone: <span>*</span>
            </label>
            <input
              className="formulario"
              type="tel"
              id="foneInput"
              name="telefone"
              placeholder="(XX) 99999-9999"
              required
            />

            <br />

            <label for="emailInput">
              E-mail: <span>*</span>
            </label>
            <input
              className="formulario"
              type="email"
              id="emailInput"
              name="email"
              placeholder="exemplo@Xmail.com"
              required
            />

            <br />

            <label for="suiteInput">
              Selecione a suíte desejada: <span>*</span>
            </label>
            <select
              className="formulario"
              id="suiteInput"
              name="suite"
              required
            >
              <option value="Standart">Standart</option>
              <option value="Premium">Premium</option>
              <option value="Supra">Supra</option>
              <option value="Master">Master</option>
            </select>
            {/* <fieldset>
            <legend>Selecione a suíte desejada:</legend>

            <input type="radio" id="standart" name="quarto" value="standart" />
            <label for="standart">Standart</label>
            <br />
            <input type="radio" id="premium" name="quarto" value="premium" />
            <label for="premium">Premium</label>
            <br />
            <input type="radio" id="supra" name="quarto" value="supra" />
            <label for="supra">Supra</label>
            <br />
            <input type="radio" id="master" name="quarto" value="master" />
            <label for="master">Master</label>
            <br />
            <input type="radio" id="luxo" name="quarto" value="luxo" />
            <label for="luxo">Luxo</label>
          </fieldset> */}

            <br />

            <label for="dataInput">
              Data: <span>*</span>
            </label>
            <input
              className="formulario"
              type="date"
              id="dataInput"
              name="data"
              required
            />

            <br />

            <label for="horaInput">
              Hora: <span>*</span>
            </label>
            <input
              className="formulario"
              type="time"
              id="horaInput"
              name="hora"
              required
            />

            <br />

            <label for="messageInput">
              Mensagem: <span>*</span>
            </label>
            <br />
            <input
              className="formulario"
              type="text"
              id="messageInput"
              name="mensagem"
              placeholder="Digite uma mensagem, para agilizar seu atendimento"
              required
            />

            <br />
            <br />

            <button>FAZER PRÉ-RESERVA</button>
          </form>

          <div id="formDescription">
            <p>
              SUÍTE STANDARD Tarifas Período (3 horas): R$ 140,00 Hora
              adicional: R$ 40,00 Pernoite (20h às 12h)* | Café da manhã
              incluso: R$ 230,00 Day Use (7h às 17h) | 4 Cervejas ou 2 Drinks
              inclusos: R$ 230,00 Diária (14h às 12h) | Café da manhã incluso: –
              2ª a 5ª feira: R$ 298,00 – 6ª feira, sábado e domingo: R$ 330,00 –
              Feriados: R$ 390,00 Feriados específicos, Dia dos Namorados e
              períodos de alta procura poderão sofrer reajuste nas tarifas.
              Consulte o valor atualizado antes de fazer sua reserva
            </p>
            <table>
              <thead>
                <th>Ola</th>
                <th>Mundo</th>
              </thead>
            </table>
          </div>
        </section>
      </>
    );
  }
}

export default Formulario;
