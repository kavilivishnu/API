import React, { useState, useEffect } from "react";
import axios from "axios";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

function Api() {
  const [array, setArray] = useState([]);

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }));

  useEffect(() => {
    axios
      .get("https://gorest.co.in/public/v1/todos")
      .then((res) => setArray(res.data.data))
      .catch(() => console.log("error"));
  }, []);

  // const handleShow = () => {
  //   axios
  //     .get("https://gorest.co.in/public/v1/todos")
  //     // .then((res) => console.log(res.data.data))
  //     .then((res) => setArray(res.data.data))
  //     .catch(() => console.log("error"));
  // };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {array.map((items, id) => (
          <Grid item xs={2} sm={4} md={4} key={id}>
            {/* <Item>{items.title}</Item>
            <Item>{items.due_on}</Item>
            <Item>{items.status}</Item> */}
            {id >= 9 ? (
              ""
            ) : (
              <div>
                <Item>{items.title}</Item>
                <Item>{items.due_on}</Item>
                <Item>{items.status}</Item>
              </div>
            )}
          </Grid>
        ))}
      </Grid>
      {/* <button onClick={(e) => handleShow(e)}>show</button> */}
    </Box>
  );
}

export default Api;
