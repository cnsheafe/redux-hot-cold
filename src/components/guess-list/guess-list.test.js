import React from 'react'
import {shallow} from 'enzyme'

import ConnectedGuessList, {GuessList} from './guess-list'

describe('<GuessList />', function() {
    it('should render', function() {
        shallow(<GuessList guesses={[1,2,3]}/>)
    });

});
