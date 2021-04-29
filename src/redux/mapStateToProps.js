const mapStateToProps = (state) => {//добавить фильтр для отображения не всех данных
    return {
        playingField: state.playingField,
        size: state.size,
        mode: state.mode,
        stateGame: state.stateGame,
        isFirstPlayer: state.isFirstPlayer,
        playerFirstSymbol: state.playerFirstSymbol,
        playerSecondSymbol: state.playerSecondSymbol,
        winCell: state.winCell,
        gameRule: state.gameRule
    }
}
export default mapStateToProps;