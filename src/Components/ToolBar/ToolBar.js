//import logo from './logo.svg';
//import './App.css';
import { Redirect } from 'react-router-dom';
import React, { Component, useState, useEffect, useRef } from 'react';
import store from "../../Redux/store";
import { connect } from "react-redux";
import { setImplicitGrantCredentials, setSettings } from "../../Redux/actions/action";


import styles from './ToolBar.module.css'

import CreateGame from '../CreateGame/CreateGame';
import JoinGame from '../JoinGame/JoinGame';

import flipBoard from '../Images/flip_board.png'

const mapStateToProps = state => {
    return {
        app: state,
    };
};

const mapDispatchToProps = state => {
    return {
        setImplicitGrantCredentials: props => store.dispatch(setImplicitGrantCredentials(props)),
        setSettings : props => store.dispatch(setSettings(props))
        //setQueues: props => store.dispatch(setQueues(props))
        //  setUsers: props => store.dispatch(setUsers(props))
    };
};

class ToolBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: "CREATE"
        }
        // this.resize = this.resize.bind(this);
        this.handleBoardFlip = this.handleBoardFlip.bind(this);
    }

    componentDidMount() {
    }

    render() {

        return (
            <div className={styles.ToolBar}>
                <div className={styles.FlipBoardButton} onClick={this.handleBoardFlip}>
                    <img src={flipBoard} className={styles.FlipBoardImage}></img>
                </div>
            </div>
        )
    }

    handleBoardFlip(event){
        if(this.props.app.flippedState === -1){
            let payload ={ 
                flippedState : 1
            }
            this.props.setSettings(payload);
        }
        else{
            let payload ={ 
                flippedState : -1
            }
            this.props.setSettings(payload);
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ToolBar);