import React, { Component } from "react";
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

class App extends Component {
  state = {
    desc: "",
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    alert(this.state.desc);
    this.setState({
      desc: "",
    });
  };
  render() {
    /**
     * While working with forms, make sure to give a "name" and use e.target.name for updating the values.
     */
    return (
      <div className="App">
        <Typography variant="h1" className={useStyles.helloThereStyles}>
          {" "}
          Hello Maverick
        </Typography>
        <Button variant="outlined" className={useStyles.buttonStyles}>
          This is our Button
        </Button>
        <hr />
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Please enter name"
            value={this.state.desc}
            onChange={this.onChange}
            name="desc"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
