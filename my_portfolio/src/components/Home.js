import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography, Grid } from "@mui/material";
import MyButton from "./MyButton";

const Home = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          sx={{

            maxHeight:"100vh",
            textAlign: "center",
            mt: "25vh",
            padding: "20px",

          }}
        >
          <Typography component="div" variant="h4">
            <Box sx={{ textTransform: "uppercase"}}>Fazlı</Box>
          </Typography>
          <Typography component="div" variant="h4">
            <Box sx={{ textTransform: "uppercase", mb:"10px"}}>Balkan</Box>
          </Typography>
          <Grid container spacing={0}>
            <Grid item xs></Grid>
            <Grid item xs={4}>
              <MyButton title="CV"/>
              <MyButton title="ART"/>
              <MyButton title="CONTACt"/>
            </Grid>
            <Grid item xs></Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Home;
