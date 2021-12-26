//import logo from './logo.svg';
//import './App.css';
import { Redirect } from 'react-router-dom';
import React, { Component, useState, useEffect, useRef } from 'react';
import store from "../../Redux/store";
import { connect } from "react-redux";
import { setImplicitGrantCredentials, setBoard } from "../../Redux/actions/action";

import Piece from '../Piece/Piece';
import styles from './Board.module.css'

import getMove from '../../API/getMove';
import sendMove from '../../API/sendMove';

const mapStateToProps = state => {
    return {
        app: state,
    };
};

const mapDispatchToProps = state => {
    return {
        setImplicitGrantCredentials: props => store.dispatch(setImplicitGrantCredentials(props)),
        setBoard: props => store.dispatch(setBoard(props)),
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
            },
            game: {
                gameId: null,
                move: 0,
                players: null,
                board: [
                    [
                        {
                            "owner": "NWKj79WYigJEUcEFsI7H",
                            "location": {
                                "x": 0,
                                "y": 0
                            },
                            "type": "rook_w",
                            "selected": false
                        },
                        {
                            "owner": "NWKj79WYigJEUcEFsI7H",
                            "location": {
                                "x": 0,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 0,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 0,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 0,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 0,
                                "y": 5
                            }
                        },
                        {
                            "owner": "vtmnr7Y0TMpAKCiNY1s0",
                            "location": {
                                "x": 0,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "vtmnr7Y0TMpAKCiNY1s0",
                            "location": {
                                "x": 0,
                                "y": 7
                            },
                            "type": "rook_b",
                            "selected": false
                        }
                    ],
                    [
                        {
                            "owner": "NWKj79WYigJEUcEFsI7H",
                            "location": {
                                "x": 1,
                                "y": 0
                            },
                            "type": "knight_w",
                            "selected": false
                        },
                        {
                            "owner": "NWKj79WYigJEUcEFsI7H",
                            "location": {
                                "x": 1,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 1,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 1,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 1,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 1,
                                "y": 5
                            }
                        },
                        {
                            "owner": "vtmnr7Y0TMpAKCiNY1s0",
                            "location": {
                                "x": 1,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "vtmnr7Y0TMpAKCiNY1s0",
                            "location": {
                                "x": 1,
                                "y": 7
                            },
                            "type": "pawn_b",
                            "selected": false
                        }
                    ],
                    [
                        {
                            "owner": "NWKj79WYigJEUcEFsI7H",
                            "location": {
                                "x": 2,
                                "y": 0
                            },
                            "type": "bishop_w",
                            "selected": false
                        },
                        {
                            "owner": "NWKj79WYigJEUcEFsI7H",
                            "location": {
                                "x": 2,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 2,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 2,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 2,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 2,
                                "y": 5
                            }
                        },
                        {
                            "owner": "vtmnr7Y0TMpAKCiNY1s0",
                            "location": {
                                "x": 2,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "vtmnr7Y0TMpAKCiNY1s0",
                            "location": {
                                "x": 2,
                                "y": 7
                            },
                            "type": "pawn_b",
                            "selected": false
                        }
                    ],
                    [
                        {
                            "owner": "NWKj79WYigJEUcEFsI7H",
                            "location": {
                                "x": 3,
                                "y": 0
                            },
                            "type": "king_w",
                            "selected": false
                        },
                        {
                            "owner": "NWKj79WYigJEUcEFsI7H",
                            "location": {
                                "x": 3,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 3,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 3,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 3,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 3,
                                "y": 5
                            }
                        },
                        {
                            "owner": "vtmnr7Y0TMpAKCiNY1s0",
                            "location": {
                                "x": 3,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "vtmnr7Y0TMpAKCiNY1s0",
                            "location": {
                                "x": 3,
                                "y": 7
                            },
                            "type": "pawn_b",
                            "selected": false
                        }
                    ],
                    [
                        {
                            "owner": "NWKj79WYigJEUcEFsI7H",
                            "location": {
                                "x": 4,
                                "y": 0
                            },
                            "type": "queen_w",
                            "selected": false
                        },
                        {
                            "owner": "NWKj79WYigJEUcEFsI7H",
                            "location": {
                                "x": 4,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 4,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 4,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 4,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 4,
                                "y": 5
                            }
                        },
                        {
                            "owner": "vtmnr7Y0TMpAKCiNY1s0",
                            "location": {
                                "x": 4,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "vtmnr7Y0TMpAKCiNY1s0",
                            "location": {
                                "x": 4,
                                "y": 7
                            },
                            "type": "pawn_b",
                            "selected": false
                        }
                    ],
                    [
                        {
                            "owner": "NWKj79WYigJEUcEFsI7H",
                            "location": {
                                "x": 5,
                                "y": 0
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "owner": "NWKj79WYigJEUcEFsI7H",
                            "location": {
                                "x": 5,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 5,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 5,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 5,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 5,
                                "y": 5
                            }
                        },
                        {
                            "owner": "vtmnr7Y0TMpAKCiNY1s0",
                            "location": {
                                "x": 5,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "vtmnr7Y0TMpAKCiNY1s0",
                            "location": {
                                "x": 5,
                                "y": 7
                            },
                            "type": "pawn_b",
                            "selected": false
                        }
                    ],
                    [
                        {
                            "owner": "NWKj79WYigJEUcEFsI7H",
                            "location": {
                                "x": 6,
                                "y": 0
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "owner": "NWKj79WYigJEUcEFsI7H",
                            "location": {
                                "x": 6,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 6,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 6,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 6,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 6,
                                "y": 5
                            }
                        },
                        {
                            "owner": "vtmnr7Y0TMpAKCiNY1s0",
                            "location": {
                                "x": 6,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "vtmnr7Y0TMpAKCiNY1s0",
                            "location": {
                                "x": 6,
                                "y": 7
                            },
                            "type": "pawn_b",
                            "selected": false
                        }
                    ],
                    [
                        {
                            "owner": "NWKj79WYigJEUcEFsI7H",
                            "location": {
                                "x": 7,
                                "y": 0
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "owner": "NWKj79WYigJEUcEFsI7H",
                            "location": {
                                "x": 7,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 7,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 7,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 7,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 7,
                                "y": 5
                            }
                        },
                        {
                            "owner": "vtmnr7Y0TMpAKCiNY1s0",
                            "location": {
                                "x": 7,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "vtmnr7Y0TMpAKCiNY1s0",
                            "location": {
                                "x": 7,
                                "y": 7
                            },
                            "type": "pawn_b",
                            "selected": false
                        }
                    ],
                    [
                        {
                            "owner": "vtmnr7Y0TMpAKCiNY1s0",
                            "location": {
                                "x": 8,
                                "y": 0
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "owner": "vtmnr7Y0TMpAKCiNY1s0",
                            "location": {
                                "x": 8,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 8,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 8,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 8,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 8,
                                "y": 5
                            }
                        },
                        {
                            "owner": "NRTDqKc7SvSnYxWtW5bo",
                            "location": {
                                "x": 8,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "NRTDqKc7SvSnYxWtW5bo",
                            "location": {
                                "x": 8,
                                "y": 7
                            },
                            "type": "pawn_b",
                            "selected": false
                        }
                    ],
                    [
                        {
                            "owner": "vtmnr7Y0TMpAKCiNY1s0",
                            "location": {
                                "x": 9,
                                "y": 0
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "owner": "vtmnr7Y0TMpAKCiNY1s0",
                            "location": {
                                "x": 9,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 9,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 9,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 9,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 9,
                                "y": 5
                            }
                        },
                        {
                            "owner": "NRTDqKc7SvSnYxWtW5bo",
                            "location": {
                                "x": 9,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "NRTDqKc7SvSnYxWtW5bo",
                            "location": {
                                "x": 9,
                                "y": 7
                            },
                            "type": "pawn_b",
                            "selected": false
                        }
                    ],
                    [
                        {
                            "owner": "vtmnr7Y0TMpAKCiNY1s0",
                            "location": {
                                "x": 10,
                                "y": 0
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "owner": "vtmnr7Y0TMpAKCiNY1s0",
                            "location": {
                                "x": 10,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 10,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 10,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 10,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 10,
                                "y": 5
                            }
                        },
                        {
                            "owner": "NRTDqKc7SvSnYxWtW5bo",
                            "location": {
                                "x": 10,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "NRTDqKc7SvSnYxWtW5bo",
                            "location": {
                                "x": 10,
                                "y": 7
                            },
                            "type": "pawn_b",
                            "selected": false
                        }
                    ],
                    [
                        {
                            "owner": "vtmnr7Y0TMpAKCiNY1s0",
                            "location": {
                                "x": 11,
                                "y": 0
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "owner": "vtmnr7Y0TMpAKCiNY1s0",
                            "location": {
                                "x": 11,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 11,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 11,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 11,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 11,
                                "y": 5
                            }
                        },
                        {
                            "owner": "NRTDqKc7SvSnYxWtW5bo",
                            "location": {
                                "x": 11,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "NRTDqKc7SvSnYxWtW5bo",
                            "location": {
                                "x": 11,
                                "y": 7
                            },
                            "type": "pawn_b",
                            "selected": false
                        }
                    ],
                    [
                        {
                            "owner": "vtmnr7Y0TMpAKCiNY1s0",
                            "location": {
                                "x": 12,
                                "y": 0
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "owner": "vtmnr7Y0TMpAKCiNY1s0",
                            "location": {
                                "x": 12,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 12,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 12,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 12,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 12,
                                "y": 5
                            }
                        },
                        {
                            "owner": "NRTDqKc7SvSnYxWtW5bo",
                            "location": {
                                "x": 12,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "NRTDqKc7SvSnYxWtW5bo",
                            "location": {
                                "x": 12,
                                "y": 7
                            },
                            "type": "pawn_b",
                            "selected": false
                        }
                    ],
                    [
                        {
                            "owner": "vtmnr7Y0TMpAKCiNY1s0",
                            "location": {
                                "x": 13,
                                "y": 0
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "owner": "vtmnr7Y0TMpAKCiNY1s0",
                            "location": {
                                "x": 13,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 13,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 13,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 13,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 13,
                                "y": 5
                            }
                        },
                        {
                            "owner": "NRTDqKc7SvSnYxWtW5bo",
                            "location": {
                                "x": 13,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "NRTDqKc7SvSnYxWtW5bo",
                            "location": {
                                "x": 13,
                                "y": 7
                            },
                            "type": "pawn_b",
                            "selected": false
                        }
                    ],
                    [
                        {
                            "owner": "vtmnr7Y0TMpAKCiNY1s0",
                            "location": {
                                "x": 14,
                                "y": 0
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "owner": "vtmnr7Y0TMpAKCiNY1s0",
                            "location": {
                                "x": 14,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 14,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 14,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 14,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 14,
                                "y": 5
                            }
                        },
                        {
                            "owner": "NRTDqKc7SvSnYxWtW5bo",
                            "location": {
                                "x": 14,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "NRTDqKc7SvSnYxWtW5bo",
                            "location": {
                                "x": 14,
                                "y": 7
                            },
                            "type": "pawn_b",
                            "selected": false
                        }
                    ],
                    [
                        {
                            "owner": "vtmnr7Y0TMpAKCiNY1s0",
                            "location": {
                                "x": 15,
                                "y": 0
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "owner": "vtmnr7Y0TMpAKCiNY1s0",
                            "location": {
                                "x": 15,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 15,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 15,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 15,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 15,
                                "y": 5
                            }
                        },
                        {
                            "owner": "NRTDqKc7SvSnYxWtW5bo",
                            "location": {
                                "x": 15,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "NRTDqKc7SvSnYxWtW5bo",
                            "location": {
                                "x": 15,
                                "y": 7
                            },
                            "type": "pawn_b",
                            "selected": false
                        }
                    ],
                    [
                        {
                            "owner": "NRTDqKc7SvSnYxWtW5bo",
                            "location": {
                                "x": 16,
                                "y": 0
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "owner": "NRTDqKc7SvSnYxWtW5bo",
                            "location": {
                                "x": 16,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 16,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 16,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 16,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 16,
                                "y": 5
                            }
                        },
                        {
                            "owner": "kLDp6sNZ06x1xHCPYEi1",
                            "location": {
                                "x": 16,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "kLDp6sNZ06x1xHCPYEi1",
                            "location": {
                                "x": 16,
                                "y": 7
                            },
                            "type": "pawn_b",
                            "selected": false
                        }
                    ],
                    [
                        {
                            "owner": "NRTDqKc7SvSnYxWtW5bo",
                            "location": {
                                "x": 17,
                                "y": 0
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "owner": "NRTDqKc7SvSnYxWtW5bo",
                            "location": {
                                "x": 17,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 17,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 17,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 17,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 17,
                                "y": 5
                            }
                        },
                        {
                            "owner": "kLDp6sNZ06x1xHCPYEi1",
                            "location": {
                                "x": 17,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "kLDp6sNZ06x1xHCPYEi1",
                            "location": {
                                "x": 17,
                                "y": 7
                            },
                            "type": "pawn_b",
                            "selected": false
                        }
                    ],
                    [
                        {
                            "owner": "NRTDqKc7SvSnYxWtW5bo",
                            "location": {
                                "x": 18,
                                "y": 0
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "owner": "NRTDqKc7SvSnYxWtW5bo",
                            "location": {
                                "x": 18,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 18,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 18,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 18,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 18,
                                "y": 5
                            }
                        },
                        {
                            "owner": "kLDp6sNZ06x1xHCPYEi1",
                            "location": {
                                "x": 18,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "kLDp6sNZ06x1xHCPYEi1",
                            "location": {
                                "x": 18,
                                "y": 7
                            },
                            "type": "pawn_b",
                            "selected": false
                        }
                    ],
                    [
                        {
                            "owner": "NRTDqKc7SvSnYxWtW5bo",
                            "location": {
                                "x": 19,
                                "y": 0
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "owner": "NRTDqKc7SvSnYxWtW5bo",
                            "location": {
                                "x": 19,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 19,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 19,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 19,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 19,
                                "y": 5
                            }
                        },
                        {
                            "owner": "kLDp6sNZ06x1xHCPYEi1",
                            "location": {
                                "x": 19,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "kLDp6sNZ06x1xHCPYEi1",
                            "location": {
                                "x": 19,
                                "y": 7
                            },
                            "type": "pawn_b",
                            "selected": false
                        }
                    ],
                    [
                        {
                            "owner": "NRTDqKc7SvSnYxWtW5bo",
                            "location": {
                                "x": 20,
                                "y": 0
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "owner": "NRTDqKc7SvSnYxWtW5bo",
                            "location": {
                                "x": 20,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 20,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 20,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 20,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 20,
                                "y": 5
                            }
                        },
                        {
                            "owner": "kLDp6sNZ06x1xHCPYEi1",
                            "location": {
                                "x": 20,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "kLDp6sNZ06x1xHCPYEi1",
                            "location": {
                                "x": 20,
                                "y": 7
                            },
                            "type": "pawn_b",
                            "selected": false
                        }
                    ],
                    [
                        {
                            "owner": "NRTDqKc7SvSnYxWtW5bo",
                            "location": {
                                "x": 21,
                                "y": 0
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "owner": "NRTDqKc7SvSnYxWtW5bo",
                            "location": {
                                "x": 21,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 21,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 21,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 21,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 21,
                                "y": 5
                            }
                        },
                        {
                            "owner": "kLDp6sNZ06x1xHCPYEi1",
                            "location": {
                                "x": 21,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "kLDp6sNZ06x1xHCPYEi1",
                            "location": {
                                "x": 21,
                                "y": 7
                            },
                            "type": "pawn_b",
                            "selected": false
                        }
                    ],
                    [
                        {
                            "owner": "NRTDqKc7SvSnYxWtW5bo",
                            "location": {
                                "x": 22,
                                "y": 0
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "owner": "NRTDqKc7SvSnYxWtW5bo",
                            "location": {
                                "x": 22,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 22,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 22,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 22,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 22,
                                "y": 5
                            }
                        },
                        {
                            "owner": "kLDp6sNZ06x1xHCPYEi1",
                            "location": {
                                "x": 22,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "kLDp6sNZ06x1xHCPYEi1",
                            "location": {
                                "x": 22,
                                "y": 7
                            },
                            "type": "pawn_b",
                            "selected": false
                        }
                    ],
                    [
                        {
                            "owner": "NRTDqKc7SvSnYxWtW5bo",
                            "location": {
                                "x": 23,
                                "y": 0
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "owner": "NRTDqKc7SvSnYxWtW5bo",
                            "location": {
                                "x": 23,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 23,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 23,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 23,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 23,
                                "y": 5
                            }
                        },
                        {
                            "owner": "kLDp6sNZ06x1xHCPYEi1",
                            "location": {
                                "x": 23,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "kLDp6sNZ06x1xHCPYEi1",
                            "location": {
                                "x": 23,
                                "y": 7
                            },
                            "type": "pawn_b",
                            "selected": false
                        }
                    ],
                    [
                        {
                            "owner": "kLDp6sNZ06x1xHCPYEi1",
                            "location": {
                                "x": 24,
                                "y": 0
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "owner": "kLDp6sNZ06x1xHCPYEi1",
                            "location": {
                                "x": 24,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 24,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 24,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 24,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 24,
                                "y": 5
                            }
                        },
                        {
                            "owner": "SXUX3UcOeixx2LnHz8pA",
                            "location": {
                                "x": 24,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "SXUX3UcOeixx2LnHz8pA",
                            "location": {
                                "x": 24,
                                "y": 7
                            },
                            "type": "pawn_b",
                            "selected": false
                        }
                    ],
                    [
                        {
                            "owner": "kLDp6sNZ06x1xHCPYEi1",
                            "location": {
                                "x": 25,
                                "y": 0
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "owner": "kLDp6sNZ06x1xHCPYEi1",
                            "location": {
                                "x": 25,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 25,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 25,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 25,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 25,
                                "y": 5
                            }
                        },
                        {
                            "owner": "SXUX3UcOeixx2LnHz8pA",
                            "location": {
                                "x": 25,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "SXUX3UcOeixx2LnHz8pA",
                            "location": {
                                "x": 25,
                                "y": 7
                            },
                            "type": "pawn_b",
                            "selected": false
                        }
                    ],
                    [
                        {
                            "owner": "kLDp6sNZ06x1xHCPYEi1",
                            "location": {
                                "x": 26,
                                "y": 0
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "owner": "kLDp6sNZ06x1xHCPYEi1",
                            "location": {
                                "x": 26,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 26,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 26,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 26,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 26,
                                "y": 5
                            }
                        },
                        {
                            "owner": "SXUX3UcOeixx2LnHz8pA",
                            "location": {
                                "x": 26,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "SXUX3UcOeixx2LnHz8pA",
                            "location": {
                                "x": 26,
                                "y": 7
                            },
                            "type": "pawn_b",
                            "selected": false
                        }
                    ],
                    [
                        {
                            "owner": "kLDp6sNZ06x1xHCPYEi1",
                            "location": {
                                "x": 27,
                                "y": 0
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "owner": "kLDp6sNZ06x1xHCPYEi1",
                            "location": {
                                "x": 27,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 27,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 27,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 27,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 27,
                                "y": 5
                            }
                        },
                        {
                            "owner": "SXUX3UcOeixx2LnHz8pA",
                            "location": {
                                "x": 27,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "SXUX3UcOeixx2LnHz8pA",
                            "location": {
                                "x": 27,
                                "y": 7
                            },
                            "type": "pawn_b",
                            "selected": false
                        }
                    ],
                    [
                        {
                            "owner": "kLDp6sNZ06x1xHCPYEi1",
                            "location": {
                                "x": 28,
                                "y": 0
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "owner": "kLDp6sNZ06x1xHCPYEi1",
                            "location": {
                                "x": 28,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 28,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 28,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 28,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 28,
                                "y": 5
                            }
                        },
                        {
                            "owner": "SXUX3UcOeixx2LnHz8pA",
                            "location": {
                                "x": 28,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "SXUX3UcOeixx2LnHz8pA",
                            "location": {
                                "x": 28,
                                "y": 7
                            },
                            "type": "pawn_b",
                            "selected": false
                        }
                    ],
                    [
                        {
                            "owner": "kLDp6sNZ06x1xHCPYEi1",
                            "location": {
                                "x": 29,
                                "y": 0
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "owner": "kLDp6sNZ06x1xHCPYEi1",
                            "location": {
                                "x": 29,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 29,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 29,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 29,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 29,
                                "y": 5
                            }
                        },
                        {
                            "owner": "SXUX3UcOeixx2LnHz8pA",
                            "location": {
                                "x": 29,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "SXUX3UcOeixx2LnHz8pA",
                            "location": {
                                "x": 29,
                                "y": 7
                            },
                            "type": "pawn_b",
                            "selected": false
                        }
                    ],
                    [
                        {
                            "owner": "kLDp6sNZ06x1xHCPYEi1",
                            "location": {
                                "x": 30,
                                "y": 0
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "owner": "kLDp6sNZ06x1xHCPYEi1",
                            "location": {
                                "x": 30,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 30,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 30,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 30,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 30,
                                "y": 5
                            }
                        },
                        {
                            "owner": "SXUX3UcOeixx2LnHz8pA",
                            "location": {
                                "x": 30,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "SXUX3UcOeixx2LnHz8pA",
                            "location": {
                                "x": 30,
                                "y": 7
                            },
                            "type": "pawn_b",
                            "selected": false
                        }
                    ],
                    [
                        {
                            "owner": "kLDp6sNZ06x1xHCPYEi1",
                            "location": {
                                "x": 31,
                                "y": 0
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "owner": "kLDp6sNZ06x1xHCPYEi1",
                            "location": {
                                "x": 31,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 31,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 31,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 31,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 31,
                                "y": 5
                            }
                        },
                        {
                            "owner": "SXUX3UcOeixx2LnHz8pA",
                            "location": {
                                "x": 31,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "SXUX3UcOeixx2LnHz8pA",
                            "location": {
                                "x": 31,
                                "y": 7
                            },
                            "type": "pawn_b",
                            "selected": false
                        }
                    ],
                    [
                        {
                            "owner": "SXUX3UcOeixx2LnHz8pA",
                            "location": {
                                "x": 32,
                                "y": 0
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "owner": "SXUX3UcOeixx2LnHz8pA",
                            "location": {
                                "x": 32,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 32,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 32,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 32,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 32,
                                "y": 5
                            }
                        },
                        {
                            "owner": "9aOXqxJmYKuckwsVdX3L",
                            "location": {
                                "x": 32,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "9aOXqxJmYKuckwsVdX3L",
                            "location": {
                                "x": 32,
                                "y": 7
                            },
                            "type": "pawn_b",
                            "selected": false
                        }
                    ],
                    [
                        {
                            "owner": "SXUX3UcOeixx2LnHz8pA",
                            "location": {
                                "x": 33,
                                "y": 0
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "owner": "SXUX3UcOeixx2LnHz8pA",
                            "location": {
                                "x": 33,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 33,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 33,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 33,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 33,
                                "y": 5
                            }
                        },
                        {
                            "owner": "9aOXqxJmYKuckwsVdX3L",
                            "location": {
                                "x": 33,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "9aOXqxJmYKuckwsVdX3L",
                            "location": {
                                "x": 33,
                                "y": 7
                            },
                            "type": "pawn_b",
                            "selected": false
                        }
                    ],
                    [
                        {
                            "owner": "SXUX3UcOeixx2LnHz8pA",
                            "location": {
                                "x": 34,
                                "y": 0
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "owner": "SXUX3UcOeixx2LnHz8pA",
                            "location": {
                                "x": 34,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 34,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 34,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 34,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 34,
                                "y": 5
                            }
                        },
                        {
                            "owner": "9aOXqxJmYKuckwsVdX3L",
                            "location": {
                                "x": 34,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "9aOXqxJmYKuckwsVdX3L",
                            "location": {
                                "x": 34,
                                "y": 7
                            },
                            "type": "pawn_b",
                            "selected": false
                        }
                    ],
                    [
                        {
                            "owner": "SXUX3UcOeixx2LnHz8pA",
                            "location": {
                                "x": 35,
                                "y": 0
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "owner": "SXUX3UcOeixx2LnHz8pA",
                            "location": {
                                "x": 35,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 35,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 35,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 35,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 35,
                                "y": 5
                            }
                        },
                        {
                            "owner": "9aOXqxJmYKuckwsVdX3L",
                            "location": {
                                "x": 35,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "9aOXqxJmYKuckwsVdX3L",
                            "location": {
                                "x": 35,
                                "y": 7
                            },
                            "type": "pawn_b",
                            "selected": false
                        }
                    ],
                    [
                        {
                            "owner": "SXUX3UcOeixx2LnHz8pA",
                            "location": {
                                "x": 36,
                                "y": 0
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "owner": "SXUX3UcOeixx2LnHz8pA",
                            "location": {
                                "x": 36,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 36,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 36,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 36,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 36,
                                "y": 5
                            }
                        },
                        {
                            "owner": "9aOXqxJmYKuckwsVdX3L",
                            "location": {
                                "x": 36,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "9aOXqxJmYKuckwsVdX3L",
                            "location": {
                                "x": 36,
                                "y": 7
                            },
                            "type": "pawn_b",
                            "selected": false
                        }
                    ],
                    [
                        {
                            "owner": "SXUX3UcOeixx2LnHz8pA",
                            "location": {
                                "x": 37,
                                "y": 0
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "owner": "SXUX3UcOeixx2LnHz8pA",
                            "location": {
                                "x": 37,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 37,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 37,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 37,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 37,
                                "y": 5
                            }
                        },
                        {
                            "owner": "9aOXqxJmYKuckwsVdX3L",
                            "location": {
                                "x": 37,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "9aOXqxJmYKuckwsVdX3L",
                            "location": {
                                "x": 37,
                                "y": 7
                            },
                            "type": "pawn_b",
                            "selected": false
                        }
                    ],
                    [
                        {
                            "owner": "SXUX3UcOeixx2LnHz8pA",
                            "location": {
                                "x": 38,
                                "y": 0
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "owner": "SXUX3UcOeixx2LnHz8pA",
                            "location": {
                                "x": 38,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 38,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 38,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 38,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 38,
                                "y": 5
                            }
                        },
                        {
                            "owner": "9aOXqxJmYKuckwsVdX3L",
                            "location": {
                                "x": 38,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "9aOXqxJmYKuckwsVdX3L",
                            "location": {
                                "x": 38,
                                "y": 7
                            },
                            "type": "pawn_b",
                            "selected": false
                        }
                    ],
                    [
                        {
                            "owner": "SXUX3UcOeixx2LnHz8pA",
                            "location": {
                                "x": 39,
                                "y": 0
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "owner": "SXUX3UcOeixx2LnHz8pA",
                            "location": {
                                "x": 39,
                                "y": 1
                            },
                            "type": "pawn_w",
                            "selected": false
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 39,
                                "y": 2
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 39,
                                "y": 3
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 39,
                                "y": 4
                            }
                        },
                        {
                            "type": null,
                            "slected": false,
                            "location": {
                                "x": 39,
                                "y": 5
                            }
                        },
                        {
                            "owner": "9aOXqxJmYKuckwsVdX3L",
                            "location": {
                                "x": 39,
                                "y": 6
                            },
                            "type": "pawn_b",
                            "selected": false
                        },
                        {
                            "owner": "9aOXqxJmYKuckwsVdX3L",
                            "location": {
                                "x": 39,
                                "y": 7
                            },
                            "type": "pawn_b",
                            "selected": false
                        }
                    ]
                ],
            },
            selectedSquare: {
                x: -1,
                y: -1
            },
            highlightedSquares: [

            ],
        }
        this.resize = this.resize.bind(this);
        this.update = this.update.bind(this);
        this.getMoves = this.getMoves.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    getMoves(pieceLocation) {
        console.log(pieceLocation);
        let board = this.state.game.board;
        let players = this.state.game.players
        let piece = board[pieceLocation.x][pieceLocation.y];
        let possibleMoves = [];
        //console.log(piece.owner);
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
                {
                    type: "CUSTOM",
                    direction: {
                        x: 1,
                        y: 2
                    },
                    takeable: false,
                    onlyOnTake: false,
                    jumpable: false,
                    firstMoveOnly: true

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
                },
                {
                    type: "CUSTOM",
                    direction: {
                        x: 1,
                        y: -2
                    },
                    takeable: false,
                    onlyOnTake: false,
                    jumpable: false,
                    firstMoveOnly: true

                },
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
                {
                    type: "CUSTOM",
                    direction: {
                        x: 1,
                        y: 1
                    },
                    onlyOnTake: false,
                    takeable: true,
                    jumpable: false,
                },
            ],
            knight_b: [
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
            queen_b: [
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
            king_b: [
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
                {
                    type: "CUSTOM",
                    direction: {
                        x: 1,
                        y: 1
                    },
                    onlyOnTake: false,
                    takeable: true,
                    jumpable: false,
                },
            ]
        }
        console.log(piece.owner.playerId, this.props.app.playerId);
        if (piece.owner.playerId === this.props.app.playerId) {
            if (moveTemplate[piece.type] !== undefined) {
                //console.log("this piece's moves are defined");
                let pieceTemplate = moveTemplate[piece.type];
                pieceTemplate.forEach(moveSet => {
                    //console.log(moveSet);
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
                            // console.log(error);
                            // console.log("move outside board boundaries")
                        }
                    }
                    else if (moveSet.type === "CONTINUOUS") {
                        //console.log("here at least");
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
                                    //console.log(moveSquare.type);
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
                                    else {
                                        break;
                                    }
                                }
                            }
                            catch {
                                //console.log("Square Outside Boundaries of the board");
                                break;
                            }
                            attempt++;
                        }
                    }
                    else {
                        console.log("Here");
                        console.log(piece.type);
                        if (piece.type === "pawn_w") {
                            if (piece.firstMove !== false) {
                                if (board[piece.location.x][piece.location.y + 1].type === null && board[piece.location.x][piece.location.y + 2].type === null) {
                                    possibleMoves.push({
                                        x: piece.location.x,
                                        y: piece.location.y + 2
                                    });
                                }
                            }
                        }
                        else if (piece.type === "pawn_b") {
                            if (piece.firstMove !== false) {
                                if (board[piece.location.x][piece.location.y - 1].type === null && board[piece.location.x][piece.location.y - 2].type === null) {
                                    possibleMoves.push({
                                        x: piece.location.x,
                                        y: piece.location.y - 2
                                    });
                                }
                            }
                        }
                        else if (piece.type === "king_w") {
                            if (piece.firstMove !== false) {
                                if (board[piece.location.x - 1][piece.location.y].type === null && board[piece.location.x - 2][piece.location.y].type === null) {
                                    possibleMoves.push({
                                        x: piece.location.x - 2,
                                        y: piece.location.y,
                                        customScript: (state) => {
                                            let board = state.game.board;
                                            let pieceLocation = {
                                                x: state.selectedSquare.x - 3,
                                                y: state.selectedSquare.y
                                            }
                                            let piece = board[pieceLocation.x][pieceLocation.y];
                                            piece.location = {
                                                x: state.selectedSquare.x - 1,
                                                y: state.selectedSquare.y
                                            };
                                            board[pieceLocation.x][pieceLocation.y] = {
                                                type: null,
                                                location: pieceLocation
                                            }
                                            piece.firstMove = false;
                                            board[state.selectedSquare.x - 1][state.selectedSquare.y] = piece;
                                            return board;
                                        }
                                    });
                                }
                                if (board[piece.location.x + 1][piece.location.y].type === null && board[piece.location.x + 2][piece.location.y].type === null && board[piece.location.x + 3][piece.location.y].type === null) {
                                    possibleMoves.push({
                                        x: piece.location.x + 2,
                                        y: piece.location.y,
                                        customScript: (state) => {
                                            let board = state.game.board;
                                            let pieceLocation = {
                                                x: state.selectedSquare.x + 4,
                                                y: state.selectedSquare.y
                                            }
                                            let piece = board[pieceLocation.x][pieceLocation.y];
                                            piece.location = {
                                                x: state.selectedSquare.x + 1,
                                                y: state.selectedSquare.y
                                            };
                                            board[pieceLocation.x][pieceLocation.y] = {
                                                type: null,
                                                location: pieceLocation
                                            }
                                            piece.firstMove = false;
                                            board[state.selectedSquare.x + 1][state.selectedSquare.y] = piece;
                                            return board;
                                        }
                                    });
                                }
                            }
                        }
                        else if (piece.type === "king_b") {
                            if (piece.firstMove !== false) {
                                if (board[piece.location.x - 1][piece.location.y].type === null && board[piece.location.x - 2][piece.location.y].type === null) {
                                    possibleMoves.push({
                                        x: piece.location.x - 2,
                                        y: piece.location.y,
                                        customScript: (state) => {
                                            let board = state.game.board;
                                            let pieceLocation = {
                                                x: state.selectedSquare.x - 3,
                                                y: state.selectedSquare.y
                                            }
                                            let piece = board[pieceLocation.x][pieceLocation.y];
                                            piece.location = {
                                                x: state.selectedSquare.x - 1,
                                                y: state.selectedSquare.y
                                            };
                                            board[pieceLocation.x][pieceLocation.y] = {
                                                type: null,
                                                location: pieceLocation
                                            }
                                            piece.firstMove = false;
                                            board[state.selectedSquare.x - 1][state.selectedSquare.y] = piece;
                                            return board;
                                        }
                                    });
                                }
                                if (board[piece.location.x + 1][piece.location.y].type === null && board[piece.location.x + 2][piece.location.y].type === null && board[piece.location.x + 3][piece.location.y].type === null) {
                                    possibleMoves.push({
                                        x: piece.location.x + 2,
                                        y: piece.location.y,
                                        customScript: (state) => {
                                            let board = state.game.board;
                                            let pieceLocation = {
                                                x: state.selectedSquare.x + 4,
                                                y: state.selectedSquare.y
                                            }
                                            let piece = board[pieceLocation.x][pieceLocation.y];
                                            piece.location = {
                                                x: state.selectedSquare.x + 1,
                                                y: state.selectedSquare.y
                                            };
                                            board[pieceLocation.x][pieceLocation.y] = {
                                                type: null,
                                                location: pieceLocation
                                            }
                                            piece.firstMove = false;
                                            board[state.selectedSquare.x + 1][state.selectedSquare.y] = piece;
                                            return board;
                                        }
                                    });
                                }
                            }
                        }
                    }
                })
            }
        }
        return possibleMoves;
    }

    componentDidMount() {
        window.addEventListener('resize', this.resize);
        this.setState({
            ...this.state,
        }, () => {
            this.resize();
        })
        setInterval(e => {
            this.update()
        },
            1000
        )
    }

    render() {
        let html = null;
        console.log(this.props.app.flippedState)
        //console.log(this.props.app.game);
        //console.log(this.state.game);
        if (this.state.game.move >= this.props.app.game.move && this.state.game.gameId === this.props.app.game.gameId) {
            let params = {}

            if (this.state.dimensions.height !== null) {
                let colour = "WHITE";
                let board = []
                for (const file of this.state.game.board) {
                    let fileArr = [];
                    for (const square of file) {
                        if (square !== null) {
                            params = {
                                ...this.state,
                                handleClick: this.handleClick,
                                squareSize: Math.floor((this.state.dimensions.height - 80) / 8),
                                colour: colour,
                                ...square,
                            }
                        }
                        else {
                            params = {
                                ...this.state,
                                handleClick: this.handleClick,
                                squareSize: Math.floor(this.state.dimensions.height / 8),
                                colour: colour,
                                type: null,
                                selected: false,
                                ...square
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
                    if (this.props.app.flippedState === -1) {
                        fileArr = fileArr.reverse();
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
                if (this.props.app.flippedState === -1) {
                    board = board.reverse();
                }

                //Generating Board Lables 
                if (this.state.game.players !== null) {
                    let whiteLables = [];
                    let blackLables = [];
                    let style = {
                        width: (this.state.dimensions.height - 84) + 'px',
                        height: 40 + 'px'
                    }
                    console.log(this.state.game.players)
                    let players = Object.values(this.state.game.players);
                    for (let player = 0; player < players.length; player++) {

                        if (player % 2 === 0) {
                            whiteLables.push(
                                <td>
                                    <div className={styles.whiteLable} style={style}>
                                        <p>{this.state.game.players[`Player_${player}`].username}</p>
                                    </div>
                                </td>
                            )
                        }
                        else {
                            blackLables.push(
                                <td>
                                    <div className={styles.blackLable} style={style}>
                                        <p>{this.state.game.players[`Player_${player}`].username}</p>
                                    </div>
                                </td>
                            )
                        }

                    }
                    if (this.props.app.flippedState === 1) {
                        html = (
                            <div className={styles.Board} id="Board">
                                <tr>{whiteLables}</tr>
                                {board}
                                <tr>{blackLables}</tr>
                            </div>
                        )
                    }
                    else {
                        html = (
                            <div className={styles.Board} id="Board">
                                <tr>{blackLables.reverse()}</tr>
                                {board}
                                <tr>{whiteLables.reverse()}</tr>
                            </div>
                        )
                    }

                }
                else {
                    html = (
                        <div className={styles.Board} id="Board">

                            {board}

                        </div>
                    )
                }

            }
            else {
                html = (
                    <div className={styles.Board} id="Board">
                    </div>
                )
            }
        }
        else {
            this.setState({
                ...this.state,
                game: {
                    ...this.props.app.game
                },
            })
        }
        return html;
    }

    resize() {
        let div = document.getElementById("Board");
        if (div !== undefined) {
            this.setState({
                ...this.state,
                dimensions: {
                    width: div.clientWidth,
                    height: div.clientHeight,
                }
            })
        }
    }

    update() {
        if (this.props.app.gameId != undefined) {
            let params = {
                token: this.props.app.token,
                playerId: this.props.app.playerId,
                username: this.props.app.username,
                gameId: this.props.app.gameId
            }

            getMove(params)
                .then(response => {
                    let payload = {
                        game: response.game
                    }
                    this.props.setBoard(payload);
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }

    handleClick(square) {
        //need to put the logic for the pieces here.

        console.log(square);

        if ((this.state.selectedSquare.x === square.location.x) && (this.state.selectedSquare.y === square.location.y)) {
            console.log("This piece is seleceted");
            let location = {
                x: -1,
                y: -1
            }
            this.setState({
                ...this.state,
                selectedSquare: location,
                highlightedSquares: [],
            });
        } else {
            let isHighlighted = false;
            this.state.highlightedSquares.forEach(highlighted => {
                if ((highlighted.x === square.location.x) && (highlighted.y === square.location.y)) {
                    //have to implement move piece here code.
                    let board = this.state.game.board;
                    if (highlighted.customScript !== undefined) {
                        //i.e there is something else that needs to happen to the board first. 
                        board = highlighted.customScript(this.state);
                    }
                    let pieceLocation = this.state.selectedSquare;
                    let piece = board[pieceLocation.x][pieceLocation.y];
                    piece.location = highlighted;
                    board[pieceLocation.x][pieceLocation.y] = {
                        type: null,
                        location: pieceLocation
                    }
                    piece.firstMove = false;
                    board[highlighted.x][highlighted.y] = piece;

                    isHighlighted = true;
                    this.setState({
                        ...this.state,
                        highlightedSquares: [],
                        selectedSquare: {
                            x: null,
                            y: null
                        },
                        game: {
                            ...this.state.game,
                            board: board,
                            move: this.state.game.move + 1,
                        }
                    }, () => {
                        //need to implement send move logic here. 
                        let params = {
                            token: this.props.app.token,
                            game: this.state.game,
                            playerId: this.props.app.playerId,
                            username: this.props.app.username,
                        }
                        if (this.props.app.playerId !== undefined && this.props.app.gameId !== undefined) {
                            console.log(params);
                            sendMove(params);
                        }
                    });
                }
            })
            if (!isHighlighted) {
                if (square.type !== null) {
                    console.log("This is a piece...");
                    //need to get potential moves of piece.
                    let potentialMoves = this.getMoves(square.location)
                    this.setState({
                        ...this.state,
                        highlightedSquares: potentialMoves,
                        selectedSquare: {
                            x: square.location.x,
                            y: square.location.y
                        },
                    });
                }
                else {
                    console.log("This is not a piece");
                    this.setState({
                        ...this.state,
                        selectedSquare: {
                            x: square.location.x,
                            y: square.location.y
                        },
                    });
                }
            }
        }
    }
}

//export default App;
//export default App = connect(mapStateToProps)(App);
export default connect(mapStateToProps, mapDispatchToProps)(Board);
