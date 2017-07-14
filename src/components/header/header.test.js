import React from 'react'
import {Provider} from 'react-redux'
import {shallow} from 'enzyme'
import {InfoModal} from './info-modal/info-modal'
import {Header} from './header'

describe('<Header />', function() {
    it('should render', function() {
        shallow(<Header />)
    });
});
