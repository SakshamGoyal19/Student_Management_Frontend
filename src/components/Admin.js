import React from 'react'
import "../css/Navbar.css"
import { Link, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"


const Admin = () => {

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  return (
    <>
    <div class="row my-3 me-4 bg-dark">
      <div className='col-1'>
        <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>
          &times;
        </a>
        <Link to={'get-students'}><a>Get All Students</a></Link>
        <Link to={'get-student'}><a>Serach Student</a></Link>
        <Link to={'add-student'}><a>Add Student</a></Link>
        <hr style={{color : "white"}}/>
        <Link to={'get-faculties'}><a>Get All Faculties</a></Link>
        <Link to={'get-faculty'}><a>Search Faculty</a></Link>
        <Link to={'add-faculty'}><a>Add Faculty</a></Link>
        <hr style={{color : "white"}}/>
        <Link to={'get-courses'}><a>Get All Courses</a></Link>
        <Link to={'add-course'}><a>Add Course</a></Link>
      </div>

        <div id="main">
          <span style={{fontSize: 30, cursor: "pointer", marginLeft: 20, color: "white"}} onClick={openNav}>
            &#9776;
          </span>
        </div>
      </div>
        <div className='col-2'></div>
        <div className='col-6'><h1 style={{color: "white"}}>Admin Dashboard</h1></div>
        <div className='col-2'></div>
        <div className='col-1'><Link to={'/'}><button className='btn btn-danger my-2'>Logout</button></Link></div>
    </div>
    <Outlet />
    </>
  )
}

export default Admin