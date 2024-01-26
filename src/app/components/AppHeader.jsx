import React from "react";
import { Grid } from "@mui/material";

const AppHeader = () => {
  return (
    <>
      <Grid container className="haeder-container" justifyContent="center">
        <Grid item marginTop={2} marginBottom={2}>
          <div className="app-header" >Ca$hCa$hIt</div>
        </Grid>
      </Grid>
    </>
  );
};

export default AppHeader;
