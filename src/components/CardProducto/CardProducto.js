import React from 'react'
import Swal from 'sweetalert2'

const CardProducto = ({ incrementarContador, handleClickTalle, i, calzado, calzadoTalles, activeButton }) => {

    const Agregar = () => {
        Swal.fire({
            icon: "success",
            title: "Producto agregado con éxito"
        })
        incrementarContador()
    }

    const ComprarAhora = () => {
        Swal.fire({
            title: "Estas seguro/a?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirmar Compra",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Compra Confirmada!",
                    text: "Muchas gracias!",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div key={i} className='bg-slate-300 h-max w-5/6 m-auto my-12 rounded-lg flex flex-col sm:h-max sm:flex-row sm:w-5/6 shadow-2xl lg:w-2/4'>
            <img className='h-full w-auto rounded-tl-lg rounded-tr-lg sm:w-3/6 sm:rounded-tl-lg sm:rounded-bl-lg sm:rounded-tr-none sm:h-auto' src={calzado.imagen} alt='producto' />
            <div className="w-5/6 flex flex-col justify-center mx-auto sm:w-3/6">
                <div className="flex justify-between items-center p-3">
                    <h3 className="font-bold text-slate-700 text-xl">{calzado.nombre}</h3>
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#334155" classname="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <p>{calzado.calificacion}</p>
                    </div>
                </div>
                <p className="text-slate-500 text-start p-3">{calzado.descripcion}</p>
                <div className="w-max grid my-4 grid-cols-4 gap-2 mx-auto sm:flex xs:grid-cols-4 s:grid-cols-5 md:w-4/5 md:justify-center">
                    {calzadoTalles.map((talle, iTalle) => {
                        return (
                            <button id={iTalle} onClick={() => { handleClickTalle(i, iTalle) }} className={`p-3 rounded-lg ${activeButton[i] === iTalle ? "bg-slate-700" : "bg-slate-500"} sm:p-2 sm:text-xs md:text-base md:p-3`}>
                                <p className="text-slate-100 sm:text-sm">{talle}</p>
                            </button>
                        )
                    })
                    }
                </div>
                <div className="flex flex-col w-12/12 p-2 my-4 gap-4 md:flex-row md:w-11/12 md:mx-auto">
                    <button onClick={Agregar} className="bg-slate-700 text-slate-100 p-2 rounded-lg active:bg-slate-800 md:p-3 md:w-full">Agregar</button>
                    <button onClick={ComprarAhora} className="bg-slate-500 text-slate-100 p-2 rounded-lg active:bg-slate-600 md:p-3 md:w-full">Comprar Ahora</button>
                </div>
            </div>
        </div>
    )
}

export default CardProducto
