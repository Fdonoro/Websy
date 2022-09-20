import './App.css';
import TextoBasico from './Templates/TextoBasico';
import TextoIzquierda from './Templates/TextoIzquierda';
import TituloTexto from './Templates/TituloTexto';
function App() {
  return (
    <div className="App">
      <header>
       
      </header>
      <TextoBasico esColorida>Este es un template con un elemento basicop ara que veas que funciona rgeihg ghighrioht  hohiriho ioh oisrht r</TextoBasico>
      <TextoBasico>Este es otro elemento basico</TextoBasico>
      <TextoIzquierda >Este es otro elemento basico</TextoIzquierda>
      <TextoIzquierda esColorida>Este es otro elemento basico</TextoIzquierda>
      <TituloTexto titulo="Esto es el titulo" contenido="Y esto, el contenido"/>
      <TituloTexto esColorida titulo="Esto es el titulo" contenido="Y esto, el contenido"/>
    </div>
  );
}

export default App;
