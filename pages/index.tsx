import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import TableSlots from "../components/TableSlots";
import { Style } from "@mui/icons-material";
import { useState } from "react";

const Home: NextPage = () => {
  const [result, setResult] = useState(["Loading", "Loading", "Loading"]);

  const spin = () => {
    console.log("spin");
    //callApi();
  };

  return (
    <>
      <Container
        maxWidth='lg'
        sx={{
          margin: "80px 80px",
          height: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant='h1' align='center' color='primary'>
          Front Casino Challenge
        </Typography>
      </Container>

      <Grid item xs={12} sm={12}>
        <TableSlots rows={result} />
      </Grid>
      <Grid alignItems={"center"} item xs={12} sm={12}>
        <Button
          variant='contained'
          color='primary'
          sx={{ width: "70%" }}
          onClick={spin}
        >
          Register
        </Button>
      </Grid>
    </>
  );
};

export default Home;
