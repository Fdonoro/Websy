import './App.css';
import TextoBasico from './Templates/TextoBasico';
import TextoIzquierda from './Templates/TextoIzquierda';
import TextoDerecha from './Templates/TextoDerecha';
import TituloTexto from './Templates/TituloTexto';
import Navbar from './Templates/Navbar';
function App() {
  return (
    <div className="App">
      <header>
        <Navbar></Navbar>
      </header>
      <TextoBasico>Este es un template con un elemento basicop ara que veas que funciona rgeihg ghighrioht  hohiriho ioh oisrht r</TextoBasico>
      <TextoBasico esColorida>Este es otro elemento basico</TextoBasico>
      <TextoIzquierda titulo="Esto es el titulo" contenido="Y esto, el contenido"/>
      <TextoIzquierda esColorida titulo="Esto es el titulo" contenido="Y esto, el contenido"/>
      <TituloTexto  titulo="Esto es el titulo" contenido="Y esto, el contenido"/>
      <TituloTexto esColorida titulo="Esto es el titulo" contenido="Y esto, el contenido"/>
      <TextoDerecha titulo="Esto es el titulo" contenido="Y esto, el contenido"/>
      <TextoDerecha esColorida titulo="Esto es el titulo" contenido="Y esto, el contenido"/>
    </div>
  );
}

export default App;
