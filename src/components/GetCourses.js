import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const GetCourses = () => {

  const [courses, setCourses] = useState([]);
  const [logType, setLogType] = useState('');
  const navigate = useNavigate();
  const [count,setCount] = useState({})
  const branchCount = {};

  const getCourses=()=>{
    fetch('http://localhost:8080/course')
    .then((res) => res.json())
    .then((res) => setCourses(res))
    .then((res) => {
      setLogType(localStorage.getItem('logType'))
    })
  }

  const getStudents=()=>{
    fetch('http://localhost:8080/student')
    .then((res) => res.json())
    .then((res) => {
       res.map((x) => {
        branchCount[x.branch] = branchCount[x.branch] ? branchCount[x.branch] + 1 : 1;
       })
    }).then(setCount(branchCount))
  }

  useEffect(() => {
    getStudents();
    getCourses();
    
  },[])

  const deleteCourse = (id) => {
    fetch(`http://localhost:8080/course/`+id,
      {method : 'DELETE'}
      ).then((res) => res.json())
      .then((res) => {
          if(res){
            toast.success("Course Deleted Successfully");
            getCourses();
          }
          else{
            toast.error("Failed to Delete");
          }
      })
  }

    const updateCourse = (row) => {
      const payload = {}
      payload.id = row.id;
      payload.branch = row.branch;
      payload.hod = row.hod;
      payload.totalSeats = row.totalSeats;
      payload.filledSeats = row.filledSeats;
      navigate('/admin/update-course',{
        state: {payload}
      })
    }

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
    }));
      
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
    }));

  return (
    <>
    <div className='table' style={{width: 1000, marginTop: 100, marginLeft: 300}}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Course ID</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>HOD</StyledTableCell>
            <StyledTableCell>Total Seats</StyledTableCell>
            <StyledTableCell>Filled Seats</StyledTableCell>
            {logType === 'Admin' && <StyledTableCell>Update</StyledTableCell>}
            {logType === 'Admin' && <StyledTableCell>Delete</StyledTableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {
          courses.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell>{row.id}</StyledTableCell>
              <StyledTableCell>{row.branch}</StyledTableCell>
              <StyledTableCell>{row.hod}</StyledTableCell>
              <StyledTableCell>{row.totalSeats}</StyledTableCell>
              <StyledTableCell>{count[row.branch] ? count[row.branch]: 0}</StyledTableCell>
              {logType === 'Admin' && <StyledTableCell><Button variant="contained" color="primary" size='small' 
              onClick={()=>updateCourse(row)}>Update</Button></StyledTableCell>}
              {logType === 'Admin' && <StyledTableCell><Button variant="contained" color="error" size="small" startIcon={<DeleteIcon />}
              onClick={()=>deleteCourse(row.id)}>Delete</Button></StyledTableCell>}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <ToastContainer />
    </div>
    </>
  )
}

export default GetCourses