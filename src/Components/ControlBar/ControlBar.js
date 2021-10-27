//import logo from './logo.svg';
//import './App.css';
import { Redirect } from 'react-router-dom';
import React, { Component, useState, useEffect, useRef } from 'react';
import store from "../../Redux/store";
import { connect } from "react-redux";
import { setImplicitGrantCredentials } from "../../Redux/actions/action";


import styles from './ControlBar.module.css'


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

class ControlBar extends Component {
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
        return (
            <div className={styles.ControlBar}>
                <div className={styles.AuthenticationContainer}>
                    <h6>You are not logged in. Please login or sign up</h6>
                    <input type="button" className={styles.LoginButton} value="LOGIN"/>
                </div>
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ControlBar);
