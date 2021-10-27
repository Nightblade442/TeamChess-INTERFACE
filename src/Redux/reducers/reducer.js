import {
    SET_IMPLICIT_GRANT_CREDENTIALS,
    SET_BOARD,
    SET_SELECTED,
    SET_AUTHENTICATION_STATUS
} from "../constants/action-types";
import * as moment from 'moment';

function getMoves(board, pieceLocation, players) {
    let piece = board[pieceLocation.x][pieceLocation.y];
    let possibleMoves = [];
    console.log(piece.owner);
    let moveTemplate = {
        pawn_w: [
            {
                type: "SINGLE",
                direction: {
                    x: 1,
                    y: 1
                },
                takeable: true,
                onlyOnTake: true,
                jumpable: false

            },
            {
                type: "SINGLE",
                direction: {
                    x: -1,
                    y: 1
                },
                takeable: true,
                onlyOnTake: true,
                jumpable: false
            },
            {
                type: "SINGLE",
                direction: {
                    x: 0,
                    y: 1
                },
                takeable: false,
                onlyOnTake: false,
                jumpable: false
            },
            /*{
                type: "CONTINUOUS",
                direction: {
                    x: -1,
                    y: 1
                },
                takeable: true,
                jumpable: false,
            }*/
        ],
        pawn_b: [
            {
                type: "SINGLE",
                direction: {
                    x: 1,
                    y: -1
                },
                takeable: true,
                onlyOnTake: true,
                jumpable: false

            },
            {
                type: "SINGLE",
                direction: {
                    x: -1,
                    y: -1
                },
                takeable: true,
                onlyOnTake: true,
                jumpable: false
            },
            {
                type: "SINGLE",
                direction: {
                    x: 0,
                    y: -1
                },
                takeable: false,
                onlyOnTake: false,
                jumpable: false
            }
        ],
        rook_w: [
            {
                type: "CONTINUOUS",
                direction: {
                    x: 0,
                    y: 1
                },
                onlyOnTake: false,
                takeable: true,
                jumpable: false,
            }, 
            {
                type: "CONTINUOUS",
                direction: {
                    x: 0,
                    y: -1
                },
                onlyOnTake: false,
                takeable: true,
                jumpable: false,
            },
            {
                type: "CONTINUOUS",
                direction: {
                    x: 1,
                    y: 0
                },
                onlyOnTake: false,
                takeable: true,
                jumpable: false,
            },
            {
                type: "CONTINUOUS",
                direction: {
                    x: -1,
                    y: 0
                },
                onlyOnTake: false,
                takeable: true,
                jumpable: false,
            },
        ],
        bishop_w: [
            {
                type: "CONTINUOUS",
                direction: {
                    x: 1,
                    y: 1
                },
                onlyOnTake: false,
                takeable: true,
                jumpable: false,
            }, 
            {
                type: "CONTINUOUS",
                direction: {
                    x: -1,
                    y: -1
                },
                onlyOnTake: false,
                takeable: true,
                jumpable: false,
            },
            {
                type: "CONTINUOUS",
                direction: {
                    x: 1,
                    y: -1
                },
                onlyOnTake: false,
                takeable: true,
                jumpable: false,
            },
            {
                type: "CONTINUOUS",
                direction: {
                    x: -1,
                    y: 1
                },
                onlyOnTake: false,
                takeable: true,
                jumpable: false,
            },
        ],
        bishop_b: [
            {
                type: "CONTINUOUS",
                direction: {
                    x: 1,
                    y: 1
                },
                onlyOnTake: false,
                takeable: true,
                jumpable: false,
            }, 
            {
                type: "CONTINUOUS",
                direction: {
                    x: -1,
                    y: -1
                },
                onlyOnTake: false,
                takeable: true,
                jumpable: false,
            },
            {
                type: "CONTINUOUS",
                direction: {
                    x: 1,
                    y: -1
                },
                onlyOnTake: false,
                takeable: true,
                jumpable: false,
            },
            {
                type: "CONTINUOUS",
                direction: {
                    x: -1,
                    y: 1
                },
                onlyOnTake: false,
                takeable: true,
                jumpable: false,
            },
        ],
        rook_b: [
            {
                type: "CONTINUOUS",
                direction: {
                    x: 0,
                    y: 1
                },
                onlyOnTake: false,
                takeable: true,
                jumpable: false,
            }, 
            {
                type: "CONTINUOUS",
                direction: {
                    x: 0,
                    y: -1
                },
                onlyOnTake: false,
                takeable: true,
                jumpable: false,
            },
            {
                type: "CONTINUOUS",
                direction: {
                    x: 1,
                    y: 0
                },
                onlyOnTake: false,
                takeable: true,
                jumpable: false,
            },
            {
                type: "CONTINUOUS",
                direction: {
                    x: -1,
                    y: 0
                },
                onlyOnTake: false,
                takeable: true,
                jumpable: false,
            },
        ],
        knight_w: [
            {
                type: "SINGLE",
                direction: {
                    x: 1,
                    y: 2
                },
                takeable: true,
                onlyOnTake: false,
                jumpable: true
            },
            {
                type: "SINGLE",
                direction: {
                    x: -1,
                    y: 2
                },
                takeable: true,
                onlyOnTake: false,
                jumpable: true
            },
            {
                type: "SINGLE",
                direction: {
                    x: 1,
                    y: -2
                },
                takeable: true,
                onlyOnTake: false,
                jumpable: true
            },
            {
                type: "SINGLE",
                direction: {
                    x: -1,
                    y: -2
                },
                takeable: true,
                onlyOnTake: false,
                jumpable: true
            },
            {
                type: "SINGLE",
                direction: {
                    x: 2,
                    y: 1
                },
                takeable: true,
                onlyOnTake: false,
                jumpable: true
            },
            {
                type: "SINGLE",
                direction: {
                    x: 2,
                    y: -1
                },
                takeable: true,
                onlyOnTake: false,
                jumpable: true
            },
            {
                type: "SINGLE",
                direction: {
                    x: -2,
                    y: 1
                },
                takeable: true,
                onlyOnTake: false,
                jumpable: true
            },
            {
                type: "SINGLE",
                direction: {
                    x: -2,
                    y: -1
                },
                takeable: true,
                onlyOnTake: false,
                jumpable: true
            },
        ],
        queen_w: [
            {
                type: "CONTINUOUS",
                direction: {
                    x: 1,
                    y: 1
                },
                onlyOnTake: false,
                takeable: true,
                jumpable: false,
            }, 
            {
                type: "CONTINUOUS",
                direction: {
                    x: -1,
                    y: -1
                },
                onlyOnTake: false,
                takeable: true,
                jumpable: false,
            },
            {
                type: "CONTINUOUS",
                direction: {
                    x: 1,
                    y: -1
                },
                onlyOnTake: false,
                takeable: true,
                jumpable: false,
            },
            {
                type: "CONTINUOUS",
                direction: {
                    x: -1,
                    y: 1
                },
                onlyOnTake: false,
                takeable: true,
                jumpable: false,
            },  
            {
                type: "CONTINUOUS",
                direction: {
                    x: 0,
                    y: 1
                },
                onlyOnTake: false,
                takeable: true,
                jumpable: false,
            }, 
            {
                type: "CONTINUOUS",
                direction: {
                    x: 0,
                    y: -1
                },
                onlyOnTake: false,
                takeable: true,
                jumpable: false,
            },
            {
                type: "CONTINUOUS",
                direction: {
                    x: 1,
                    y: 0
                },
                onlyOnTake: false,
                takeable: true,
                jumpable: false,
            },
            {
                type: "CONTINUOUS",
                direction: {
                    x: -1,
                    y: 0
                },
                onlyOnTake: false,
                takeable: true,
                jumpable: false,
            },
        ],
        king_w: [
            {
                type: "SINGLE",
                direction: {
                    x: 1,
                    y: 1
                },
                onlyOnTake: false,
                takeable: true,
                jumpable: false,
            }, 
            {
                type: "SINGLE",
                direction: {
                    x: -1,
                    y: -1
                },
                onlyOnTake: false,
                takeable: true,
                jumpable: false,
            },
            {
                type: "SINGLE",
                direction: {
                    x: 1,
                    y: -1
                },
                onlyOnTake: false,
                takeable: true,
                jumpable: false,
            },
            {
                type: "SINGLE",
                direction: {
                    x: -1,
                    y: 1
                },
                onlyOnTake: false,
                takeable: true,
                jumpable: false,
            },  
            {
                type: "SINGLE",
                direction: {
                    x: 0,
                    y: 1
                },
                onlyOnTake: false,
                takeable: true,
                jumpable: false,
            }, 
            {
                type: "SINGLE",
                direction: {
                    x: 0,
                    y: -1
                },
                onlyOnTake: false,
                takeable: true,
                jumpable: false,
            },
            {
                type: "SINGLE",
                direction: {
                    x: 1,
                    y: 0
                },
                onlyOnTake: false,
                takeable: true,
                jumpable: false,
            },
            {
                type: "SINGLE",
                direction: {
                    x: -1,
                    y: 0
                },
                onlyOnTake: false,
                takeable: true,
                jumpable: false,
            },
        ]
    }

    if (moveTemplate[piece.type] !== undefined) {
        console.log("this piece's moves are defined");
        let pieceTemplate = moveTemplate[piece.type];
        pieceTemplate.forEach(moveSet => {
            console.log(moveSet);
            if (moveSet.type === "SINGLE") {
                try {
                    let moveLocation = {
                        x: pieceLocation.x + moveSet.direction.x,
                        y: pieceLocation.y + moveSet.direction.y
                    }
                    let moveSquare = board[moveLocation.x][moveLocation.y];
                    if (moveSquare.type === null) {
                        if (!moveSet.onlyOnTake) {
                            possibleMoves.push(moveLocation);
                        }
                    }
                    else {
                        //need to check if the piece on the target square is takeable
                        let piece1Colour = piece.type.split("_")[1];
                        let piece2Colour = moveSquare.type.split("_")[1];
                        if (piece1Colour !== piece2Colour) {
                            if (moveSet.takeable) {
                                possibleMoves.push(moveLocation);
                            }
                        }
                    }
                }
                catch (error) {
                    console.log(error);
                    console.log("move outside board boundaries")
                }
            }
            else {
                console.log("here at least");
                let attempt = 1;
                while (true) {
                    let moveLocation = {
                        x: pieceLocation.x + (moveSet.direction.x * attempt),
                        y: pieceLocation.y + (moveSet.direction.y * attempt)
                    }
                    try {
                        let moveSquare = board[moveLocation.x][moveLocation.y];
                        if (moveSquare.type === null) {
                            possibleMoves.push(moveLocation);
                        }
                        else {
                            //need to check if the piece on the target square is takeable
                            console.log(moveSquare.type);
                            let piece1Colour = piece.type.split("_")[1];
                            let piece2Colour = moveSquare.type.split("_")[1];
                            if (piece1Colour !== piece2Colour) {
                                if (moveSet.takeable) {
                                    possibleMoves.push(moveLocation);
                                }
                                if (!moveSet.jumpable) {
                                    console.log("end of row");
                                    break;
                                }
                            }
                            else{
                                break;
                            }
                        }
                    }
                    catch {
                        console.log("Square Outside Boundaries of the board");
                        break;
                    }
                    attempt++;
                }
            }
        })
    }
    return possibleMoves;
}

function appReducer(state, action) {
    //tell redux how to deal with data in each action case. one for each action.
    let newstate = null;
    console.log(action);
    if (action.type === SET_IMPLICIT_GRANT_CREDENTIALS) { //after getting access token 
        newstate = {
            ...state,
            loggedIn: true,
            loginErrorMessage: null,
            access_token: action.payload.access_token,
            implicitGrantExpiry: moment().add(86398, 'seconds'),
        };
    }
    else if (action.type === SET_BOARD) {
        newstate = {
            ...state,
            highlightedSquares: [],
            selectedSquare: {
                x: null,
                y: null
            },
            board: action.payload.board
        }
    }
    else if (action.type === SET_SELECTED) {
        let highlightedSquares = [];
        try{
            if (state.board[action.payload.selected.x][action.payload.selected.y].type !== null) {
                console.log("this is a piece");
                highlightedSquares = getMoves(state.board, action.payload.selected);
            }
        }
        catch{

        }
        newstate = {
            ...state,
            selectedSquare: action.payload.selected,
            highlightedSquares: highlightedSquares
        }
    }
    else if(action.type === SET_AUTHENTICATION_STATUS){
         newstate = {
             ...state,
             ...action.payload
         }
    }
    else {
        newstate = { ...state };
    }

    return newstate;
}

export default appReducer;