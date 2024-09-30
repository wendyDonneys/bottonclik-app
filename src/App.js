//Ejercicio1
// import React,{useState} from "react";
 
// function componenteA ({ temperatura, setTemperatura}) {
//     return (
//         <div>
//             <h2>Temperatura en componente A: {temperatura}°c</h2>
//              <button onClick={()=> {alert("¡Botón clickeado!");setTemperatura(temperatura + 1)}}>Aumentar</button>
            
//         </div>
//     );
// } 

// function ComponenteB ({temperatura,setTemperatura}){
//     return (
//         <div>
//             <h2>Temperatura en componente B: {temperatura}°c</h2>
//             <button onClick={()=> {alert("¡Botón clickeado!");setTemperatura(temperatura + 1)}}>Aumentar</button>

//         </div>
//     );
// }

// function App (){
//     const [temperatura, setTemperatura] = useState(0)
    
//    return (
//     <div>
//      <componenteA temperatura={temperatura} setTemperatura={setTemperatura} />
//      <ComponenteB temperatura={temperatura} setTemperatura={setTemperatura} />
//     </div>
//     );
// }
// export default App; 

//Ejercicio2
// import React, { useState } from 'react';

// function FormularioUsuario() {
//   // Crear un estado para almacenar el nombre del usuario
//   const [nombre, setNombre] = useState('');
//   const [mostrarNombre, setMostrarNombre] = useState('');

//   // Función para manejar el cambio de texto en el input
//   const manejarCambio = (evento) => {
//     setNombre(evento.target.value);
//   };

//   // Función para mostrar el nombre cuando se presiona el botón
//   const mostrarNombreEnPantalla = () => {
//     setMostrarNombre(nombre);
//   };

//   return (
//     <div>
//       <h1>Formulario de Usuario</h1>
//       <input 
//         type="text" 
//         placeholder="Escribe tu nombre" 
//         value={nombre}
//         onChange={manejarCambio} 
//       />
//       <button onClick={mostrarNombreEnPantalla}>Mostrar Nombre</button>

//       {mostrarNombre && (
//         <h2>Tu nombre es: {mostrarNombre}</h2>
//       )}
//     </div>
//   );
// }

// export default FormularioUsuario;

import React, { useState } from 'react';

// Componente Formulario
function Formulario({ onNumberChange }) {
  const handleChange = (event) => {
    onNumberChange(event.target.value); // Se pasa el valor ingresado al componente padre
  };

  return (
    <div>
      <label>Escribe un número: </label>
      <input type="number" onChange={handleChange} />
    </div>
  );
}

// Componente Resultado
function Resultado({ number }) {
  return (
    <div>
      <h3>Resultado: {number}</h3>
    </div>
  );
}

// Componente Padre (App)
function App() {
  const [number, setNumber] = useState(0); // Estado en el componente padre

  return (
    <div>
      <Formulario onNumberChange={setNumber} />
      <Resultado number={number} />
    </div>
  );
}

export default App;


