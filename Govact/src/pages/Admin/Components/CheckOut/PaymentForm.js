import React from "react";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={10}
            variant="outlined"
            style={{ width: "100%" }}
            onChange={(e) => localStorage.setItem("description", e.target.value)}
            autoFocus
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
