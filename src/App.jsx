import React, { Component } from "react";
import Form form "./components/Form";

class App extends Component {
  state = {
    weight: "",
    height: "",
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <Form
          weight={this.state.wight}
          height={this.state.wight}
          onChangeHandler={this.onChangeHandler}
          />
      </div>
    );
  }
}

export default App;
