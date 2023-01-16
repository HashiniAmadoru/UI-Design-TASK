import React, { useState } from "react";
import "./main.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  Box,
  Grid,
  TextField,
  Button,
  Paper,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

function ProjectForm() {
  const [projectInfo, setProjectInfo] = useState({
    pName: "",
    category: "",
    status: "",
    dueDate: null,
  });

  const handleChange = (event, field = "") => {
    if (field) {
      setProjectInfo({
        ...projectInfo,
        [field]: event !== null ? event.$d : event,
      });
    } else {
      setProjectInfo({
        ...projectInfo,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setProjectInfo({ pName: "", category: "", status: "", dueDate: null });
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 10,
            width: "100%",
            height: "100vh",
          },
        }}
      >
        <Paper elevation={3}>
          <Grid container>
            <Grid xs={6} className="form-cover"></Grid>
            <Grid
              xs={6}
              sx={{
                "& .MuiTextField-root": { marginBottom: "15px" },
              }}
            >
              <h2 className="topic">Add New Project </h2>
              <form onSubmit={handleSubmit} style={{ padding: "10px" }}>
                <TextField
                  fullWidth
                  id="pName"
                  required
                  name="pName"
                  label="Project Name"
                  variant="outlined"
                  value={projectInfo.pName}
                  onChange={handleChange}
                />

                <FormControl fullWidth style={{ marginBottom: "15px" }}>
                  <InputLabel id="category">Category</InputLabel>
                  <Select
                    labelId="category"
                    id="category"
                    name="category"
                    label="category"
                    value={projectInfo.category}
                    onChange={(event) => {
                      handleChange(event);
                    }}
                  >
                    <MenuItem value={"it"}>It</MenuItem>
                    <MenuItem value={"engineering"}>Engineering</MenuItem>
                    <MenuItem value={"manufacturing"}>Manufacturing</MenuItem>
                  </Select>
                </FormControl>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Due Date"
                    name="dueDate"
                    id="dueDate"
                    value={projectInfo.dueDate}
                    onChange={(value) => {
                      handleChange(value, "dueDate");
                    }}
                    renderInput={(params) => (
                      <TextField name="dueDate" fullWidth {...params} />
                    )}
                  />
                </LocalizationProvider>

                <FormControl fullWidth>
                  <InputLabel id="status">Status</InputLabel>
                  <Select
                    labelId="status"
                    name="status"
                    id="status"
                    label="status"
                    value={projectInfo.status}
                    onChange={(event) => {
                      handleChange(event);
                    }}
                  >
                    <MenuItem value={"Pending"}>Pending</MenuItem>
                    <MenuItem value={"Completed"}>completed</MenuItem>
                  </Select>
                </FormControl>

                <Button
                  type="submit"
                  variant="contained"
                  size="small"
                  fullWidth
                  style={{ marginTop: "10px" }}
                >
                  Add Project
                </Button>

              </form>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </div>
  );
}

export default ProjectForm;
