import React from 'react'
import {shallow} from 'enzyme'

import Game from './game'
import {resetGame, makeGuess} from '../actions/index'

describe('<Game />', function() {
    it('should render', function() {
        shallow(
            <Game />
        )
    });

/*     it('should dispatch resetGame from newGame', function() {
 *         const dispatch = jest.fn()
 *         const wrapper = shallow(
 *             <Game
 *             dispatch={dispatch} guesses={[1,2,3]}
 *             feedback={'pasta'}/>
 *         )
 *         wrapper.instance().newGame()
 *         expect(dispatch).toHaveBeenCalledWith(resetGame())
 *     });
 *
 *     it('should dispatch makeGuess from guess', function() {
 *         const dispatch = jest.fn()
 *         const wrapper = shallow(
 *             <Game
 *             dispatch={dispatch} guesses={[1,2,3]}
 *             feedback={'pasta'}/>
 *         )
 *         wrapper.instance().guess(20)
 *         expect(dispatch).toHaveBeenCalledWith(makeGuess(20))
 *     });
 *  */
});
