export const RESET_GAME = 'RESET_GAME'
export const resetGame = () => ({
    type: RESET_GAME
})

export const MAKE_GUESS = 'MAKE_GUESS'
export const makeGuess = guess => {
    const mGuess = parseInt(guess, 10)
    let validGuess = (isNaN(mGuess) === false) && (mGuess > 0 && mGuess <= 100) ? true:false
    return {
        type: MAKE_GUESS,
        guess: mGuess,
        validGuess: validGuess
    }
}

export const TOGGLE_INFO = 'TOGGLE_INFO'
export const toggleInfo = () => ({
    type: TOGGLE_INFO
})
