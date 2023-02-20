import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/AddStudent.css";
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { toast, ToastContainer } from "react-toastify";
import { useLocation, useNavigate } from 'react-router';

const UpdateSutdent = () => {

  let location = useLocation();
  const navigate = useNavigate();

  const [id, setId] = useState(location.state.payload.id);
  const [name, setName] = useState(location.state.payload.name);
  const [course, setCouse] = useState(location.state.payload.course);
  const [branch, setBranch] = useState(location.state.payload.branch);
  const [gender, setGender] = useState(location.state.payload.gender);
  const [email, setEmail] = useState(location.state.payload.mail);

  const updateStud = () => {

    if(!id || !name || !course || !branch || !gender || !email){
      toast.error("Incomplete Student Detaills");
      return;
    }

    const payload ={};
    payload.id = id;
    payload.name = name;
    payload.course = course;
    payload.branch = branch;
    payload.gender = gender;
    payload.mail = email;
    fetch("http://localhost:8080/student",
      {method : 'PUT',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(payload)}
      ).then((res) => res.json())
      .then((res) => {
          if(res)
            toast.success("Student Updated Successfully");
          else{
            toast.error("Failed to update");
          }
      }).then(() => navigate(-1))
  }

  return (
    <div class="student_card" style={{height : 620}}>
      <div class="container">
        <h2 className="heading" style={{marginRight: 220}}>Update Student</h2>
      </div>
      <FormControl onSubmit={updateStud}>
        <div className="form_fields">
          <label className="field_label" style={{marginRight: 50}}>ID</label>
          <TextField id="outlined-basic" label="Enter ID" variant="outlined" value={location.state.payload.id} onChange={(event)=>setId(event.target.value)}/>
        </div>
        <div className="form_fields">
          <label className="field_label">Name</label>
          <TextField id="outlined-basic" label="Enter name" variant="outlined" defaultValue={location.state.payload.name} onChange={(event)=>setName(event.target.value)}/>
        </div>
        <div className="form_fields">
          <label className="field_label">Course</label>
          <TextField id="outlined-basic" label="Enter Course" variant="outlined" defaultValue={location.state.payload.course} onChange={(event)=>setCouse(event.target.value)}/>
        </div>
        <div className="form_fields">
          <label className="field_label">Branch</label>
          <TextField id="outlined-basic" label="Enter Branch" variant="outlined" defaultValue={location.state.payload.branch} onChange={(event)=>setBranch(event.target.value)}/>
        </div>
        <div className="form_fields">
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <label className="field_label">Gender</label>
            <FormControlLabel value="male" control={<Radio onChange={(event)=>setGender(event.target.value)}/>} label="Male" />
            <FormControlLabel value="female" control={<Radio onChange={(event)=>setGender(event.target.value)}/>} label="Female" />
          </RadioGroup>
        </div>
        <div className="form_fields">
          <label className="field_label">Email</label>
          <TextField id="outlined-basic" label="Enter Email" variant="outlined" defaultValue={location.state.payload.mail} onChange={(event)=>setEmail(event.target.value)}/>
        </div>
        <div className="form_fields">
          <button class="btn btn-success add_btn" onClick={updateStud}>Update</button>
        </div>
      </FormControl>
      <ToastContainer />
    </div>
  );
};

export default UpdateSutdent;
