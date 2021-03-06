import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "store"; // env에 설정한 값 떄문에 store만 해도 호출 가능 => node environment

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this._deleteNotification = (id) => {
      this.setState(currentState => {
        const newState = delete currentState.notifications[id];
        return newState;
      })
    }
    this._seeNotification = (id) => {
      this.setState(currentState => {
        return {
          ...currentState,
          notifications: {
            ...currentState.notifications,
            [id]: {
              ...currentState.notifications[id],
              seen: true
            }
          }
        }
      })
    } 
    this.state= {
      notifications: {
        "1" : {
          id: 1,
          text: "Something",
          seen: false
        },
        "2" : {
          id: 2,
          text: "Something else",
          seen: false
        },
        "3" : {
          id: 3,
          text: "Something else but different",
          seen: false
        }
      },
      deleteNotification : this._deleteNotification,
      seeNotification : this._seeNotification
    }
  }
  
  render() {
    return (
      <Store.Provider value={this.state}>
        <AppPresenter />
      </Store.Provider>
    );
  }
}

export default AppContainer;

/*
  #state를 변경하는 함수를 만들고 싶다. 그리고 그걸 provider 안에 넣고 싶음.(notification에서 부를 수 있도록)
  => 모든 것을 constructor 안에 넣어야 한다. 왜냐하면 클래스가 생성되었을때 스토어가 value를 얻기 때문
*/