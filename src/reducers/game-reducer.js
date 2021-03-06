import {RESET_GAME, MAKE_GUESS, TOGGLE_INFO} from '../actions/index'

const newState = {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.floor(Math.random()*100)+1,
    showInfo: false
}

function feedbackHelper(difference) {
    let feedback;
    if (difference >= 50) {
        feedback = 'You\'re Ice Cold...'
    }
    else if (difference >= 30) {
        feedback = 'You\'re Cold...';
    }
    else if (difference >= 10) {
        feedback = 'You\'re Warm';
    }
    else if (difference >= 1) {
        feedback = 'You\'re Hot!';
    }
    else {
        feedback = 'You got it!';
    }
    return feedback
}

export const gameReducer = (state=newState, action) => {

    switch (action.type) {
        case RESET_GAME:
            return Object.assign({}, newState, {correctAnswer: Math.floor(Math.random()*100)+1})
        case MAKE_GUESS:
            if (!action.validGuess) {
                return Object.assign({}, state, {feedback: 'Not a valid guess'})
            }
            const difference = Math.abs(action.guess - state.correctAnswer);
            return Object.assign({}, state, {
                feedback: feedbackHelper(difference),
                guesses: [...state.guesses, action.guess]
            })
        case TOGGLE_INFO:
            return {...state, showInfo: !state.showInfo}
        default:
            return state
    }
}
