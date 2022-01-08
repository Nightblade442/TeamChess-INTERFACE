import { createStore } from "redux";
import appReducer from "./reducers/reducer";
import { version } from '../../package.json';
import { getPureCloudImplicitGrantClientId, getPureCloudImplicitGrantCallbackUrl, getAppOrigin } from "./constants/general";


const initialState = {
    access_token: null,
    loggedIn: false,
    page: "SIGN_UP", // MAIN, LOGIN, SIGN_UP
    playerId: null,
    game: {
        gameId: null,
        move: 0,
        players: {
            Player_0: { playerId: 'Kv6iNjSYvjNkxcI391Ku', username: 'fsdfasf' },
            Player_1: { playerId: 'QAbZ2EU6xumpC5ZhlEe9', username: null },
            Player_2: { playerId: 'BB1aiVCdYtsFfRnIyTjk', username: null },
            Player_3: { playerId: 'XT7Kh5xdLH8RYj59kaHM', username: null },
            Player_4: { playerId: 'KEfOcresk0ScDGnld6TJ', username: null },
            Player_5: { playerId: '8dLTN4v70A68DRL4dIqh', username: null }
        },
        board: [
            [
              {
                "location": {
                  "x": 0,
                  "y": 0
                },
                "owner": {
                  "playerId": "Kv6iNjSYvjNkxcI391Ku",
                  "username": null
                },
                "selected": false,
                "type": "rook_w"
              },
              {
                "location": {
                  "x": 0,
                  "y": 1
                },
                "owner": {
                  "playerId": "Kv6iNjSYvjNkxcI391Ku",
                  "username": null
                },
                "selected": false,
                "type": "pawn_w"
              },
              {
                "location": {
                  "x": 0,
                  "y": 2
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 0,
                  "y": 3
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 0,
                  "y": 4
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 0,
                  "y": 5
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 0,
                  "y": 6
                },
                "owner": {
                  "playerId": "QAbZ2EU6xumpC5ZhlEe9",
                  "username": null
                },
                "selected": false,
                "type": "pawn_b"
              },
              {
                "location": {
                  "x": 0,
                  "y": 7
                },
                "owner": {
                  "playerId": "QAbZ2EU6xumpC5ZhlEe9",
                  "username": null
                },
                "selected": false,
                "type": "rook_b"
              }
            ],
            [
              {
                "location": {
                  "x": 1,
                  "y": 0
                },
                "owner": {
                  "playerId": "Kv6iNjSYvjNkxcI391Ku",
                  "username": null
                },
                "selected": false,
                "type": "knight_w"
              },
              {
                "location": {
                  "x": 1,
                  "y": 1
                },
                "owner": {
                  "playerId": "Kv6iNjSYvjNkxcI391Ku",
                  "username": null
                },
                "selected": false,
                "type": "pawn_w"
              },
              {
                "location": {
                  "x": 1,
                  "y": 2
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 1,
                  "y": 3
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 1,
                  "y": 4
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 1,
                  "y": 5
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 1,
                  "y": 6
                },
                "owner": {
                  "playerId": "QAbZ2EU6xumpC5ZhlEe9",
                  "username": null
                },
                "selected": false,
                "type": "pawn_b"
              },
              {
                "location": {
                  "x": 1,
                  "y": 7
                },
                "owner": {
                  "playerId": "QAbZ2EU6xumpC5ZhlEe9",
                  "username": null
                },
                "selected": false,
                "type": "knight_b"
              }
            ],
            [
              {
                "location": {
                  "x": 2,
                  "y": 0
                },
                "owner": {
                  "playerId": "Kv6iNjSYvjNkxcI391Ku",
                  "username": null
                },
                "selected": false,
                "type": "bishop_w"
              },
              {
                "location": {
                  "x": 2,
                  "y": 1
                },
                "owner": {
                  "playerId": "Kv6iNjSYvjNkxcI391Ku",
                  "username": null
                },
                "selected": false,
                "type": "pawn_w"
              },
              {
                "location": {
                  "x": 2,
                  "y": 2
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 2,
                  "y": 3
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 2,
                  "y": 4
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 2,
                  "y": 5
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 2,
                  "y": 6
                },
                "owner": {
                  "playerId": "QAbZ2EU6xumpC5ZhlEe9",
                  "username": null
                },
                "selected": false,
                "type": "pawn_b"
              },
              {
                "location": {
                  "x": 2,
                  "y": 7
                },
                "owner": {
                  "playerId": "QAbZ2EU6xumpC5ZhlEe9",
                  "username": null
                },
                "selected": false,
                "type": "bishop_b"
              }
            ],
            [
              {
                "location": {
                  "x": 3,
                  "y": 0
                },
                "owner": {
                  "playerId": "Kv6iNjSYvjNkxcI391Ku",
                  "username": null
                },
                "selected": false,
                "type": "king_w"
              },
              {
                "location": {
                  "x": 3,
                  "y": 1
                },
                "owner": {
                  "playerId": "Kv6iNjSYvjNkxcI391Ku",
                  "username": null
                },
                "selected": false,
                "type": "pawn_w"
              },
              {
                "location": {
                  "x": 3,
                  "y": 2
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 3,
                  "y": 3
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 3,
                  "y": 4
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 3,
                  "y": 5
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 3,
                  "y": 6
                },
                "owner": {
                  "playerId": "QAbZ2EU6xumpC5ZhlEe9",
                  "username": null
                },
                "selected": false,
                "type": "pawn_b"
              },
              {
                "location": {
                  "x": 3,
                  "y": 7
                },
                "owner": {
                  "playerId": "QAbZ2EU6xumpC5ZhlEe9",
                  "username": null
                },
                "selected": false,
                "type": "king_b"
              }
            ],
            [
              {
                "location": {
                  "x": 4,
                  "y": 0
                },
                "owner": {
                  "playerId": "Kv6iNjSYvjNkxcI391Ku",
                  "username": null
                },
                "selected": false,
                "type": "queen_w"
              },
              {
                "location": {
                  "x": 4,
                  "y": 1
                },
                "owner": {
                  "playerId": "Kv6iNjSYvjNkxcI391Ku",
                  "username": null
                },
                "selected": false,
                "type": "pawn_w"
              },
              {
                "location": {
                  "x": 4,
                  "y": 2
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 4,
                  "y": 3
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 4,
                  "y": 4
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 4,
                  "y": 5
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 4,
                  "y": 6
                },
                "owner": {
                  "playerId": "QAbZ2EU6xumpC5ZhlEe9",
                  "username": null
                },
                "selected": false,
                "type": "pawn_b"
              },
              {
                "location": {
                  "x": 4,
                  "y": 7
                },
                "owner": {
                  "playerId": "QAbZ2EU6xumpC5ZhlEe9",
                  "username": null
                },
                "selected": false,
                "type": "queen_b"
              }
            ],
            [
              {
                "location": {
                  "x": 5,
                  "y": 0
                },
                "owner": {
                  "playerId": "Kv6iNjSYvjNkxcI391Ku",
                  "username": null
                },
                "selected": false,
                "type": "bishop_w"
              },
              {
                "location": {
                  "x": 5,
                  "y": 1
                },
                "owner": {
                  "playerId": "Kv6iNjSYvjNkxcI391Ku",
                  "username": null
                },
                "selected": false,
                "type": "pawn_w"
              },
              {
                "location": {
                  "x": 5,
                  "y": 2
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 5,
                  "y": 3
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 5,
                  "y": 4
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 5,
                  "y": 5
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 5,
                  "y": 6
                },
                "owner": {
                  "playerId": "QAbZ2EU6xumpC5ZhlEe9",
                  "username": null
                },
                "selected": false,
                "type": "pawn_b"
              },
              {
                "location": {
                  "x": 5,
                  "y": 7
                },
                "owner": {
                  "playerId": "QAbZ2EU6xumpC5ZhlEe9",
                  "username": null
                },
                "selected": false,
                "type": "bishop_b"
              }
            ],
            [
              {
                "location": {
                  "x": 6,
                  "y": 0
                },
                "owner": {
                  "playerId": "Kv6iNjSYvjNkxcI391Ku",
                  "username": null
                },
                "selected": false,
                "type": "knight_w"
              },
              {
                "location": {
                  "x": 6,
                  "y": 1
                },
                "owner": {
                  "playerId": "Kv6iNjSYvjNkxcI391Ku",
                  "username": null
                },
                "selected": false,
                "type": "pawn_w"
              },
              {
                "location": {
                  "x": 6,
                  "y": 2
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 6,
                  "y": 3
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 6,
                  "y": 4
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 6,
                  "y": 5
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 6,
                  "y": 6
                },
                "owner": {
                  "playerId": "QAbZ2EU6xumpC5ZhlEe9",
                  "username": null
                },
                "selected": false,
                "type": "pawn_b"
              },
              {
                "location": {
                  "x": 6,
                  "y": 7
                },
                "owner": {
                  "playerId": "QAbZ2EU6xumpC5ZhlEe9",
                  "username": null
                },
                "selected": false,
                "type": "knight_b"
              }
            ],
            [
              {
                "location": {
                  "x": 7,
                  "y": 0
                },
                "owner": {
                  "playerId": "Kv6iNjSYvjNkxcI391Ku",
                  "username": null
                },
                "selected": false,
                "type": "rook_w"
              },
              {
                "location": {
                  "x": 7,
                  "y": 1
                },
                "owner": {
                  "playerId": "Kv6iNjSYvjNkxcI391Ku",
                  "username": null
                },
                "selected": false,
                "type": "pawn_w"
              },
              {
                "location": {
                  "x": 7,
                  "y": 2
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 7,
                  "y": 3
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 7,
                  "y": 4
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 7,
                  "y": 5
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 7,
                  "y": 6
                },
                "owner": {
                  "playerId": "QAbZ2EU6xumpC5ZhlEe9",
                  "username": null
                },
                "selected": false,
                "type": "pawn_b"
              },
              {
                "location": {
                  "x": 7,
                  "y": 7
                },
                "owner": {
                  "playerId": "QAbZ2EU6xumpC5ZhlEe9",
                  "username": null
                },
                "selected": false,
                "type": "rook_b"
              }
            ],
            [
              {
                "location": {
                  "x": 8,
                  "y": 0
                },
                "owner": {
                  "playerId": "BB1aiVCdYtsFfRnIyTjk",
                  "username": null
                },
                "selected": false,
                "type": "rook_w"
              },
              {
                "location": {
                  "x": 8,
                  "y": 1
                },
                "owner": {
                  "playerId": "BB1aiVCdYtsFfRnIyTjk",
                  "username": null
                },
                "selected": false,
                "type": "pawn_w"
              },
              {
                "location": {
                  "x": 8,
                  "y": 2
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 8,
                  "y": 3
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 8,
                  "y": 4
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 8,
                  "y": 5
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 8,
                  "y": 6
                },
                "owner": {
                  "playerId": "XT7Kh5xdLH8RYj59kaHM",
                  "username": null
                },
                "selected": false,
                "type": "pawn_b"
              },
              {
                "location": {
                  "x": 8,
                  "y": 7
                },
                "owner": {
                  "playerId": "XT7Kh5xdLH8RYj59kaHM",
                  "username": null
                },
                "selected": false,
                "type": "rook_b"
              }
            ],
            [
              {
                "location": {
                  "x": 9,
                  "y": 0
                },
                "owner": {
                  "playerId": "BB1aiVCdYtsFfRnIyTjk",
                  "username": null
                },
                "selected": false,
                "type": "knight_w"
              },
              {
                "location": {
                  "x": 9,
                  "y": 1
                },
                "owner": {
                  "playerId": "BB1aiVCdYtsFfRnIyTjk",
                  "username": null
                },
                "selected": false,
                "type": "pawn_w"
              },
              {
                "location": {
                  "x": 9,
                  "y": 2
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 9,
                  "y": 3
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 9,
                  "y": 4
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 9,
                  "y": 5
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 9,
                  "y": 6
                },
                "owner": {
                  "playerId": "XT7Kh5xdLH8RYj59kaHM",
                  "username": null
                },
                "selected": false,
                "type": "pawn_b"
              },
              {
                "location": {
                  "x": 9,
                  "y": 7
                },
                "owner": {
                  "playerId": "XT7Kh5xdLH8RYj59kaHM",
                  "username": null
                },
                "selected": false,
                "type": "knight_b"
              }
            ],
            [
              {
                "location": {
                  "x": 10,
                  "y": 0
                },
                "owner": {
                  "playerId": "BB1aiVCdYtsFfRnIyTjk",
                  "username": null
                },
                "selected": false,
                "type": "bishop_w"
              },
              {
                "location": {
                  "x": 10,
                  "y": 1
                },
                "owner": {
                  "playerId": "BB1aiVCdYtsFfRnIyTjk",
                  "username": null
                },
                "selected": false,
                "type": "pawn_w"
              },
              {
                "location": {
                  "x": 10,
                  "y": 2
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 10,
                  "y": 3
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 10,
                  "y": 4
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 10,
                  "y": 5
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 10,
                  "y": 6
                },
                "owner": {
                  "playerId": "XT7Kh5xdLH8RYj59kaHM",
                  "username": null
                },
                "selected": false,
                "type": "pawn_b"
              },
              {
                "location": {
                  "x": 10,
                  "y": 7
                },
                "owner": {
                  "playerId": "XT7Kh5xdLH8RYj59kaHM",
                  "username": null
                },
                "selected": false,
                "type": "bishop_b"
              }
            ],
            [
              {
                "location": {
                  "x": 11,
                  "y": 0
                },
                "owner": {
                  "playerId": "BB1aiVCdYtsFfRnIyTjk",
                  "username": null
                },
                "selected": false,
                "type": "king_w"
              },
              {
                "location": {
                  "x": 11,
                  "y": 1
                },
                "owner": {
                  "playerId": "BB1aiVCdYtsFfRnIyTjk",
                  "username": null
                },
                "selected": false,
                "type": "pawn_w"
              },
              {
                "location": {
                  "x": 11,
                  "y": 2
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 11,
                  "y": 3
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 11,
                  "y": 4
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 11,
                  "y": 5
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 11,
                  "y": 6
                },
                "owner": {
                  "playerId": "XT7Kh5xdLH8RYj59kaHM",
                  "username": null
                },
                "selected": false,
                "type": "pawn_b"
              },
              {
                "location": {
                  "x": 11,
                  "y": 7
                },
                "owner": {
                  "playerId": "XT7Kh5xdLH8RYj59kaHM",
                  "username": null
                },
                "selected": false,
                "type": "king_b"
              }
            ],
            [
              {
                "location": {
                  "x": 12,
                  "y": 0
                },
                "owner": {
                  "playerId": "BB1aiVCdYtsFfRnIyTjk",
                  "username": null
                },
                "selected": false,
                "type": "queen_w"
              },
              {
                "location": {
                  "x": 12,
                  "y": 1
                },
                "owner": {
                  "playerId": "BB1aiVCdYtsFfRnIyTjk",
                  "username": null
                },
                "selected": false,
                "type": "pawn_w"
              },
              {
                "location": {
                  "x": 12,
                  "y": 2
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 12,
                  "y": 3
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 12,
                  "y": 4
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 12,
                  "y": 5
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 12,
                  "y": 6
                },
                "owner": {
                  "playerId": "XT7Kh5xdLH8RYj59kaHM",
                  "username": null
                },
                "selected": false,
                "type": "pawn_b"
              },
              {
                "location": {
                  "x": 12,
                  "y": 7
                },
                "owner": {
                  "playerId": "XT7Kh5xdLH8RYj59kaHM",
                  "username": null
                },
                "selected": false,
                "type": "queen_b"
              }
            ],
            [
              {
                "location": {
                  "x": 13,
                  "y": 0
                },
                "owner": {
                  "playerId": "BB1aiVCdYtsFfRnIyTjk",
                  "username": null
                },
                "selected": false,
                "type": "bishop_w"
              },
              {
                "location": {
                  "x": 13,
                  "y": 1
                },
                "owner": {
                  "playerId": "BB1aiVCdYtsFfRnIyTjk",
                  "username": null
                },
                "selected": false,
                "type": "pawn_w"
              },
              {
                "location": {
                  "x": 13,
                  "y": 2
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 13,
                  "y": 3
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 13,
                  "y": 4
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 13,
                  "y": 5
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 13,
                  "y": 6
                },
                "owner": {
                  "playerId": "XT7Kh5xdLH8RYj59kaHM",
                  "username": null
                },
                "selected": false,
                "type": "pawn_b"
              },
              {
                "location": {
                  "x": 13,
                  "y": 7
                },
                "owner": {
                  "playerId": "XT7Kh5xdLH8RYj59kaHM",
                  "username": null
                },
                "selected": false,
                "type": "bishop_b"
              }
            ],
            [
              {
                "location": {
                  "x": 14,
                  "y": 0
                },
                "owner": {
                  "playerId": "BB1aiVCdYtsFfRnIyTjk",
                  "username": null
                },
                "selected": false,
                "type": "knight_w"
              },
              {
                "location": {
                  "x": 14,
                  "y": 1
                },
                "owner": {
                  "playerId": "BB1aiVCdYtsFfRnIyTjk",
                  "username": null
                },
                "selected": false,
                "type": "pawn_w"
              },
              {
                "location": {
                  "x": 14,
                  "y": 2
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 14,
                  "y": 3
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 14,
                  "y": 4
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 14,
                  "y": 5
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 14,
                  "y": 6
                },
                "owner": {
                  "playerId": "XT7Kh5xdLH8RYj59kaHM",
                  "username": null
                },
                "selected": false,
                "type": "pawn_b"
              },
              {
                "location": {
                  "x": 14,
                  "y": 7
                },
                "owner": {
                  "playerId": "XT7Kh5xdLH8RYj59kaHM",
                  "username": null
                },
                "selected": false,
                "type": "knight_b"
              }
            ],
            [
              {
                "location": {
                  "x": 15,
                  "y": 0
                },
                "owner": {
                  "playerId": "BB1aiVCdYtsFfRnIyTjk",
                  "username": null
                },
                "selected": false,
                "type": "rook_w"
              },
              {
                "location": {
                  "x": 15,
                  "y": 1
                },
                "owner": {
                  "playerId": "BB1aiVCdYtsFfRnIyTjk",
                  "username": null
                },
                "selected": false,
                "type": "pawn_w"
              },
              {
                "location": {
                  "x": 15,
                  "y": 2
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 15,
                  "y": 3
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 15,
                  "y": 4
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 15,
                  "y": 5
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 15,
                  "y": 6
                },
                "owner": {
                  "playerId": "XT7Kh5xdLH8RYj59kaHM",
                  "username": null
                },
                "selected": false,
                "type": "pawn_b"
              },
              {
                "location": {
                  "x": 15,
                  "y": 7
                },
                "owner": {
                  "playerId": "XT7Kh5xdLH8RYj59kaHM",
                  "username": null
                },
                "selected": false,
                "type": "rook_b"
              }
            ],
            [
              {
                "location": {
                  "x": 16,
                  "y": 0
                },
                "owner": {
                  "playerId": "KEfOcresk0ScDGnld6TJ",
                  "username": null
                },
                "selected": false,
                "type": "rook_w"
              },
              {
                "location": {
                  "x": 16,
                  "y": 1
                },
                "owner": {
                  "playerId": "KEfOcresk0ScDGnld6TJ",
                  "username": null
                },
                "selected": false,
                "type": "pawn_w"
              },
              {
                "location": {
                  "x": 16,
                  "y": 2
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 16,
                  "y": 3
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 16,
                  "y": 4
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 16,
                  "y": 5
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 16,
                  "y": 6
                },
                "owner": {
                  "playerId": "8dLTN4v70A68DRL4dIqh",
                  "username": null
                },
                "selected": false,
                "type": "pawn_b"
              },
              {
                "location": {
                  "x": 16,
                  "y": 7
                },
                "owner": {
                  "playerId": "8dLTN4v70A68DRL4dIqh",
                  "username": null
                },
                "selected": false,
                "type": "rook_b"
              }
            ],
            [
              {
                "location": {
                  "x": 17,
                  "y": 0
                },
                "owner": {
                  "playerId": "KEfOcresk0ScDGnld6TJ",
                  "username": null
                },
                "selected": false,
                "type": "knight_w"
              },
              {
                "location": {
                  "x": 17,
                  "y": 1
                },
                "owner": {
                  "playerId": "KEfOcresk0ScDGnld6TJ",
                  "username": null
                },
                "selected": false,
                "type": "pawn_w"
              },
              {
                "location": {
                  "x": 17,
                  "y": 2
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 17,
                  "y": 3
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 17,
                  "y": 4
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 17,
                  "y": 5
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 17,
                  "y": 6
                },
                "owner": {
                  "playerId": "8dLTN4v70A68DRL4dIqh",
                  "username": null
                },
                "selected": false,
                "type": "pawn_b"
              },
              {
                "location": {
                  "x": 17,
                  "y": 7
                },
                "owner": {
                  "playerId": "8dLTN4v70A68DRL4dIqh",
                  "username": null
                },
                "selected": false,
                "type": "knight_b"
              }
            ],
            [
              {
                "location": {
                  "x": 18,
                  "y": 0
                },
                "owner": {
                  "playerId": "KEfOcresk0ScDGnld6TJ",
                  "username": null
                },
                "selected": false,
                "type": "bishop_w"
              },
              {
                "location": {
                  "x": 18,
                  "y": 1
                },
                "owner": {
                  "playerId": "KEfOcresk0ScDGnld6TJ",
                  "username": null
                },
                "selected": false,
                "type": "pawn_w"
              },
              {
                "location": {
                  "x": 18,
                  "y": 2
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 18,
                  "y": 3
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 18,
                  "y": 4
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 18,
                  "y": 5
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 18,
                  "y": 6
                },
                "owner": {
                  "playerId": "8dLTN4v70A68DRL4dIqh",
                  "username": null
                },
                "selected": false,
                "type": "pawn_b"
              },
              {
                "location": {
                  "x": 18,
                  "y": 7
                },
                "owner": {
                  "playerId": "8dLTN4v70A68DRL4dIqh",
                  "username": null
                },
                "selected": false,
                "type": "bishop_b"
              }
            ],
            [
              {
                "location": {
                  "x": 19,
                  "y": 0
                },
                "owner": {
                  "playerId": "KEfOcresk0ScDGnld6TJ",
                  "username": null
                },
                "selected": false,
                "type": "king_w"
              },
              {
                "location": {
                  "x": 19,
                  "y": 1
                },
                "owner": {
                  "playerId": "KEfOcresk0ScDGnld6TJ",
                  "username": null
                },
                "selected": false,
                "type": "pawn_w"
              },
              {
                "location": {
                  "x": 19,
                  "y": 2
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 19,
                  "y": 3
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 19,
                  "y": 4
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 19,
                  "y": 5
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 19,
                  "y": 6
                },
                "owner": {
                  "playerId": "8dLTN4v70A68DRL4dIqh",
                  "username": null
                },
                "selected": false,
                "type": "pawn_b"
              },
              {
                "location": {
                  "x": 19,
                  "y": 7
                },
                "owner": {
                  "playerId": "8dLTN4v70A68DRL4dIqh",
                  "username": null
                },
                "selected": false,
                "type": "king_b"
              }
            ],
            [
              {
                "location": {
                  "x": 20,
                  "y": 0
                },
                "owner": {
                  "playerId": "KEfOcresk0ScDGnld6TJ",
                  "username": null
                },
                "selected": false,
                "type": "queen_w"
              },
              {
                "location": {
                  "x": 20,
                  "y": 1
                },
                "owner": {
                  "playerId": "KEfOcresk0ScDGnld6TJ",
                  "username": null
                },
                "selected": false,
                "type": "pawn_w"
              },
              {
                "location": {
                  "x": 20,
                  "y": 2
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 20,
                  "y": 3
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 20,
                  "y": 4
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 20,
                  "y": 5
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 20,
                  "y": 6
                },
                "owner": {
                  "playerId": "8dLTN4v70A68DRL4dIqh",
                  "username": null
                },
                "selected": false,
                "type": "pawn_b"
              },
              {
                "location": {
                  "x": 20,
                  "y": 7
                },
                "owner": {
                  "playerId": "8dLTN4v70A68DRL4dIqh",
                  "username": null
                },
                "selected": false,
                "type": "queen_b"
              }
            ],
            [
              {
                "location": {
                  "x": 21,
                  "y": 0
                },
                "owner": {
                  "playerId": "KEfOcresk0ScDGnld6TJ",
                  "username": null
                },
                "selected": false,
                "type": "bishop_w"
              },
              {
                "location": {
                  "x": 21,
                  "y": 1
                },
                "owner": {
                  "playerId": "KEfOcresk0ScDGnld6TJ",
                  "username": null
                },
                "selected": false,
                "type": "pawn_w"
              },
              {
                "location": {
                  "x": 21,
                  "y": 2
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 21,
                  "y": 3
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 21,
                  "y": 4
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 21,
                  "y": 5
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 21,
                  "y": 6
                },
                "owner": {
                  "playerId": "8dLTN4v70A68DRL4dIqh",
                  "username": null
                },
                "selected": false,
                "type": "pawn_b"
              },
              {
                "location": {
                  "x": 21,
                  "y": 7
                },
                "owner": {
                  "playerId": "8dLTN4v70A68DRL4dIqh",
                  "username": null
                },
                "selected": false,
                "type": "bishop_b"
              }
            ],
            [
              {
                "location": {
                  "x": 22,
                  "y": 0
                },
                "owner": {
                  "playerId": "KEfOcresk0ScDGnld6TJ",
                  "username": null
                },
                "selected": false,
                "type": "knight_w"
              },
              {
                "location": {
                  "x": 22,
                  "y": 1
                },
                "owner": {
                  "playerId": "KEfOcresk0ScDGnld6TJ",
                  "username": null
                },
                "selected": false,
                "type": "pawn_w"
              },
              {
                "location": {
                  "x": 22,
                  "y": 2
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 22,
                  "y": 3
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 22,
                  "y": 4
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 22,
                  "y": 5
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 22,
                  "y": 6
                },
                "owner": {
                  "playerId": "8dLTN4v70A68DRL4dIqh",
                  "username": null
                },
                "selected": false,
                "type": "pawn_b"
              },
              {
                "location": {
                  "x": 22,
                  "y": 7
                },
                "owner": {
                  "playerId": "8dLTN4v70A68DRL4dIqh",
                  "username": null
                },
                "selected": false,
                "type": "knight_b"
              }
            ],
            [
              {
                "location": {
                  "x": 23,
                  "y": 0
                },
                "owner": {
                  "playerId": "KEfOcresk0ScDGnld6TJ",
                  "username": null
                },
                "selected": false,
                "type": "rook_w"
              },
              {
                "location": {
                  "x": 23,
                  "y": 1
                },
                "owner": {
                  "playerId": "KEfOcresk0ScDGnld6TJ",
                  "username": null
                },
                "selected": false,
                "type": "pawn_w"
              },
              {
                "location": {
                  "x": 23,
                  "y": 2
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 23,
                  "y": 3
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 23,
                  "y": 4
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 23,
                  "y": 5
                },
                "slected": false,
                "type": null
              },
              {
                "location": {
                  "x": 23,
                  "y": 6
                },
                "owner": {
                  "playerId": "8dLTN4v70A68DRL4dIqh",
                  "username": null
                },
                "selected": false,
                "type": "pawn_b"
              },
              {
                "location": {
                  "x": 23,
                  "y": 7
                },
                "owner": {
                  "playerId": "8dLTN4v70A68DRL4dIqh",
                  "username": null
                },
                "selected": false,
                "type": "rook_b"
              }
            ]
          ],
    },
    flippedState: 1,
    clientId: getPureCloudImplicitGrantClientId(),
    callbackUrl: getPureCloudImplicitGrantCallbackUrl()
}

const store = createStore(appReducer, initialState);

export default store;