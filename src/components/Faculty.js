import React from 'react'
import "../css/Student.css"
import "bootstrap/dist/css/bootstrap.min.css"
import PersonIcon from '@mui/icons-material/Person';
import { useLocation } from 'react-router';

const Faculty = () => {
  let location = useLocation()
  return (
    <>
    <div class="card text-center container" style={{marginTop: 100}}>
      <div class="card-header"></div>
      <h5 class="card-title fs-1 fw-bold my-5">{location.state.res.name}</h5>
      <div class="card-body">
        <div className="card-data flex-column fw-bold ms-3 me-5">
          <p class="card-text fs-4 d-flex">ID : {location.state.res.id}</p>
          <p class="card-text fs-4 d-flex">Dept : {location.state.res.branch}</p>
          <p class="card-text fs-4 d-flex">Subject : {location.state.res.subject}</p>
          <p class="card-text fs-4 d-flex">Email  : {location.state.res.mail}</p>
          <p class="card-text fs-4 d-flex">Gender : {location.state.res.gender}</p>
        </div>
        <div className='card-image'>
            <PersonIcon style={{ fontSize: "200px" }}/>
        </div>
      </div>
      <div class="card-footer text-muted mt-5"></div>
    </div>
   </>
  )
}

export default Faculty