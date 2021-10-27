import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
//import './App.css';
//import WrenAppBar from '../wrenAppBar/WrenAppBar';

import queryString from 'query-string'

import store from "../../Redux/store";

import { setImplicitGrantCredentials } from "../../Redux/actions/action";

//import * as DEBUG from 'debug';
//const debug = new console.log("Wren:ImplicitGrant");

const mapStateToProps = state => {
    return {
        app: state,
    };
};

const mapDispatchToProps = state => {
    return {
        setImplicitGrantCredentials: props => store.dispatch(setImplicitGrantCredentials(props))
    };
};


class Callback extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const values = queryString.parse(this.props.location.hash); //takes the hash of the current window location and stores it in values.
        this.props.setImplicitGrantCredentials(values); //action.js action that sets the token to "values";*/
    }

    render() {

        console.log("Callback")
        const values = queryString.parse(this.props.location.hash);
        this.props.setImplicitGrantCredentials(values); //action.js action that sets the token to "values";*/
        let html = null;
        if (this.props.app.loggedIn) {
            html = (
                <Redirect to="/" />
            )
        }
        else {
            html = (
                <h1>You are a bold one</h1>
            )
        }
        return html;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Callback);