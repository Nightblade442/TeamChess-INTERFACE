import { createStore } from "redux";
import appReducer from "./reducers/reducer";
import { version } from '../../package.json';
import { getPureCloudImplicitGrantClientId, getPureCloudImplicitGrantCallbackUrl, getAppOrigin } from "./constants/general";


const initialState = {
  access_token: null,
  loggedIn: false,
  page : "SIGN_UP", // MAIN, LOGIN, SIGN_UP
  playerId: null,
  game: {
    gameId: null,
    move: 0,
    players: null,
    board:  [
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
  flippedState : 1,
  clientId: getPureCloudImplicitGrantClientId(),
  callbackUrl: getPureCloudImplicitGrantCallbackUrl()
}

const store = createStore(appReducer, initialState);

export default store;