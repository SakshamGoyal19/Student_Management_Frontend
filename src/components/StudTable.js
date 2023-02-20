import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StudTable = () => {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/student')
    .then((res) => res.json())
    .then((res) => setStudents(res)
    )
  },[])

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
            <StyledTableCell>Student ID</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Branch</StyledTableCell>
            <StyledTableCell>Course</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
          students.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell>{row.id}</StyledTableCell>
              <StyledTableCell>{row.name}</StyledTableCell>
              <StyledTableCell>{row.branch}</StyledTableCell>
              <StyledTableCell>{row.course}</StyledTableCell>
              <StyledTableCell>{row.mail}</StyledTableCell>
            </StyledTableRow>))
          }
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </>
  )
}

export default StudTable