import React,{useState} from "react";
 
function componenteA ({ temperatura, setTemperatura}) {
    return (
        <div>
            <h2>Temperatura en componente A: {temperatura}°c</h2>
             <button onClick={()=> setTemperatura(temperatura + 1)}>Aumentar</button>
        </div>
    );
} 

function ComponenteB ({temperatura,setTemperatura}){
    return (
        <div>
            <h2>Temperatura en componente B: {temperatura}°c</h2>
            <button onClick={()=> setTemperatura(temperatura + 1)}>Aumentar</button>

        </div>
    );
}

function App (){
    const [temperatura, setTemperatura] = useState(0)
    
   return (
    <div>
     <componenteA temperatura={temperatura} setTemperatura={setTemperatura} />
     <ComponenteB temperatura={temperatura} setTemperatura={setTemperatura} />
    </div>
    );
}
export default App; 

