import React from "react";
import "./App.css";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  helloThereStyles: {
    fontSize: "100px",
  },

  buttonStyles: {
    backgroundColor: "lightblue",
    color: "white",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Typography variant="h1" className={classes.helloThereStyles}>
        {" "}
        Hello Maverick
      </Typography>
      <Button variant="outlined" className={classes.buttonStyles}>
        This is our Button
      </Button>
    </div>
  );
}

export default App;
