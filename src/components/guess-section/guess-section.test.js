import React from 'react'
import {shallow} from 'enzyme'

import ConnectGuessSection, {GuessSection} from './guess-section'
import GuessForm from './guess-form/guess-form'

describe('GuessSection', function() {
    it('should render', function() {
        shallow(<GuessSection/>)
    });
});
