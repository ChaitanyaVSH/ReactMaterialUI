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
    gender: "",
    favColor: "blue",
  };

  onChange = (e) => {
    const { name, value, type, checked } = e.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({
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
          <br />
          <textarea value={this.state.desc} />
          <br />
          <input type="checkbox" onChange={this.onChange} />
          <br />
          <label>
            <input
              type="radio"
              checked={this.state.gender === "male"}
              name="gender"
              value="male"
              onChange={this.onChange}
            />
            Male
          </label>
          <br />
          <label>
            <input
              type="radio"
              checked={this.state.gender === "female"}
              name="gender"
              value="female"
              onChange={this.onChange}
            />
            Female
          </label>
          <br />
          <button>Submit</button>
          <br />
          <select
            name="favColor"
            onChange={this.onChange}
            value={this.state.favColor}
          >
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
          </select>
          <h1>You are {this.state.gender}</h1>
          <h1>Color: {this.state.favColor}</h1>
        </form>
      </div>
    );
  }
}

export default App;
