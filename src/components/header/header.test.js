import React from 'react'
import {shallow} from 'enzyme'

import Header from './header'

describe('<Header />', function() {
    it('should render', function() {
        const callback = jest.fn()
        shallow(<Header onNewGame={callback}/>)
    });
});
