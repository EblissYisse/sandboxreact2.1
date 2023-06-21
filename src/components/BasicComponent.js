import {useState} from 'react';
/**
 * Siempre que usamos react
 * Crear una funcion con un return, siempre se debe retornar la estructura del componente
 * 
 * Componente: conjunto de elementos agrupados
 * Expresiones: referencia a algo que me genere un valor
 */

function BasicComponent(props){

    const [clicks, cambiarValor]=useState(0);

    const nuevoValor= ()=>{
        cambiarValor(clicks+1)
    }

    let id= props.inputID;

    let mensaje="Hola mundo";

    return(
        //no podemos colocar elementos que no devuelvan valores (decisiones, ciclos), se deben colocar elementos que si devuelvan
        <div>
            <h1>Mi componente {props.texto}</h1>
            <p>{mensaje}</p>
            <input
                type="text"
                id={id}
            />
            <button onClick={nuevoValor}>Soy un botón - Clicks: {clicks}</button>
        </div>
    )
}

//exportarlo como modulo porque debemos usarlo en otras partes de nuestro programa
export default BasicComponent;