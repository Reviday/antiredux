import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "store"; // env에 설정한 값 떄문에 store만 해도 호출 가능 => node environment

class AppContainer extends Component {
  render() {
    return (
      <Store.Provider>
        <AppPresenter />
      </Store.Provider>
    );
  }
}

export default AppContainer;