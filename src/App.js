import './App.css';
import { useState } from 'react';
import ProjectList from './ProjectList';
import ProjectItem from './ProjectItem';
import AddBtn from './AddBtn';
import Form from './Form';


const projects=[
  {
    project_title:"Titulo1",
    creation_date:"01/01/2022",
    last_update:"02/01/2022",
    update_by:"Juan Perez"
  },

  {
    project_title:"Titulo2",
    creation_date:"03/01/2022",
    last_update:"04/01/2022",
    update_by:"Maria Perez"
  },

  {
    project_title:"Titulo3",
    creation_date:"05/01/2022",
    last_update:"06/01/2022",
    update_by:"Jose Hernandez"
  },

  {
    project_title:"Titulo4",
    creation_date:"05/01/2022",
    last_update:"06/01/2022",
    update_by:"Jose Hernandez"
  }
]


function App() {
  const [frmVis,setFrmVis]=useState(false)
  console.log(frmVis)
  
  const toogleForm = () => {
    const newVis = !frmVis;
    setFrmVis(newVis);
    
  }


  return (
    <div className="App">
      <Form 
        frmVis={frmVis}
        toogleForm={toogleForm}
      >

      </Form>
      <ProjectList className="prjList">
        {
          projects.map((project,index)=>(
            <ProjectItem 
              prj_title={project.project_title}
              prj_creation_date={project.creation_date}
              prj_last_upd={project.last_update}
              prj_upd_by={project.update_by}
              key={project.project_title}
              color={index%2===0 ? true : false}
            />
            
          ))

          
        }
      </ProjectList>
      <AddBtn toogleForm={toogleForm}/>

    </div>
  );
}

export default App;
