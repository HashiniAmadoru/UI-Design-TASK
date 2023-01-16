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

function TaskForm() {
  const [taskInfo, setTaskInfo] = useState({
    taskName: "",
    description: "",
    handleBy: "",
    dueDate: null,
    completedDate: null,
    status: "",
  });

  const handleChange = (event, field = "") => {
    if (field) {
      setTaskInfo({ ...taskInfo, [field]: event !== null ? event.$d : event });
    } else {
      setTaskInfo({ ...taskInfo, [event.target.name]: event.target.value });
    }
  };

  const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    event.preventDefault();
    setTaskInfo({
      taskName: "",
      description: "",
      handleBy: "",
      dueDate: null,
      completedDate: null,
      status: "",
    });
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
            <Grid xs={6} className="taskForm-cover"></Grid>
            <Grid
              xs={6}
              sx={{
                "& .MuiTextField-root": { marginBottom: "15px" },
              }}
            >
              <h2 className="topic">Add New Task </h2>
              <form onSubmit={handleSubmit} style={{ padding: "10px" }}>
                <TextField
                  fullWidth
                  id="taskName"
                  name="taskName"
                  required
                  label="Task Name"
                  variant="outlined"
                  value={taskInfo.taskName}
                  onChange={handleChange}
                />

                <TextField
                  id="outlined-multiline-static"
                  label="Description"
                  fullWidth
                  name="description"
                  multiline
                  rows={4}
                  variant="outlined"
                  value={taskInfo.description}
                  onChange={handleChange}
                />

                <TextField
                  fullWidth
                  id="handleBy"
                  name="handleBy"
                  required
                  label="Handle By"
                  variant="outlined"
                  value={taskInfo.handleBy}
                  onChange={handleChange}
                />

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Due Date"
                    value={taskInfo.dueDate}
                    onChange={(value) => {
                      handleChange(value, "dueDate");
                    }}
                    renderInput={(params) => (
                      <TextField name="dueDate" fullWidth {...params} />
                    )}
                  />
                </LocalizationProvider>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Completed Date"
                    value={taskInfo.completedDate}
                    onChange={(value) => {
                      handleChange(value, "completedDate");
                    }}
                    renderInput={(params) => (
                      <TextField name="completedDate" fullWidth {...params} />
                    )}
                  />
                </LocalizationProvider>

                <FormControl fullWidth>
                  <InputLabel id="status">Status</InputLabel>
                  <Select
                    labelId="status"
                    id="status"
                    name="status"
                    label="Status"
                    value={taskInfo.status}
                    onChange={(event) => {
                      handleChange(event);
                    }}
                  >
                    <MenuItem value={"Pending"}>Pending</MenuItem>
                    <MenuItem value={"InProgress"}>In-Progress</MenuItem>
                    <MenuItem value={"completed"}>Completed</MenuItem>
                  </Select>
                </FormControl>

                <Button
                  type="submit"
                  variant="contained"
                  size="small"
                  fullWidth
                  style={{ marginTop: "10px" }}
                >
                  Add Task
                </Button>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </div>
  );
}

export default TaskForm;
