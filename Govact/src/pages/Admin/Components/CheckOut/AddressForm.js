import React from "react";
import Grid from "@material-ui/core/Grid";

import TextField from "@material-ui/core/TextField";


export default function AddressForm() {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="Titre"
            name="Titre"
            label="Titre"
            fullWidth
            autoComplete="Titre"
            autoFocus
            onChange={(e) => localStorage.setItem("titre", e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="Sujet"
            name="Sujet"
            label="Sujet"
            fullWidth
            autoComplete="Sujet"
            onChange={(e) => localStorage.setItem("sujet", e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
