import React, { useState } from 'react';

function FormularioUsuario() {
  // Crear un estado para almacenar el nombre del usuario
  const [nombre, setNombre] = useState('');
  const [mostrarNombre, setMostrarNombre] = useState('');

  // Función para manejar el cambio de texto en el input
  const manejarCambio = (evento) => {
    setNombre(evento.target.value);
  };

  // Función para mostrar el nombre cuando se presiona el botón
  const mostrarNombreEnPantalla = () => {
    setMostrarNombre(nombre);
  };

  return (
    <div>
      <h1>Formulario de Usuario</h1>
      <input 
        type="text" 
        placeholder="Escribe tu nombre" 
        value={nombre}
        onChange={manejarCambio} 
      />
      <button onClick={mostrarNombreEnPantalla}>Mostrar Nombre</button>

      {mostrarNombre && (
        <h2>Tu nombre es: {mostrarNombre}</h2>
      )}
    </div>
  );
}

export default FormularioUsuario;
