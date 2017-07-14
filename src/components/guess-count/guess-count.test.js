import React from 'react'
import {shallow} from 'enzyme'
import ConnectedGuessCount, {GuessCount} from './guess-count'

describe('<GuessCount />', function() {
    it('should render', function() {
        shallow(<GuessCount count={3}/>)
    });
});
