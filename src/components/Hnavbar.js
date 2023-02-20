import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, Outlet, useLocation } from "react-router-dom";

const Hnavbar = () => {

  let location = useLocation();

  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <Link to={'/'}><a class="navbar-brand">Student Management System</a></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to={'/get-students'}><a class="nav-link">Students</a></Link>
        </li>
        <li class="nav-item">
          <Link to={'/get-faculties'}><a class="nav-link">Faculties</a></Link>
        </li>
        <li class="nav-item">
          <Link to={'/get-courses'}><a class="nav-link">Courses</a></Link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
        <Link to={'/'}><button class="btn btn-outline-danger mx-2" type="submit">Logout</button></Link>
      </form>
    </div>
  </div>
</nav>
<Outlet />
</>
  )
}

export default Hnavbar