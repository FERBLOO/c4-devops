// vendors
import React from "react";
import { useQuery, gql } from '@apollo/client';

const PROJECTS = gql `
  query AllProjects {
    allProjects {
      name
      generalObjective
      specificObjectives
      budget
      leader {
        email
        fullName
        role
        status
      }
      phase
    }
  }
`;

const Projects = () => {
  const { data } = useQuery(PROJECTS);
  console.log(data);

  return <>{!data ? <></> : data?.allProjects?.map(Project =>(
    <>


    <div className="table-responsive">
  <table className="table">
    <tr>
  <th scope="row">Nombre del proyecto:</th>
  <td key={Project._id}>{Project.name}</td>
  </tr>
  <tr>
  <th scope="row">Presupuesto:</th>
  <td key={Project.budget}>{Project.budget}</td>
  </tr>
  <tr>
  <th scope="row">Líder:</th>
  <td key={Project.leader.fullName}>{Project.leader.fullName}</td>
  </tr>
  <tr>
  <th scope="row">Fase:</th>
    <td key={Project.phase}>{Project.phase}</td>
    </tr>
  </table>
</div>

    {/* <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre del proyecto</th>
      <th scope="col">Objetivo general</th>
      <th scope="col">Presupuesto</th>
      <th scope="col">Líder</th>
      <th scope="col">Estado</th>
      <th scope="col">Fase</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>que pasa?</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table> */}
    
   </>
  ))}</>
};

export default Projects;