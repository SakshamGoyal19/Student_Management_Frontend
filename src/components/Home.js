import React from 'react'
import { useNavigate } from "react-router-dom";
import logo from "../university.png"
import "bootstrap/dist/css/bootstrap.min.css"

const Home = () => {
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/login")
  }

  return (
    <div className="d-flex flex-column">
      <div className="p-2 my-4" ><h1 className="fw-bold">Student Management System</h1></div>
      <div className="p-2"><img  src={logo} style={{height: 600, width: 900}}/></div>
      <div className="p-2"><button class="btn btn-success" onClick={redirect}>Login</button></div>
    </div>
  )
}

export default Home