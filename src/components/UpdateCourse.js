import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/AddStudent.css";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { toast, ToastContainer } from "react-toastify";
import { useLocation, useNavigate } from 'react-router';

const UpdateCourse = () => {

  let location = useLocation();
  const navigate = useNavigate();

  const [id, setId] = useState(location.state.payload.id);
  const [branch, setBranch] = useState(location.state.payload.branch);
  const [hod, setHod] = useState(location.state.payload.hod);
  const [seats, setSeats] = useState(location.state.payload.totalSeats);
  const [filled, setFilled] = useState(location.state.payload.filledSeats);


  const updateCourse = () => {

    if(!id || !branch || !hod || !seats || !filled){
      toast.error("Incomplete Course Details");
      return;
    }

    const payload ={};
    payload.id = id;
    payload.branch = branch;
    payload.hod = hod;
    payload.totalSeats = seats;
    payload.filledSeats = filled;

    fetch("http://localhost:8080/course",
      {method : 'PUT',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(payload)}
      ).then((res) => {
          if(res)
            toast.success("Course Updated Successfully");
          else{
            toast.error("Failed to update");
          }
      }).then(() => navigate(-1))
  }

  return (
    <div class="student_card" style={{height : 580}}>
      <div class="container">
        <h2 className="heading" style={{marginRight: 220}}>Update Course</h2>
      </div>
      <FormControl>
        <div className="form_fields">
          <label className="field_label" style={{marginRight: 30}}>Course ID</label>
          <TextField id="outlined-basic" label="Enter ID" variant="outlined" value={location.state.payload.id} onChange={(event)=>setId(event.target.value)}/>
        </div>
        <div className="form_fields">
          <label className="field_label" style={{marginRight: 60}}>Name</label>
          <TextField id="outlined-basic" label="Enter name" variant="outlined" defaultValue={location.state.payload.branch} onChange={(event)=>setBranch(event.target.value)}/>
        </div>
        <div className="form_fields">
          <label className="field_label" style={{marginRight: 70}}>HOD</label>
          <TextField id="outlined-basic" label="Enter HOD" variant="outlined" defaultValue={location.state.payload.hod} onChange={(event)=>setHod(event.target.value)}/>
        </div>
        <div className="form_fields">
          <label className="field_label">Total Seats</label>
          <TextField id="outlined-basic" label="Enter total seats" variant="outlined" defaultValue={location.state.payload.totalSeats} onChange={(event)=>setSeats(event.target.value)}/>
        </div>
        <div className="form_fields">
          <label className="field_label">Filled Seats</label>
          <TextField id="outlined-basic" label="Enter filled seats" variant="outlined" defaultValue={location.state.payload.filledSeats} onChange={(event)=>setFilled(event.target.value)}/>
        </div>
        <div className="form_fields">
          <button class="btn btn-success add_btn" onClick={updateCourse}>Update</button>
        </div>
      </FormControl>
      <ToastContainer />
    </div>
  );
};

export default UpdateCourse;
