import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useState, useEffect } from 'react';

const View = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      console.log(res);
      setRows(res.data);
    });
  }, []);

  return (
    <div>
      <TableContainer component={Paper} sx={{border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9fafb' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ backgroundColor: '#e3f2fd', fontWeight: 'bold' }}>Title</TableCell>
              <TableCell align="left" sx={{ backgroundColor: '#e3f2fd', fontWeight: 'bold' }}>Price</TableCell>
              <TableCell align="left" sx={{ backgroundColor: '#e3f2fd', fontWeight: 'bold' }}>Category</TableCell>
              <TableCell align="left" sx={{ backgroundColor: '#e3f2fd', fontWeight: 'bold' }}>Image</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="left">{row.price}</TableCell>
                <TableCell align="left">{row.category}</TableCell>
                <TableCell align="left"><img src={row.image} alt={row.title} style={{ width: '100px', height: 'auto' }} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default View;
