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
