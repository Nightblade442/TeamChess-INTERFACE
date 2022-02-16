//import logo from './logo.svg';
//import './App.css';
import { Redirect } from 'react-router-dom';
import React, { Component, useState, useEffect, useRef } from 'react';
import store from "../../Redux/store";
import { connect } from "react-redux";
import { setImplicitGrantCredentials, setGameCredentials } from "../../Redux/actions/action";


import styles from './JoinGame.module.css'

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

class JoinGame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gameId: "Game ID:",
            preference: "WHITE"
        }
        // this.resize = this.resize.bind(this);
       this.handleIdChange = this.handleIdChange.bind(this);
        this.handleJoinGame = this.handleJoinGame.bind(this);
        this.changePreference = this.changePreference.bind(this);
    }

    componentDidMount() {
    }

    render() {
        let slider = null;
        if(this.state.preference === "WHITE"){
            slider = (
                <div className={styles.SliderBackgroundWHITE} onClick={this.changePreference}>
                    <div className={styles.SliderWHITE}></div>
                </div>
            )
        }
        else{
                slider = (
                    <div className={styles.SliderBackgroundBLACK} onClick={this.changePreference}>
                        <div className={styles.SliderBLACK}></div>
                    </div>
                )
        }

        return (
            <div className={styles.CreateGameContainer}>
                <h4>Number of Boards: </h4>
                <input type="text"placeholder="game ID" onChange={this.handleIdChange}></input>
                <button className={styles.JoinGameButton} onClick={this.handleJoinGame}>Join</button>
                {slider}
                </div>
        )
    }

    handleIdChange(event){
        console.log(event);
        this.setState({
            ...this.state,
            gameId : event.target.value
        })
    }

    handleJoinGame(event){
        console.log("Joining Game");
        let params = {
            token: this.props.app.token,
            username: this.props.app.username,
            gameId: this.state.gameId,   
            preference: this.state.preference
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
    
    changePreference(event){
        if(this.state.preference === "WHITE"){
            this.setState({
                ...this.state,
                preference: "BLACK"
            })
        }
        else{
            this.setState({
                ...this.state,
                preference: "WHITE"
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(JoinGame);
