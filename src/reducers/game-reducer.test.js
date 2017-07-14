import {resetGame, makeGuess} from '../actions/index'
import {gameReducer} from './game-reducer'

const oldState = {
    guesses: [1,2,3],
    feedback: 'i like pasta',
    correctAnswer: 69
}

describe('resetGame', function() {
    it('should reset the state', function() {

        const newState = gameReducer(Object.assign({},oldState), resetGame())
        expect(newState).not.toMatchObject(oldState)
    });
});

describe('makeGuess', function() {
    it('should add a guess on to guesses list', function() {
        const newState = gameReducer(Object.assign({}, oldState), makeGuess(10))
        expect(newState.guesses).toHaveLength(4)
        expect(newState.guesses.pop()).toEqual(10)
    });

    it('should change feedback on correct guess', function() {
        const newState = gameReducer(Object.assign({}, oldState), makeGuess(69))
        expect(newState.feedback).toEqual('You got it!')
    });
});
