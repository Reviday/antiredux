import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "store"; // env에 설정한 값 떄문에 store만 해도 호출 가능 => node environment

class AppContainer extends Component {
  state = {
    message : "Hello"
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        message: "Bye"
      })
    }, 2000);
  }
  render() {
    return (
      <Store.Provider value={this.state.message}>
        <AppPresenter />
      </Store.Provider>
    );
  }
}

export default AppContainer;