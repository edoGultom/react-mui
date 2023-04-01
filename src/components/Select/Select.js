import { Box, MenuItem, TextField } from "@mui/material";
import React from "react";

export default function Select({ label, value, onSelectChange }) {
  //   const handleChange = (e) => {
  //     setJadwal(e.target.value);
  //   };

  return (
    <>
      {/* FORM */}
      <Box width="250px" mt="32px">
        <TextField
          label={label}
          fontSize="15px"
          select
          value={value}
          onChange={(itemValue) => onSelectChange(itemValue)}
          fullWidth
        >
          <MenuItem value="2022-07-22">Senin, 22 Juli 2022</MenuItem>
          <MenuItem value="2022-07-23">Senin, 23 Juli 2022</MenuItem>
          <MenuItem value="2022-07-24">Senin, 24 Juli 2022</MenuItem>
        </TextField>
      </Box>
      {/* TUTUP FORM */}
    </>
  );
}
