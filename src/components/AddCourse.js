import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/AddStudent.css";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {

  const navigate = useNavigate();

  const [name, setName] = useState();
  const [hod, setHod] = useState();
  const [seats, setSeats] = useState();
  const [filled, setFilled] = useState();

  const addCourse = () => {

    if(!name || !hod || !seats || !filled){
      toast.error("Incomplete Course Details");
      return;
    }

    const payload ={};
    payload.branch = name;
    payload.hod = hod;
    payload.totalSeats = seats;
    payload.filledSeats = filled;

    fetch("http://localhost:8080/course",
      {method : 'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(payload)}
      ).then((res) => res.json())
      .then((res) => {
          if(res)
            toast.success("Course Added Successfully");
          else{
            toast.error("Course already exists");
          }
      }).then(() => navigate("/admin/get-courses"))
  }

  return (
    <div class="student_card" style={{height : 500}}>
      <div class="container">
        <h2 className="heading" style={{marginRight: 220}}>Add Course</h2>
      </div>
      <FormControl>
        <div className="form_fields">
          <label className="field_label" style={{marginRight: 60}}>Name</label>
          <TextField id="outlined-basic" label="Enter name" variant="outlined" onChange={(event)=>setName(event.target.value)}/>
        </div>
        <div className="form_fields">
          <label className="field_label" style={{marginRight: 70}}>HOD</label>
          <TextField id="outlined-basic" label="Enter HOD" variant="outlined" onChange={(event)=>setHod(event.target.value)}/>
        </div>
        <div className="form_fields">
          <label className="field_label">Total Seats</label>
          <TextField id="outlined-basic" label="Enter total seats" variant="outlined" onChange={(event)=>setSeats(event.target.value)}/>
        </div>
        <div className="form_fields">
          <label className="field_label">Filled Seats</label>
          <TextField id="outlined-basic" label="Enter filled seats" variant="outlined" onChange={(event)=>setFilled(event.target.value)}/>
        </div>
        <div className="form_fields">
          <button class="btn btn-success add_btn" onClick={addCourse}>Add</button>
        </div>
      </FormControl>
      <ToastContainer />
    </div>
  );
};

export default AddCourse;
