const mongoose = require('mongoose');

const gameDataSchema = new mongoose.Schema({
    gameID: {
        type: String,
        require: true,
    },
    connectedUsers: [
        {
            userSocketId: String,
            tableJoined: String,
        }
    ],
    tables: [
        
    ]


    // tbh5: [
    //     {
    //         tableID: String,
    //         tableCurrentRoundId: String,
    //         totalPlayerJoined: Number,
    //         bankerHistory: [
    //             {
    //                 roundId: String,
    //                 result: Number,
    //             }
    //         ],
    //     },
    //     {
    //         tableID: String,
    //         tableCurrentRoundId: String,
    //         totalPlayerJoined: Number,
    //         bankerHistory: [
    //             {
    //                 roundId: String,
    //                 result: Number,
    //             }
    //         ],
    //     },
    // ],

    // tbh10: [
    //     {
    //         tableID: String,
    //         tableCurrentRoundId: String,
    //         totalPlayerJoined: Number,
    //         bankerHistory: [
    //             {
    //                 roundId: String,
    //                 result: Number,
    //             }
    //         ],
    //     },
    //     {
    //         tableID: String,
    //         tableCurrentRoundId: String,
    //         totalPlayerJoined: Number,
    //         bankerHistory: [
    //             {
    //                 roundId: String,
    //                 result: Number,
    //             }
    //         ],
    //     },
    // ],

    // tbh20: [
    //     {
    //         tableID: String,
    //         tableCurrentRoundId: String,
    //         totalPlayerJoined: Number,
    //         bankerHistory: [
    //             {
    //                 roundId: String,
    //                 result: Number,
    //             }
    //         ],
    //     },
    //     {
    //         tableID: String,
    //         tableCurrentRoundId: String,
    //         totalPlayerJoined: Number,
    //         bankerHistory: [
    //             {
    //                 roundId: String,
    //                 result: Number,
    //             }
    //         ],
    //     },
    // ],
    

});

gameDataSchema.set('timestamps', true);

const GameData = mongoose.model('gameData', gameDataSchema);
module.exports = GameData;