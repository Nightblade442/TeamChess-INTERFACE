import logo from './logo.svg';
//import './App.css';
import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import store from "./Redux/store";
import { connect } from "react-redux";
import Board from './Components/Board/Board';
import ControlBar from './Components/ControlBar/ControlBar';
import {
  setImplicitGrantCredentials,
  setPage,
  setAutenticationCredentials,
} from "./Redux/actions/action";

import Login from './Components/Login/Login'

import authorise from "./API/Authorise"

import styles from './App.module.css'
import ToolBar from './Components/ToolBar/ToolBar';


const mapStateToProps = state => {
  return {
    app: state,
    state: {
      username: null,
      password: null,
      ERROR: "",
    }
  };
};

const mapDispatchToProps = state => {
  return {
    setImplicitGrantCredentials: props => store.dispatch(setImplicitGrantCredentials(props)),
    setPage: props => store.dispatch(setPage(props)),
    setAutenticationCredentials: props => store.dispatch(setAutenticationCredentials(props)),
    //setQueues: props => store.dispatch(setQueues(props))
    //  setUsers: props => store.dispatch(setUsers(props))
  };
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      ERROR: "",
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSwitchPage = this.handleSwitchPage.bind(this);

    this.setPage = this.props.setPage.bind(this);
    this.setAutenticationCredentials = this.props.setAutenticationCredentials.bind(this);
  }

  componentDidMount() {




  }

  render() {
    let html = null;
    if (this.props.app.loggedIn) {
      if (this.props.app.page === "MAIN") {
        html = (
          <div className={styles.App}>
            <div className={styles.BoardContainer}>
              <Board></Board>
            </div>
            <ToolBar></ToolBar>
            <div className={styles.ControlBarContainer}>
              <ControlBar></ControlBar>
            </div>
            <footer> <small> Copyright ?? 2021, Jack Browne</small> </footer>
          </div>
        )
      }
    }
    else {
      if (this.props.app.page === "LOGIN") {
        html = (
          <div className={styles.App}>
            <div className={styles.LoginContainer}>
              <h1>TEAM Chess</h1>
              <h3>Please Login</h3>
              <h5 className={styles.ErrorMsg}>{this.state.ERROR}</h5>
              <input type="text" placeholder="Username" className={styles.Username} onChange={this.handleUsernameChange} value={this.state.username}></input>
              <input type="text" placeholder="Password" className={styles.Password} onChange={this.handlePasswordChange} value={this.state.password}></input>
              <input type="button" className={styles.Login} value="LOGIN" onClick={this.handleLogin}></input>
              <input type="button" className={styles.SwitchPage} value="If you have not created an account please sign up" onClick={this.handleSwitchPage}></input>
            </div>
            <footer> <small>&copy; Copyright ?? 2021, Jack Browne</small> </footer>
          </div>
        )
      }
      else if (this.props.app.page === "SIGN_UP") {
        html = (
          <div className={styles.App}>
            <div className={styles.LoginContainer}>
              <h1>TEAM Chess</h1>
              <h3>Please sign up</h3>
              <h5 className={styles.ErrorMsg}>{this.state.ERROR}</h5>
              <input type="text" placeholder="Username" className={styles.Username} onChange={this.handleUsernameChange}></input>
              <input type="text" placeholder="Password" className={styles.Password} onChange={this.handlePasswordChange}></input>
              <input type="button" className={styles.Login} value="SIGN UP" onClick={this.handleSignUp}></input>
              <input type="button" className={styles.SwitchPage} value="If you have already signed up please login" onClick={this.handleSwitchPage}></input>
            </div>
            <footer> <small>&copy; Copyright ?? 2021, Jack Browne</small> </footer>
          </div>
        )
      }
    }
    return (
      html
    )
  }

  handleLogin(event) {
    console.log(event);
    //need to handle logging in here....
    let params = {
      method: "LOGIN",
      username: this.state.username,
      password: this.state.password

    }
    authorise(params)
      .then(response => {
        console.log(response.token);
        let payload = {
          token: response.token,
          username: params.username,
          message: response.message
        }
        if (response.statusCode === 200) {
          this.setAutenticationCredentials(payload);
        }
        else {
          //have to display the payload.message ERROR

          let state = {
            ...this.state,
            ERROR: payload.message
          }
          this.setState(state);

        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  handleSignUp(event) {
    console.log(this.state);
    //need to handle sign up here....
    let params = {
      method: "SIGN_UP",
      username: this.state.username,
      password: this.state.password

    }
    authorise(params)
      .then(response => {
        console.log(response);
        let payload = {
          token: response.token,
          username: params.username,
          message: response.message
        }
        if (response.statusCode === 200) {
          this.setAutenticationCredentials(payload);
        }
        else {
          //have to display the payload.message ERROR

          let state = {
            ...this.state,
            ERROR: payload.message
          }
          this.setState(state);
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  handlePasswordChange(event) {
    this.setState({
      username: this.state.username,
      password: event.target.value
    })
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value,
      password: this.state.password
    })
  }

  handleSwitchPage(event) {
    if (this.props.app.page === "SIGN_UP") {
      let props = {
        page: "LOGIN"
      }
      this.setState({
        username: "",
        password: "",
        ERROR: "",
      }, response => {this.props.setPage(props)})
        

    }
    else if (this.props.app.page === "LOGIN") {
      let props = {
        page: "SIGN_UP"
      }
      this.setState({
        username: "",
        password: "",
        ERROR: "",
      }, response => {this.props.setPage(props)})
    }
  }

}

//export default App
//export default App = connect(mapStateToProps)(App);
export default connect(mapStateToProps, mapDispatchToProps)(App);
