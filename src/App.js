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
    firstname: "",
    lastname: "",
    gender: "",
    age: "",
    location: "",
    veg: false,
    nonveg: false,
  };

  onChange = (event) => {
    const { name, value, type, checked } = event.target;

    this.setState({
      [name]: type === checked ? checked : value,
    });
    // type === "checkbox"
    //   ? this.setState({
    //       [name]: checked,
    //     })
    //   : this.setState({
    //       [name]: value,
    //     });
  };

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
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
        <form>
          <input
            type="text"
            name="firstname"
            value={this.state.firstname}
            placeholder="First Name"
            onChange={this.onChange}
          />
          <br />
          <input
            type="text"
            name="lastname"
            value={this.state.lastname}
            placeholder="Last Name"
            onChange={this.onChange}
          />
          <br />
          <input
            type="text"
            name="age"
            value={this.state.age}
            placeholder="Age"
            onChange={this.onChange}
          />
          <br />
          <label>
            <input
              type="checkbox"
              value=" Veg "
              onChange={this.onChange}
              checked={this.state.veg}
              name="veg"
            />
            Veg
          </label>
          <label>
            <input
              type="checkbox"
              value=" Non Veg "
              onChange={this.onChange}
              checked={this.state.nonveg}
              name="nonveg"
            />
            Non Veg
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.onChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.onChange}
            />
            Female
          </label>
          <br />
          <label>
            Location:
            <select
              value={this.state.location}
              name="location"
              onChange={this.onChange}
            >
              <option>Please choose the location</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Kolkatta</option>
            </select>
          </label>

          <br />
          <br />
          <Button
            variant="outlined"
            className={useStyles.buttonStyles}
            onClick={this.onSubmit}
          >
            submit
          </Button>
          <hr />
          <div>
            <h1>Entered Information:</h1>
            <p>
              Your name: {this.state.firstname} {this.state.lastname}
            </p>
            <p>Your age: {this.state.age}</p>
            <p>You are: {this.state.gender}</p>
            <p>You stay at: {this.state.location}</p>
            <p>Vegan: {this.state.veg ? "Yes" : "No"}</p>
            <p>Non Vegan: {this.state.nonveg ? "Yes" : "No"}</p>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
