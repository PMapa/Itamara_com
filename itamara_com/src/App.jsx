import React from "react";
import './styles/App.css';

import Descricao from "./Descricao/Descricao.jsx";
import logoImg from "./assets/imgs/logo.PNG";
class App extends React.Component {

  render() {
    return (
      <>

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

        <main>
          <section>
            <h3>Quem Somos</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quia deleniti delectus, voluptatum aperiam
              iste repellendus! Ab facilis alias quae esse harum! Impedit facere sapiente consequuntur hic in quas nam.</p>
            <p>Lore m ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quia deleniti delectus, voluptatum aperiam
              iste repellendus! Ab facilis alias quae esse harum! Impedit facere sapiente consequuntur hic in quas nam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quia deleniti delectus, voluptatum aperiam
              iste repellendus! Ab facilis alias quae esse harum! Impedit facere sapiente consequuntur hic in quas nam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quia deleniti delectus, voluptatum aperiam
              iste repellendus! Ab facilis alias quae esse harum! Impedit facere sapiente consequuntur hic in quas nam.</p>
          </section>

          <section id="suitesList">
            <h3>Nossas instalações</h3>

            <div class="cardSuites">
              <button >

              </button>
            </div>

          </section>

          <section id="secaoSuites">
            <Descricao />
          </section>

          <section id="formu">
            <h3>Reserve logo fidumapeste!</h3>
            <form>
              <label for="nome" class="formulario">Nome:</label>
              <input type="text" id="nameInput" name="nome" required size="10" class="formulario" />

              <fieldset>
                <legend>Selecione a suíte desejada:</legend>

                <div>
                  <input type="radio" id="standart" name="quarto" value="standart" />
                  <label for="standart">Standart</label>
                </div>

                <div>
                  <input type="radio" id="premium" name="quarto" value="premium" />
                  <label for="premium">Premium</label>
                </div>

                <div>
                  <input type="radio" id="supra" name="quarto" value="supra" />
                  <label for="supra">Supra</label>
                </div>

                <div>
                  <input type="radio" id="master" name="quarto" value="master" />
                  <label for="master">Master</label>
                </div>

                <div>
                  <input type="radio" id="luxo" name="quarto" value="luxo" />
                  <label for="luxo">Luxo</label>
                </div>
              </fieldset>

              <label for="data" class="formulario">Data:</label>
              <input type="date" id="dataInput" name="data" required class="formulario" />

              <label for="hora" class="formulario">Hora:</label>
              <input type="time" id="horaInput" name="hora" required class="formulario" />

              <label for="mensagem" class="formulario">Mensagem:</label>
              <input type="text" id="mensagemInput" name="mensagem" required size="50" class="formulario" />

              <button>Não perca tempo! Faça já sua reserva!</button>

            </form>

          </section>
        </main>
        <footer>
          <div class="foot">
            <h4>TELEFONES</h4>
            <p>(31) 3105-0700</p>
            <p>(31) 99894-8494</p>
          </div>
          <div class="foot">
          </div>
          <div class="foot">
            <h4>ENDEREÇOS</h4>
            <p>Rodovia dos Incofidentes (BR-356), km 64, s/n</p>
            <p>CEP: 35412-000, Coelhos | Ouro Preto - MG</p>

            <p>atendimento@itamara.com.br</p>
          </div>
          <div class="foot">
            [api trip advisor]
          </div>
        </footer>


      </>
    );
  };
};
export default App;
