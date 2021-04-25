const mapStateToProps = (state) => {
    return {
        playingField: state.playingField,
        size: state.size,
        mode: state.mode,
        newGame: state.newGame,
        isFirstPlayer: state.isFirstPlayer,
        playerFirstSymbol: state.playerFirstSymbol,
        playerSecondSymbol: state.playerSecondSymbol
    }
}
export default mapStateToProps;