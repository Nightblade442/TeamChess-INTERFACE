import logo from './logo.svg';
//import './App.css';
import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import store from "./Redux/store";
import { connect } from "react-redux";
import Board from './Components/Board/Board';
import ControlBar from './Components/ControlBar/ControlBar';
import { setImplicitGrantCredentials } from "./Redux/actions/action";

import Login from './Components/Login/Login'

import styles from './App.module.css'


const mapStateToProps = state => {
  return {
    app: state,
  };
};

const mapDispatchToProps = state => {
  return {
    setImplicitGrantCredentials: props => store.dispatch(setImplicitGrantCredentials(props)),
    //setQueues: props => store.dispatch(setQueues(props))
    //  setUsers: props => store.dispatch(setUsers(props))
  };
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username : null,
      password : null
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSwitchPage = this.handleSwitchPage.bind(this);
  }

  componentDidMount() {




  }

  render() {
    let html = null;
    if (this.props.app.page === "MAIN") {
      html = (
        <div className={styles.App}>
          <div className={styles.BoardContainer}>
            <Board></Board>
          </div>
          <div className={styles.ControlBarContainer}>
            <ControlBar></ControlBar>
          </div>
        </div>
      )
    }
    else if (this.props.app.page === "LOGIN") {
      html = (
        <div className={styles.App}>
          <div className={styles.LoginContainer}>
            <h1>TEAM Chess</h1>
            <h3>Please Login</h3>
            <input type="text" placeholder="Username" className={styles.Username} onChange={this.handleUsernameChange}></input>
            <input type="text" placeholder="Password" className={styles.Password} onChange={this.handlePasswordChange}></input>
            <input type="button" className={styles.Login} value="LOGIN" onClick={this.handleLogin}></input>
          </div>
        </div>
      )
    }
    else if (this.props.app.page === "SIGN_UP") {
      html = (
        <div className={styles.App}>
          <div className={styles.LoginContainer}>
            <h1>TEAM Chess</h1>
            <h3>Please sign up</h3>
            <input type="text" placeholder="Username" className={styles.Username} onChange={this.handleUsernameChange}></input>
            <input type="text" placeholder="Password" className={styles.Password} onChange={this.handlePasswordChange}></input>
            <input type="button" className={styles.Login} value="SIGN UP" onClick={this.handleSignUp}></input>
            <input type="button" className={styles.SwitchPage} value="If you have already signed up please login" onClick={this.handleSwitchPage}></input>
          </div>
        </div>
      )
    }
    return (
      html
    )
  }

  handleLogin(event){
      console.log(event);
      //need to handle logging in here....
  }

  handleSignUp(event){
    console.log(this.state);
    //need to handle sign up here....
  }

  handlePasswordChange(event){
    this.setState({
      username : this.state.username,
      password : event.target.value
    })
  }

  handleUsernameChange(event){
    this.setState({
      username : event.target.value,
      password : this.state.password
    })
  }

  handleSwitchPage(event){
    console.log(this.props.app.page);
  }

}

//export default App
//export default App = connect(mapStateToProps)(App);
export default connect(mapStateToProps, mapDispatchToProps)(App);
