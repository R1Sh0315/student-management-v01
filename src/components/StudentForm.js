// src/components/StudentForm.js
import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  RadioGroup,
  Radio,
  FormControlLabel,
  Autocomplete,
  FormLabel,
  FormControl,
  InputLabel,
} from "@mui/material";

import Grid2 from "@mui/material/Grid2";

import { v4 as uuidv4 } from "uuid";

const formStructure = {
  firstName: "",
  lastName: "", 
  age: "",
  gender: "Male",   
  phoneNumber: "",
  emailId: "",
  course: "",
  skills: [],
  id: "",
  address: "",
};

const StudentForm = ({ onAddStudent, studentData }) => {
  const [formData, setFormData] = useState(formStructure);

  useEffect(() => {
    if (studentData) {
      setFormData(studentData);
    }
  }, [studentData]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
      id: uuidv4(),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddStudent(formData);
    setFormData(formStructure);
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      <Grid2
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        flexDirection="column"
      >
        <Grid2 size={8} container rowSpacing={1} paddingLeft={2}>
          {/* first name  */}
          <TextField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            multiline
            sx={{
              "& .MuiOutlinedInput-root": { minHeight: "40px", padding: "4px" },
              "& .MuiInputBase-input": { marginLeft: "4px" },
              "& .MuiInputLabel-root": { fontSize: "9pt", lineHeight: "9pt" },
            }}
          />
          {/* last name  */}
          <TextField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            multiline
            sx={{
              "& .MuiOutlinedInput-root": { minHeight: "40px", padding: "4px" },
              "& .MuiInputBase-input": { marginLeft: "4px" },
              "& .MuiInputLabel-root": { fontSize: "9pt", lineHeight: "9pt" },
            }}
          />
          {/* age  */}
          <TextField
            label="Age"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            required
            multiline
            sx={{
              "& .MuiOutlinedInput-root": { minHeight: "40px", padding: "4px" },
              "& .MuiInputBase-input": { marginLeft: "4px" },
              "& .MuiInputLabel-root": { fontSize: "9pt", lineHeight: "9pt" },
            }}
          />
        </Grid2>
      </Grid2>

      <Grid2
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        flexDirection="column"
      >
        <Grid2 size={8} container rowSpacing={1} paddingLeft={2}>
          {/* phone number  */}
          <TextField
            label="Phone"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            multiline
            sx={{
              "& .MuiOutlinedInput-root": { minHeight: "40px", padding: "4px" },
              "& .MuiInputBase-input": { marginLeft: "4px" },
              "& .MuiInputLabel-root": { fontSize: "9pt", lineHeight: "9pt" },
            }}
          />
          {/* emailid  */}
          <TextField
            label="Email"
            name="emailId"
            value={formData.emailId}
            onChange={handleChange}
            required
            multiline
            sx={{
              "& .MuiOutlinedInput-root": { minHeight: "40px", padding: "4px" },
              "& .MuiInputBase-input": { marginLeft: "4px" },
              "& .MuiInputLabel-root": { fontSize: "9pt", lineHeight: "9pt" },
            }}
          />
        </Grid2>
      </Grid2>

      <Grid2 size={8} container rowSpacing={1} paddingLeft={2} paddingRight={2}>
        <TextField
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          multiline
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": { minHeight: "40px", padding: "4px" },
            "& .MuiInputBase-input": { marginLeft: "4px" },
            "& .MuiInputLabel-root": { fontSize: "9pt", lineHeight: "9pt" },
          }}
        />
      </Grid2>

      <Grid2
        size={8}
        container
        rowSpacing={1}
        paddingLeft={2}
        paddingRight={2}
        textAlign="start"
      >
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            row
          >
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="Female"
              control={<Radio />}
              label="Female"
            />
          </RadioGroup>
        </FormControl>
      </Grid2>

      <Grid2
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        flexDirection="column"
      >
        <Grid2 size={8} container rowSpacing={1} paddingLeft={2}>
          {/* course */}
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">Course</InputLabel>
            <Select
              label="Course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <MenuItem value="">Select Course</MenuItem>
              <MenuItem value="Engineering">Engineering</MenuItem>
              <MenuItem value="Science">Science</MenuItem>
              <MenuItem value="Arts">Arts</MenuItem>
            </Select>
          </FormControl>

          {/* skills  */}
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Autocomplete
              multiple
              options={["JavaScript", "React", "Node.js", "Python"]}
              getOptionLabel={(option) => option}
              value={formData.skills}
              onChange={(event, newValue) =>
                setFormData({ ...formData, skills: newValue })
              }
              renderInput={(params) => <TextField {...params} label="Skills" />}
            />
          </FormControl>
        </Grid2>
      </Grid2>
      <Grid2
        size={8}
        container
        rowSpacing={1}
        paddingLeft={16}
        paddingRight={16}
        justifyContent="center"
      >
        <Button
          type="submit"
          color="primary"
          variant="outlined"
          size="small"
          fullWidth
        >
          Submit
        </Button>
      </Grid2>
    </form>
  );
};

export default StudentForm;
