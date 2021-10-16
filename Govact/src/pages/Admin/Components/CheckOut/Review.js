import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";

export default function Review() {
  

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Confirmation
      </Typography>
      <Typography variant="h6" gutterBottom style={{display:"flex",justifyContent:"center"}} >
        Titre: {localStorage.getItem('titre')}
      </Typography>
      <Typography variant="h6" gutterBottom style={{display:"flex",justifyContent:"center"}} >
        Sujet: {localStorage.getItem('sujet')}
      </Typography>
      <Typography variant="h6" gutterBottom style={{display:"flex",justifyContent:"center"}} >
        Description: {localStorage.getItem('description')}
      </Typography>
    </React.Fragment>
  );
}
