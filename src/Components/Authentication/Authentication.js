//import logo from './logo.svg';
//import './App.css';
import { Redirect } from 'react-router-dom';
import React, { Component, useState, useEffect, useRef } from 'react';
import store from "../../Redux/store";
import { connect } from "react-redux";
import { setImplicitGrantCredentials } from "../../Redux/actions/action";
import { relativeTimeThreshold } from 'moment';

//import Piece from '../Piece/Piece';
import styles from './Authentication.module.css'


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

class Authentication extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dimensions: {
                width: null,
                height: null,
            }
        }
        // this.resize = this.resize.bind(this);
    }

    componentDidMount() {
    }

    render() {
        console.log(this.props.app);
        let html = null;
        if (this.props.app.authenticationStatus === "LOGGED_IN") {

        }
        else if (this.props.app.authenticationStatus === "LOGIN") {
            html = (
                <div className={styles.Authentication}>
                    <input type="text" placeholder="username" className={styles.Username}></input>
                    <input type="text" placeholder="password" className={styles.Password}></input>
                </div>
            )
        }
        else if (this.authenticationStatus === "SIGN_UP") {

        }
        else {

        }
        return html;
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
