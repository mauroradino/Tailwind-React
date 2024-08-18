import CalzadoJSON from "./calzados.json"
import { useState } from "react";
import CardProducto from "./components/CardProducto/CardProducto";
import './App.css';

function App() {
  const [activeButton, setActiveButton] = useState({})
  const [contador, setContador] = useState(0)

  const handleClickTalle = (idCard, idTalle) => {
    setActiveButton(prevState => ({
      ...prevState,
      [idCard]: idTalle
    }));
  }

  const incrementarContador = () => {
    setContador(prevContador => prevContador + 1)
  }

  return (
    <div className="min-h-screen max-h-max bg-slate-700">
      <header className="w-full h-max p-4 flex justify-between">
        <h1 className='text-white'>Primeras cards con Tailwind CSS</h1>
        <div>
          <div className="relative left-5 bg-white w-6 h-6 rounded-full text-center text-slate-700 font-bold z-50">
            {contador}
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-cart-fill mr-6" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
          </svg>
        </div>
      </header>
      <main className='w-full h-max p-6'>
        {CalzadoJSON.map((calzado, i) => {
          let calzadoTalles = calzado.talles
          return (
            <CardProducto incrementarContador={incrementarContador} calzadoTalles={calzadoTalles} calzado={calzado} i={i} handleClickTalle={handleClickTalle} activeButton={activeButton} />
          )
        })}
      </main>
    </div>
  );
}

export default App;
