import {connect} from 'react-redux'
import {toggleInfo, resetGame} from '../../../actions/index.js'

import TopNav from './top-nav'


const mapDispatchToProps = dispatch => {
    return {
        onShow: () => {
            dispatch(toggleInfo())
        },
        onReset: () => {
            dispatch(resetGame())
        }
    }
}   

const TopNavContainer = connect(mapDispatchToProps)(TopNav)

export default TopNavContainer
