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

const GetFaculties = () => {

  const [faculties, setFaculties] = useState([]);
  const [logType, setLogType] = useState('');
  const navigate = useNavigate();

  const getFaculties=()=>{
    fetch('http://localhost:8080/faculty')
    .then((res) => res.json())
    .then((res) => setFaculties(res))
    .then((res) => {
      setLogType(localStorage.getItem('logType'))
    })
  }

  useEffect(() => {
    getFaculties();
  },[])

  const deleteFact = (id) => {
    fetch(`http://localhost:8080/faculty/`+id,
      {method : 'DELETE'}
      ).then((res) => res.json())
      .then((res) => {
          if(res){
            toast.success("Faculty Deleted Successfully");
            getFaculties();
          }
          else{
            toast.error("Failed to Delete");
          }
      })
  }

    const updateFact = (row) => {
      const payload = {}
      payload.id = row.id;
      payload.name = row.name;
      payload.branch = row.branch;
      payload.subject = row.subject;
      payload.gender = row.gender;
      payload.mail = row.mail;
      navigate('/admin/update-faculty',{
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
            <StyledTableCell>Faculty ID</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Branch</StyledTableCell>
            <StyledTableCell>Subject</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            {logType === 'Admin' && <StyledTableCell>Update</StyledTableCell>}
            {logType === 'Admin' && <StyledTableCell>Delete</StyledTableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {faculties.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell>{row.id}</StyledTableCell>
              <StyledTableCell>{row.name}</StyledTableCell>
              <StyledTableCell>{row.branch}</StyledTableCell>
              <StyledTableCell>{row.subject}</StyledTableCell>
              <StyledTableCell>{row.mail}</StyledTableCell>
              {logType === 'Admin' && <StyledTableCell><Button variant="contained" color="primary" size='small' 
              onClick={()=>updateFact(row)}>Update</Button></StyledTableCell>}
              {logType === 'Admin' && <StyledTableCell><Button variant="contained" color="error" size="small" startIcon={<DeleteIcon />}
              onClick={()=>deleteFact(row.id)}>Delete</Button></StyledTableCell>}
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

export default GetFaculties