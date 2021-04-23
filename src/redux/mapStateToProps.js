const mapStateToProps = (state) => {
    return {
        playingField: state.playingField,
        size: state.size,
        mode: state.mode,
        newGame: state.newGame,
        isFirstPlayer: state.isFirstPlayer,
        firstSymbol: state.firstSymbol,
        secondSymbol: state.secondSymbol
    }
}
export default mapStateToProps;