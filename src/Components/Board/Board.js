//import logo from './logo.svg';
//import './App.css';
import { Redirect } from 'react-router-dom';
import React, { Component, useState, useEffect, useRef } from 'react';
import store from "../../Redux/store";
import { connect } from "react-redux";
import { setImplicitGrantCredentials } from "../../Redux/actions/action";

import Piece from '../Piece/Piece';
import styles from './Board.module.css'


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

class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dimensions: {
                width: null,
                height: null,
            }
        }
        this.resize = this.resize.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.resize);
        this.resize();
    }

    render() {
        let params = {}
        let html = null;
        if (this.state.dimensions.height !== null) {
            let colour = "WHITE";
            let board = []
            for (const file of this.props.app.board) {
                let fileArr = [];
                for (const square of file) {
                    if (square !== null) {
                        params = {
                            squareSize: Math.floor(this.state.dimensions.height / 8),
                            colour: colour,
                            ...square,
                        }
                    }
                    else {
                        params = {
                            squareSize: Math.floor(this.state.dimensions.height / 8),
                            colour: colour,
                            type: null,
                            selected: false
                        }
                    }
                    fileArr.push(
                        <tr>
                            <Piece params={params}></Piece>
                        </tr>
                    )

                    if (colour === 'WHITE') {
                        colour = 'BLACK'
                    } else {
                        colour = 'WHITE'
                    }
                }
                board.push(<td>
                    {fileArr}
                </td>)
                if (colour === 'WHITE') {
                    colour = 'BLACK'
                } else {
                    colour = 'WHITE'
                }
            }
            html = (
                <div className={styles.Board} id="Board">
                    {board}
                </div>
            )
        }
        else {
            html = (
                <div className={styles.Board} id="Board">
                </div>
            )
        }
        return html;
    }

    resize() {
        let div = document.getElementById("Board");
        if (div !== undefined) {
            this.setState({
                dimensions: {
                    width: div.clientWidth,
                    height: div.clientHeight,
                }
            })
        }
    }

}

//export default App;
//export default App = connect(mapStateToProps)(App);
export default connect(mapStateToProps, mapDispatchToProps)(Board);
