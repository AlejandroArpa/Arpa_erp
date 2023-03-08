import React from 'react'
import "./AddBtn.css"

function AddBtn({toogleForm}) {
  const handleClick=()=>{
    toogleForm();
  }
  return (
    <button className='add-btn' onClick={handleClick} >Agregar proyecto</button>
  )
}

export default AddBtn