import React from 'react'
import "./ProjectItem.css"


function ProjectItem(props) {
  return (
    <li className= {props.color===true ? "dark item" : "ligth item" }>
      <div className='itemInfo'>
        <h3>{props.prj_title}</h3>
        <div className='crt_upd'>
          <p>Created: {props.prj_creation_date}</p>
          <p>Last Modified: {props.prj_last_upd}</p>
          <p>Edite by: {props.prj_upd_by}</p>
        </div>
      </div>
      <div className='btn_container'>
        <button className='btn_open btn'>Abrir</button>
        <button className='btn_edit btn'>Editar</button>
      </div>
    </li>
  )
}

export default ProjectItem