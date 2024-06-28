import React from "react";

import form from "./form.css";
class Formulario extends React.Component {
  render() {
    return (
      <>
        <h3>Reserve logo fidumapeste!</h3>
        <form>
          <label for="nameInput">Nome:</label>
          <input
            className="formulario"
            type="text"
            id="nameInput"
            name="nome"
            placeholder="Digite seu nome..."
            required
          />

          <br />

          <label for="foneInput">Telefone:</label>
          <input
            className="formulario"
            type="tel"
            id="foneInput"
            name="telefone"
            placeholder="(XX) 99999-9999"
            required
          />

          <br />

          <label for="emailInput">E-mail:</label>
          <input
            className="formulario"
            type="email"
            id="emailInput"
            name="email"
            placeholder="exemplo@Xmail.com"
            required
          />
          <fieldset>
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
          </fieldset>

          <label for="dataInput">Data:</label>
          <input
            className="formulario"
            type="date"
            id="dataInput"
            name="data"
            required
          />

          <br />

          <label for="horaInput">Hora:</label>
          <input
            className="formulario"
            type="time"
            id="horaInput"
            name="hora"
            required
          />

          <br />

          <label for="messageInput">Mensagem:</label>
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

          <button>Não perca tempo! Faça já sua reserva!</button>
        </form>
      </>
    );
  }
}

export default Formulario;
