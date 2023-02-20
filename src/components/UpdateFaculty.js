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

const UpdateFaculty = () => {

  let location = useLocation();
  const navigate = useNavigate();

  const [id, setId] = useState(location.state.payload.id);
  const [name, setName] = useState(location.state.payload.name);
  const [branch, setBranch] = useState(location.state.payload.branch);
  const [subject, setSubject] = useState(location.state.payload.subject);
  const [gender, setGender] = useState(location.state.payload.gender);
  const [email, setEmail] = useState(location.state.payload.mail);

  const updateFact = () => {

    if(!id || !name || !branch || !subject || !gender || !email){
      toast.error("Incomplete Faculty Details");
      return;
    }

    const payload ={};
    payload.id = id;
    payload.name = name;
    payload.branch = branch;
    payload.subject = subject;
    payload.gender = gender;
    payload.mail = email;
    fetch("http://localhost:8080/faculty",
      {method : 'PUT',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(payload)}
      ).then((res) => {
          if(res)
            toast.success("Faculty Updated Successfully");
          else{
            toast.error("Failed to update");
          }
      }).then(() => navigate(-1))
  }

  return (
    <div class="student_card" style={{height : 620}}>
      <div class="container">
        <h2 className="heading" style={{marginRight: 220}}>Update Faculty</h2>
      </div>
      <FormControl>
        <div className="form_fields">
          <label className="field_label" style={{marginRight: 50}}>ID</label>
          <TextField id="outlined-basic" label="Enter ID" variant="outlined" value={location.state.payload.id} onChange={(event)=>setId(event.target.value)}/>
        </div>
        <div className="form_fields">
          <label className="field_label">Name</label>
          <TextField id="outlined-basic" label="Enter name" variant="outlined" defaultValue={location.state.payload.name} onChange={(event)=>setName(event.target.value)}/>
        </div>
        <div className="form_fields">
          <label className="field_label">Branch</label>
          <TextField id="outlined-basic" label="Enter Branch" variant="outlined" defaultValue={location.state.payload.branch} onChange={(event)=>setBranch(event.target.value)}/>
        </div>
        <div className="form_fields">
          <label className="field_label">Subject</label>
          <TextField id="outlined-basic" label="Enter Subject" variant="outlined" defaultValue={location.state.payload.subject} onChange={(event)=>setSubject(event.target.value)}/>
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
          <button class="btn btn-success add_btn" onClick={updateFact}>Update</button>
        </div>
      </FormControl>
      <ToastContainer />
    </div>
  );
};

export default UpdateFaculty;
