import React, { useEffect, useState } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import axios from "axios";



export default function Orders() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("/api/admin/users", {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((res) => setRows(res.data))
      .catch((err) => console.log(err));
  }, []);

  
  return (
    <React.Fragment>
      <Title>Les Citoyens Enregistrés</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
     
    </React.Fragment>
  );
}
