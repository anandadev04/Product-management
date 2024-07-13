import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Add() {
  return (
    <Box sx={{ backgroundColor: '#f0f4f7', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center',borderRadius: '8px'}}>
    <Stack spacing={2} direction="column" alignItems="center" sx={{ p: 4, border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff' }}>
      <TextField
        id="outlined-productname"
        label="Product Name"
        name="productname"
        InputProps={{ sx: { backgroundColor: '#e8f0fe' } }}
      />
      <TextField
        id="outlined-price"
        label="Price"
        name="price"
        InputProps={{ sx: { backgroundColor: '#e8f0fe' } }}
      />
      <TextField
        id="outlined-category"
        label="Category"
        name="category"
        InputProps={{ sx: { backgroundColor: '#e8f0fe' } }}
      />
      <TextField
        id="outlined-image"
        label="Image Link"
        name="image"
        InputProps={{ sx: { backgroundColor: '#e8f0fe' } }}
      />
      <Button variant="contained" sx={{ backgroundColor: '#90caf9', '&:hover': { backgroundColor: '#64b5f6' } }}>Submit</Button>
    </Stack>
  </Box>
            
  );
}

export default Add;