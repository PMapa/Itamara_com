import React from "react";

import form from "./form.css";
class Formulario extends React.Component {

    render() {
        return (
            <>
                <h3>Reserve logo fidumapeste!</h3>
                <form>
                    <label for="nome" class="formulario">Nome:</label>
                    <input type="text" id="nameInput" name="nome" required size="10" class="formulario" />

                    <br></br>
                    <fieldset>
                        <legend>Selecione a suíte desejada:</legend>

                        <input type="radio" id="standart" name="quarto" value="standart" />
                        <label for="standart">Standart</label>
                        <br></br><br></br>
                        <input type="radio" id="premium" name="quarto" value="premium" />
                        <label for="premium">Premium</label>
                        <br></br><br></br>
                        <input type="radio" id="supra" name="quarto" value="supra" />
                        <label for="supra">Supra</label>
                        <br></br><br></br>
                        <input type="radio" id="master" name="quarto" value="master" />
                        <label for="master">Master</label>
                        <br></br><br></br>
                        <input type="radio" id="luxo" name="quarto" value="luxo" />
                        <label for="luxo">Luxo</label>
                    </fieldset>

                    <br></br>
                    <label for="data" class="formulario">Data:</label>
                    <input type="date" id="dataInput" name="data" required class="formulario" />

                    <br></br>
                    <label for="hora" class="formulario">Hora:</label>
                    <input type="time" id="horaInput" name="hora" required class="formulario" />

                    <br></br>
                    <label for="mensagem" class="formulario">Mensagem:</label>
                    <input type="text" id="mensagemInput" name="mensagem" required size="50" class="formulario" />

                    <br></br>
                    <button>Não perca tempo! Faça já sua reserva!</button>

                </form>
                <br></br>
            </>
        );
    };
};

export default Formulario;