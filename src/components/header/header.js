import React from 'react';
import {connect} from 'react-redux'
import TopNav from './top-nav/top-nav';
import InfoModal from './info-modal/info-modal';

import './header.css';

export class Header extends React.Component {
    render() {
        const modal = this.props.showInfoModal ? <InfoModal /> : null
        return(
            <header>
                <TopNav />
                {modal}
                <h1>HOT or COLD</h1>
            </header>
        )
    }
}

const mapStateToProps = state => ({
    showInfoModal: state.showInfo
})

export default connect(mapStateToProps)(Header)


