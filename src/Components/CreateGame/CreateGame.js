//import logo from './logo.svg';
//import './App.css';
import { Redirect } from 'react-router-dom';
import React, { Component, useState, useEffect, useRef } from 'react';
import store from "../../Redux/store";
import { connect } from "react-redux";
import { setImplicitGrantCredentials, setGameCredentials } from "../../Redux/actions/action";


import styles from './CreateGame.module.css'

import createGame from '../../API/createGame';
import joinGame from '../../API/joinGame';

const mapStateToProps = state => {
    return {
        app: state,
    };
};

const mapDispatchToProps = state => {
    return {
        setImplicitGrantCredentials: props => store.dispatch(setImplicitGrantCredentials(props)),
        joinGame: props => store.dispatch(setGameCredentials(props)),
        //setQueues: props => store.dispatch(setQueues(props))
        //  setUsers: props => store.dispatch(setUsers(props))
    };
};

class CreateGame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numberOfBoards: 1,
            gameId: "Game ID:"
        }
        // this.resize = this.resize.bind(this);
        this.handleBoardNumber = this.handleBoardNumber.bind(this);
        this.handleCreateGame = this.handleCreateGame.bind(this);
        this.handleJoinGame = this.handleJoinGame.bind(this);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className={styles.CreateGameContainer}>
                <h4>Number of Boards: </h4>
                <input type="number" defaultValue="1" onChange={this.handleBoardNumber}></input>
                <input type="text"placeholder="game ID" value={this.state.gameId} readOnly></input>
                <button className={styles.CreateGameButton} onClick={this.handleCreateGame}>Create</button>
                <button className={styles.JoinGameButton} onClick={this.handleJoinGame}>Join</button>
                </div>
        )
    }

    handleBoardNumber(event) {
        console.log(event.target.value);
        this.setState({
            numberOfBoards: event.target.value
        })
    }

    handleCreateGame(event){
        console.log("Creating Game");
        let params = {
            username: this.props.app.username,
            token: this.props.app.token,
            numberOfBoards: this.state.numberOfBoards
        }
        createGame(params)
        .then(response => {
            console.log(response);
            this.setState({
                ...this.state,
                gameId : response.gameId,
            })
        })
        .catch(error => {

        })
    }

    handleJoinGame(event){
        console.log("Joining Game");
        let params = {
            token: this.props.app.token,
            username: this.props.app.username,
            gameId: this.state.gameId,   
        }
        console.log(params);
        let state = this.props.app;
        joinGame(params)
        .then(response => {
            console.log(response);
            this.props.joinGame({
                gameId: this.state.gameId,
                playerId: response.playerId,
            })
        })
        .catch(error => {
            console.log(error);
        })
        //need to join the game then set state
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateGame);
