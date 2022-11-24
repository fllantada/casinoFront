import type { NextPage } from "next";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import TableSlots from "../components/TableSlots";
import { newGame, spin, checkout, buy } from "../services/callapi";

import { useState, useEffect } from "react";

const Home: NextPage = () => {
  const [result, setResult] = useState(["Loading", "Loading", "Loading"]);
  const [user, setUser] = useState({ id: "", name: "", credits: 0 });
  const [loading, setLoading] = useState(true);

  if (loading) {
    newGame({ id: "1", name: "fran" }, setUser);
    setLoading(false);
  }

  const handleSpin = () => {
    spin(user, setResult, setUser);
    setResult(["Loading", "Loading", "Loading"]);
  };

  return (
    <>
      <Container
        maxWidth='lg'
        sx={{
          margin: "40px 80px",
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
      <Container
        sx={{
          margin: "40px 80px",
          height: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Credts: {user.credits}
        <Button
          onClick={() => {
            buy(user, setUser);
          }}
        >
          Buy 1000 more
        </Button>
      </Container>

      <Container
        sx={{
          margin: "40px 80px",
          height: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TableSlots rows={result} />
        {!user.credits && "NO CREDITS"}
      </Container>
      <Container
        sx={{
          margin: "40px 80px",
          height: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant='contained'
          color='primary'
          sx={{ width: "100%" }}
          onClick={handleSpin}
        >
          SPIN
        </Button>
      </Container>
    </>
  );
};

export default Home;
