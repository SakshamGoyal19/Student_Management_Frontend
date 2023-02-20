import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/AddStudent.css";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const GetFaculty = () => {

  const [facultyID, setFacultyID] = useState('');
  const navigate = useNavigate()

  const redirect = () => {

    if(!facultyID){
      toast.error("Empty Faculty ID");
      return;
    }

    fetch(`http://localhost:8080/student/${facultyID}`
      ).then(res => res.json())
      .then((res) => {
        if(res.name != null){
          navigate('/admin/faculty',{
            state:{res},
          })
        }
        else{
          toast.error("Invalid faculty id");
        }
      })
  }

  return (
    <div class="student_card" style={{height : 300}}>
      <div class="container">
        <h2 className="heading" style={{marginRight: 220}}>Serach Faculty</h2>
      </div>
      <FormControl>
        <div className="form_fields">
          <label className="field_label">Faculty ID</label>
          <TextField id="outlined-basic" label="Enter Faculty ID" variant="outlined" onChange={(event)=>setFacultyID(event.target.value)}/>
        </div>
        <div className="form_fields">
          <button class="btn btn-primary add_btn" onClick={redirect}>Search</button>
        </div>
      </FormControl>
      <ToastContainer />
    </div>
  )
}

export default GetFaculty