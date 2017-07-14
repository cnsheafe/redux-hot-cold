import React from 'react'
import {shallow} from 'enzyme'
import GuessCount from './guess-count'

describe('<GuessCount />', function() {
    it('should render', function() {
        shallow(<GuessCount count={3}/>)
    });
});
