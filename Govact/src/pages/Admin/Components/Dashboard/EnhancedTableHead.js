import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import SaveIcon from "@material-ui/icons/Save";
import { Button, TextField } from "@material-ui/core";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

/* const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
 */
export default function BasicTable() {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [cin, setCin] = useState();
  const [num, setNum] = useState();
  useEffect(() => {
    axios
      .get("/api/Demande")
      .then((res) => {
        console.log(res.data);
        setRows(res.data);
      })
      .catch((err) => {
        alert(err);
        window.location.reload();
      });
  }, []);
  return (
    <TableContainer component={Paper} style={{ textAlign: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TextField
          id="standard-number"
          label="CIN"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setCin(e.target.value)}
        />
        <TextField
          id="standard-number"
          label="NumDEMANDE"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setNum(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
          startIcon={<SaveIcon />}
          onClick={() =>
            axios
              .post("/api/Demande", { CIN: cin, NumDemande: num })
              .then((res) => {
                console.log(res.data);
                window.location.reload();
              })
              .catch((err) => {
                alert(err);
                window.location.reload();
              })
          }
        >
          Save
        </Button>
      </div>
      <h1>Les Demandes Acceptés</h1>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">CIN</TableCell>
            <TableCell align="right">Numero de Demande</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row._id}
              </TableCell>
              <TableCell align="right">{row.CIN}</TableCell>
              <TableCell align="right">{row.NumDemande}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
