import * as React from "react";
import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import DeleteIcon from "@mui/icons-material/Delete";

function createData(
  tName,
  description,
  handleBy,
  dueDate,
  completedDate,
  status
) {
  return { tName, description, handleBy, dueDate, completedDate, status };
}

const rows = [
  createData(
    "Table view",
    "Noted",
    "Hashini",
    "02/12/2023",
    "05/12/2023",
    "InProgress"
  ),
  createData(
    "Card view",
    "Noted",
    "Amadoru",
    "02/12/2023",
    "05/12/2023",
    "Completed"
  ),
  createData(
    "Model view",
    "Noted",
    "Dilmi",
    "02/12/2023",
    "05/12/2023",
    "InProgress"
  ),
  createData(
    "Buttons view",
    "Noted",
    "Hansani",
    "02/12/2023",
    "05/12/2023",
    "Pending"
  ),
  createData(
    "Table view",
    "Noted",
    "Dulshani",
    "02/12/2023",
    "05/12/2023",
    "inProgress"
  ),
];

export default function ViewTask() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 10,
          width: "100%",
        },
      }}
    >
      <Paper elevation={3}>
        <h2 className="topic">Task Details</h2>
        <Grid container>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              
              <TableHead>
                <TableRow className="tableHeader">
                  <TableCell className="tableCell">Task Name</TableCell>
                  <TableCell className="tableCell" align="center">
                    Description
                  </TableCell>
                  <TableCell className="tableCell" align="center">
                    Handle By
                  </TableCell>
                  <TableCell className="tableCell" align="center">
                    Due Date
                  </TableCell>
                  <TableCell className="tableCell" align="center">
                    Completed Date
                  </TableCell>
                  <TableCell className="tableCell" align="center">
                    Status
                  </TableCell>
                  <TableCell className="tableCell" align="center">
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.tName}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.tName}
                    </TableCell>
                    <TableCell align="center">{row.description}</TableCell>
                    <TableCell align="center">{row.handleBy}</TableCell>
                    <TableCell align="center">{row.dueDate}</TableCell>
                    <TableCell align="center">{row.completedDate}</TableCell>
                    <TableCell align="center">{row.status}</TableCell>
                    <TableCell align="center">
                      <IconButton
                        color="primary"
                        aria-label="Edit"
                        component="label"
                      >
                        <LaunchIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        aria-label="Delete"
                        component="label"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Paper>
    </Box>
  );
}
