import {resetGame, RESET_GAME, makeGuess, MAKE_GUESS} from './actions'

describe('resetGame', function() {
    it('should return just the type', function() {
        const action = resetGame()
        const keys = Object.keys(action)
        expect(keys).toHaveLength(1)
        expect(keys[0]).toEqual('type')
        expect(action.type).toEqual(RESET_GAME)
    });
});

describe('makeGuess', function() {
    it('should return right type', function() {
        const action = makeGuess(2)
        expect(action.type).toEqual(MAKE_GUESS)
    })
    it('should check if the guess is valid', function() {
        let action = makeGuess('not a number')
        expect(action.validGuess).toEqual(false)

        action = makeGuess(101)
        expect(action.validGuess).toEqual(false)

        action = makeGuess(20)
        expect(action.validGuess).toEqual(true)
    })
});
