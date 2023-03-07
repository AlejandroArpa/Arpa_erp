import './App.css';
import CotizacionTarjeta from './CotizacionTarjeta';
import CotizacionItem from './CotizacionItem';
import AddCotizacionForm from './AddCotizacionForm';
import CreateBtn from './CreateBtn';
import { useState } from 'react';

//Constantes de inicio
  //cte cotizaciones por defecto
const defCotizaciones =[
  {
    consecutivo:1000,
    cliente:"Argos - Rio Claro",
    Nombre:"Tornillo Sin fin molino",
    logo:'/home/alejandro/Documentos/arpa_erp_v0/src/logoArgos.jpg'
  },
  {
    consecutivo:1001,
    cliente:"Mineros",
    Nombre:"Brazo Draga",
  },
  {
    consecutivo:1002,
    cliente:"Argos - Tolcemento",
    Nombre:"Repuesto",
  },
  {
    consecutivo:1003,
    cliente:"Cemex",
    Nombre:"Tornillo Sin fin ",
  },
  {
    consecutivo:1004,
    cliente:"Danna",
    Nombre:"Huellitas",
  },
]


function App() {

const[flag,setFlag]=useState(false);

const showhidde =()=>{
  
  let act =! flag;
  setFlag(act);
  console.log(flag);
}

const styles={
  Add:{

    // display:{ flag ? "flex" : "none"}
  }

}


  return (
    <div className="App">
      

    </div>
  );
}

export default App;
