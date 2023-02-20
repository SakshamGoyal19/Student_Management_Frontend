import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/Login.css"
import TextField from '@mui/material/TextField'
import { FormControl } from '@mui/material'
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

  const navigate = useNavigate();

  const [loginType, setLoginType] = useState("Student");
  const [userID, setUserID] = useState();
  const [password, setPassword] = useState();
  
  const authenticate = () => {

    localStorage.setItem('logType', loginType);

    if(!userID || !password){
      toast.error("Username or password is invalid");
      return;
    }

    if(loginType === "Admin"){
      if(userID === "admin" && password === "admin123")
        navigate('/admin')
      else
        toast.error("Username or password is invalid");
    }

     const payload ={};
     payload.type=loginType;
     payload.id=userID;
     payload.password=password;
     fetch("http://localhost:8080/login",
      {method : 'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(payload)})
      .then((res) => res.json())
      .then((res) => {
          if(res.name != null){
            if(loginType === "Student")
              navigate('/student',{
                state:{res}
              })
            else if(loginType === "Faculty")
              navigate('/faculty',{
                state:{res}
              })
          }
          else{
            toast.error("Username or password is invalid");
          }
      })
  }
  
  return (
    <>
    <div className="login_container card">
        <h1 className='header'>Login</h1>
        <FormControl className='form' variant='standard' sx={{ m: 1, minWidth: 120 }}>
        <div className='input'>
            <PersonIcon className="icons"/>
            <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" label="Login as"
            value={loginType}
            onChange={(event)=>setLoginType(event.target.value)}>
            <MenuItem value="Student">Student</MenuItem>
            <MenuItem value="Faculty">Faculty</MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
            </Select>
        </div>
        <div className='input'>
            <AccountCircleIcon className="icons"/>
            <TextField id="standard-basic" value={userID} label="User ID" variant="standard" onChange={(event)=>setUserID(event.target.value)}/>
        </div>
        <div className='input'>
            <LockIcon className="icons"/>
            <TextField type="password" id="standard-basic" value={password} label="Password" variant="standard" onChange={(event)=>setPassword(event.target.value)} />
        </div>
        <Button type="submit" id="login_btn" variant="contained" onClick={authenticate}>Login</Button>
        </FormControl>
        <ToastContainer />
    </div>
    </>
  )
}

export default Login

