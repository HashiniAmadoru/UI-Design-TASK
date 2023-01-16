import * as React from "react";
import {
  Box,
  Grid,
  Button,
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

function createData(pName, category, dueDate, status) {
  return { pName, category, dueDate, status };
}

const rows = [
  createData("React Js", "IT", "03/12/2023", "Pending"),
  createData("React Native", "Manufacturing", "03/13/2023", "Completed"),
  createData("Node Js", "Engineering", "03/14/2023", "Pending"),
  createData("Nest Js", "IT", "03/152023", "Completed"),
  createData("Php", "Engineering", "03/16/2023", "Pending"),
];

export default function ProjectDetails() {
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
        <h2 className="topic">Project Details</h2>
        <Grid container>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="Project Details">
              
              <TableHead>
                <TableRow className="tableHeader">
                  <TableCell className="tableCell">Project Name</TableCell>
                  <TableCell className="tableCell" align="center">
                    Category
                  </TableCell>
                  <TableCell className="tableCell" align="center">
                    Due Date
                  </TableCell>
                  <TableCell className="tableCell" align="center">
                    Status
                  </TableCell>
                  <TableCell className="tableCell" align="center">
                    Create Task
                  </TableCell>
                  <TableCell className="tableCell" align="center">
                    View Task
                  </TableCell>
                  <TableCell className="tableCell" align="center">
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.pName}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.pName}
                    </TableCell>
                    <TableCell align="center">{row.category}</TableCell>
                    <TableCell align="center">{row.dueDate}</TableCell>
                    <TableCell align="center">{row.status}</TableCell>
                    <TableCell align="center">
                      <Button
                        href="/TaskForm"
                        variant="contained"
                        color="success"
                      >
                        create Task
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        href="/ViewTask"
                        variant="contained"
                        color="primary"
                      >
                        View Task
                      </Button>
                    </TableCell>
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
