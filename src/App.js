import BasicComponent from "./components/BasicComponent";
import './App.css'

//Crear una funcion que en ultima son muchos componentes
//Como no podemos generar componentes que no devulevan valores, podemos crear funciones y arreglos para remplazar los ciclos
//Los ciclos se deben ejecutar por fuera del elemento JSX, en funciones independientes
//funcion push: para agregar 
function muchosComponentes(x){
  let arreglo=[]
  for(let i=0; i<x;i++){
    arreglo.push(<BasicComponent inputID={i} texto={i} key={i}/>)
  }

  return arreglo;
}


function App(){

  //Reglas: Todas las etiquetas JSX deben tener un elemento padre
  //        Las propiedades deben tener un valor como cadena de texto o como expresión
  return(

    //className para aplicar una hoja de estilos
    <div className="App">         
      {muchosComponentes(5)}
    </div>
  )
}

export default App;