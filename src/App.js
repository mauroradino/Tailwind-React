import CalzadoJSON from "./calzados.json"
import { useState } from "react";
import CardProducto from "./components/CardProducto/CardProducto";
import './App.css';

function App() {
  const [activeButton, setActiveButton] = useState({})

  const handleClickTalle = (idCard, idTalle) => {
    setActiveButton(prevState => ({
      ...prevState,
      [idCard]: idTalle
    }));
  }

  return (
    <div className="min-h-screen max-h-max bg-slate-700">
      <header className="w-full h-max p-3">
        <h1 className='text-white'>Primeras cards con Tailwind CSS</h1>
      </header>
      <main className='w-full h-max p-6'>
        {CalzadoJSON.map((calzado, i) => {
          let calzadoTalles = calzado.talles
          return (
            <CardProducto calzadoTalles={calzadoTalles} calzado={calzado} i={i} handleClickTalle={handleClickTalle} activeButton={activeButton} />
          )
        })}
      </main>
    </div>
  );
}

export default App;
