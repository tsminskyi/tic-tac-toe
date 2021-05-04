 const gameMove = function (indexObj) {
    return {
        type: "GAME_MOVE",
        payload: indexObj
    }
}

export default gameMove;