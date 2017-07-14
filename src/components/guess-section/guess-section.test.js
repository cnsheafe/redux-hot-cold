import React from 'react'
import {shallow} from 'enzyme'

import GuessSection from './guess-section'
import GuessForm from './guess-form/guess-form'

describe('GuessForm', function() {
    it('should render', function() {
        shallow(<GuessForm />)
    });
});
