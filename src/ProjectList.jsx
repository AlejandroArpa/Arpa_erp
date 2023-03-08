import React from 'react'

function ProjectList({children}) {
  return (
    <ul style={{listStyle:'none'}}>
      {children}
    </ul>
  )
}

export default ProjectList