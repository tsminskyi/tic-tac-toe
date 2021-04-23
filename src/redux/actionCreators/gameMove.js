 const gameMove = function (id) {
    return {
        type: "GAME_MOVE",
        payload: id
    }
}

export default gameMove;