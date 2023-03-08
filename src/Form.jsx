import React from 'react'
import "./Form.css"

function Form({frmVis}) {
  
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const getValue = (event) =>{
    console.log(event.target.value)
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
          <button className='btn btn-crear'>Crear</button>
          <button className='btn btn-cancel'>Cancelar</button>
        </div>
      </form>
    </div>
    
  )
}

export default Form