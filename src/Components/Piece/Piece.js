
import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import store from "../../Redux/store";
import { connect } from "react-redux";
import { setImplicitGrantCredentials, setBoard, setSelected } from "../../Redux/actions/action";


import styles from './Piece.module.css';

import pawn_w from '../Images/pawn_w.png';
import pawn_b from '../Images/pawn_b.png';
import rook_w from '../Images/rook_w.png';
import rook_b from '../Images/rook_b.png';
import bishop_w from '../Images/bishop_w.png';
import knight_w from '../Images/knight_w.png';
import queen_w from '../Images/queen_w.png';
import king_w from '../Images/king_w.png';
import { SET_IMPLICIT_GRANT_CREDENTIALS } from '../../Redux/constants/action-types';

const images = {
    pawn_w: pawn_w,
    pawn_b: pawn_b,
    rook_w: rook_w,
    rook_b: rook_b,
    bishop_w : bishop_w,
    knight_w : knight_w,
    queen_w : queen_w,
    king_w : king_w
}

const mapStateToProps = state => {
    return {
        app: state,
    };
};

const mapDispatchToProps = state => {
    return {
        setImplicitGrantCredentials: props => store.dispatch(setImplicitGrantCredentials(props)),
        setBoard: props => store.dispatch(setBoard(props)),
        setSelected: props => store.dispatch(setSelected(props)),
        //setQueues: props => store.dispatch(setQueues(props))
        //  setUsers: props => store.dispatch(setUsers(props))
    };
};

class Piece extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {

    }

    render() {
        let html = null;
        if (this.props.params !== undefined) {
            let image = null;
            let style = {
                width: this.props.params.squareSize + 'px',
                height: this.props.params.squareSize + 'px'
            }
            if (this.props.params.type !== null) {
                image = (
                    <img src={images[this.props.params.type]} width={this.props.params.squareSize} width={this.props.params.squareSize}></img>
                )
            }
            if (this.props.params.colour === "WHITE") {
                html = (
                    <div className={styles.Square_WHITE} style={style} onClick={this.handleClick}>
                        {image}
                    </div>
                )
            }
            else {
                html = (
                    <div className={styles.Square_BLACK} style={style} onClick={this.handleClick}>
                        {image}
                    </div>
                )
            }
            if (this.props.app.highlightedSquares.length !== 0) {
                this.props.app.highlightedSquares.forEach(square => {
                    if ((square.x === this.props.params.location.x) && (square.y === this.props.params.location.y)) {
                        if (this.props.params.colour === "WHITE") {
                            console.log("here in colours for highlighted")
                            html = (
                                <div className={styles.Square_HIGHLIGHTED_WHITE} style={style} onClick={this.handleClick}>
                                    {image}
                                </div>
                            )
                        } else {
                            html = (
                                <div className={styles.Square_HIGHLIGHTED_BLACK} style={style} onClick={this.handleClick}>
                                    {image}
                                </div>
                            )
                        }

                    }
                })
            }

            if ((this.props.app.selectedSquare.x === this.props.params.location.x) && (this.props.app.selectedSquare.y === this.props.params.location.y)) {
                if (this.props.params.colour === "WHITE") {
                    html = (
                        <div className={styles.Square_SELECTED_WHITE} style={style} onClick={this.handleClick}>
                            {image}
                        </div>
                    )
                } else {
                    html = (
                        <div className={styles.Square_SELECTED_BLACK} style={style} onClick={this.handleClick}>
                            {image}
                        </div>
                    )
                }

            }

        }
        else {
            html = (
                <div className={styles.Square_BLACK}>

                </div>
            )
        }
        return html;
    }

    handleClick() {
        if ((this.props.app.selectedSquare.x === this.props.params.location.x) && (this.props.app.selectedSquare.y === this.props.params.location.y)) {
            console.log("This piece is seleceted");
            let location = {
                x: null,
                y: null
            }
            this.props.setSelected({ selected: location });
        } else {
            let isHighlighted = false;
            this.props.app.highlightedSquares.forEach(square => {
                if ((square.x === this.props.params.location.x) && (square.y === this.props.params.location.y)) {
                    //have to implement move piece here code.
                    let board = this.props.app.board;
                    let pieceLocation = this.props.app.selectedSquare;
                    let piece = board[pieceLocation.x][pieceLocation.y];
                    piece.location = square;
                    board[pieceLocation.x][pieceLocation.y] = {
                        type: null,
                        location: pieceLocation
                    }
                    board[square.x][square.y] = piece;
                    isHighlighted = true;
                    this.props.setBoard({ board: board });
                }
            })
            if (!isHighlighted) {
                this.props.setSelected({ selected: this.props.params.location })
                if (this.props.params.type !== null) {
                    console.log("This is a piece...");

                }
                else {
                    console.log("This is not a piece");
                }
            }
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Piece);
