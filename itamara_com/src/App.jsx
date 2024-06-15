import React from "react";
import { Artigo } from "./components/mostrarCounter";

class App extends React.Component {

  constructor() {
    super();

    this.state = { mostrarArtigo: false }

  }
  render() {
    return (
      <>
        <h1>SysItamara</h1>

        <button onClick={() => {
          this.setState({ mostrarArtigo: !this.state.mostrarArtigo });
        }}
        >
          <div>
            {this.state.mostrarArtigo ? "Veja outras suítes" : "Suíte Supra"}
          </div>
        </button>

        {this.state.mostrarArtigo && <Artigo />}
        {/* {this.state.mostrarArtigo ? <Artigo /> : null} */}
      </>
    );
  }
}
export default App;
