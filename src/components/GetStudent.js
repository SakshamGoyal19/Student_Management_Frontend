import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/AddStudent.css";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const GetStudent = () => {

  const [studentID, setStudentID] = useState('');
  const navigate = useNavigate()

  const redirect = () => {

    if(!studentID){
      toast.error("Empty Student ID")
      return;
    }

    fetch(`http://localhost:8080/student/${studentID}`)
    .then(res => res.json())
    .then((res) => {
      if(res.name != null){
        navigate('/student',{
          state:{res},
        })
      }
      else{
        toast.error("Invalid user id");
      }
    })
  }

  return (
    <div class="student_card" style={{height : 300}}>
      <div class="container">
        <h2 className="heading" style={{marginRight: 220}}>Serach Student</h2>
      </div>
      <FormControl>
        <div className="form_fields">
          <label className="field_label">Student ID</label>
          <TextField id="outlined-basic" label="Enter Student ID" variant="outlined" onChange={(event)=>setStudentID(event.target.value)}/>
        </div>
        <div className="form_fields">
          <button class="btn btn-primary add_btn" onClick={redirect}>Search</button>
        </div>
      </FormControl>
      <ToastContainer />
    </div>
  )
}

export default GetStudent