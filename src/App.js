import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador'
import logoReact from './Images/logo-React.png'
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const sumarContador = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarCont = () => {
    setNumClics(0);
  };

  return (
    <div className='App'>
      <div className='react-logo-contenedor'>
        <img
          className='logo-React'
          src = {logoReact}
          alt = 'logo de react'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics = {numClics} />
        <Boton
          texto = 'Clic'
          esBotonDeClic = {true}
          manejarClic = {sumarContador}
        />
        <Boton
          texto = 'Reiniciar'
          esBotonDeClic = {false}
          manejarClic = {reiniciarCont}
        />
      </div>
    </div>
  );
}

export default App;
