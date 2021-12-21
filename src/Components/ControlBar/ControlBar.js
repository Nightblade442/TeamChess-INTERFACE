//import logo from './logo.svg';
//import './App.css';
import { Redirect } from 'react-router-dom';
import React, { Component, useState, useEffect, useRef } from 'react';
import store from "../../Redux/store";
import { connect } from "react-redux";
import { setImplicitGrantCredentials } from "../../Redux/actions/action";


import styles from './ControlBar.module.css'

import CreateGame from '../CreateGame/CreateGame';
import JoinGame from '../JoinGame/JoinGame';

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
            page: "CREATE"
        }
        // this.resize = this.resize.bind(this);
        this.handleControlButton = this.handleControlButton.bind(this);
    }

    componentDidMount() {
    }

    render() {

        let buttons = [];
        let page = null;
        if (this.state.page === "CREATE") {
            buttons.push(<button id="CREATE" className={styles.SelectedControlBarButton} onClick={this.handleControlButton}>Create</button>)
            buttons.push(<button id="JOIN" className={styles.ControlBarButton} onClick={this.handleControlButton}>Join</button>)
            buttons.push(<button id="VIEW" className={styles.ControlBarButton} onClick={this.handleControlButton}>View</button>)
            page = (<CreateGame></CreateGame>)
        }
        else if (this.state.page === "JOIN") {
            buttons.push(<button id="CREATE" className={styles.ControlBarButton} onClick={this.handleControlButton}>Create</button>)
            buttons.push(<button id="JOIN" className={styles.SelectedControlBarButton} onClick={this.handleControlButton}>Join</button>)
            buttons.push(<button id="VIEW" className={styles.ControlBarButton} onClick={this.handleControlButton}>View</button>)
            page = (<JoinGame></JoinGame>)
        }
        else {
            buttons.push(<button id="CREATE" className={styles.ControlBarButton} onClick={this.handleControlButton}>Create</button>)
            buttons.push(<button id="JOIN" className={styles.ControlBarButton} onClick={this.handleControlButton}>Join</button>)
            buttons.push(<button id="VIEW" className={styles.SelectedControlBarButton} onClick={this.handleControlButton}>View</button>)
        }

        return (
            <div className={styles.ControlBar}>
                <div className={styles.AuthenticationContainer}>
                    <h1>Welcome to Team Chess!</h1>
                    <h3>{this.props.app.username}</h3>
                </div>
                <div className={styles.ControlContainer}>
                    {buttons}
                    <div className={styles.PageContainer}>
                        {page}
                    </div>
                </div>
            </div>
        )
    }

    handleControlButton(event) {
        this.setState({
            page: event.target.id
        })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ControlBar);
