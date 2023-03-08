import React from 'react'
import { useState } from 'react';
import "./Form.css"
import $ from 'jquery';

function Form({frmVis, toogleForm}) {
  
  const [in1,setIn1]=useState("")
  const [in2,setIn2]=useState("")
  const [in3,setIn3]=useState("")
  const [in4,setIn4]=useState("")


  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const getValue = (event) =>{
    console.log(event.target.value)
  }

  function onSub(){//
    if(in1!="" && in2!="" && in3!="" && in4!="" ){

      toogleForm()
    }
  }


  return (
    <div className={frmVis ? "show shadow" : "hidde shadow" }>
      <form className={frmVis ? "show formu" : "hidde formu"} onSubmit={handleSubmit}>
        <div className='input-container'>
          <input type="text" placeholder='Titulo proyecto' required onChange={getValue}/>
          <input type="text" placeholder='Edit by' required/>
        </div>
        <div className='date-container'>
          <input type="date" required/>
          <input type="date" required/>
        </div>
        <div className='btn-container'>
          <button className='btn btn-crear' onClick={onSub}>Crear</button>
          <button className='btn btn-cancel' oni onClick={()=>toogleForm()}>Cancelar</button>
        </div>
      </form>
    </div>
    
  )
}

export default Form