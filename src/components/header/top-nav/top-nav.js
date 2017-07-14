import React from 'react';
import {connect} from 'react-redux'
import {toggleInfo, resetGame} from '../../../actions/index'
import './top-nav.css';

const TopNav = ({onShow, onReset}) => (
    <nav>
        <ul className="clearfix">
            <li>
                <a 
                    className="what" 
                    href="#" 
                    onClick={e => onShow()}>What?
                </a>
            </li>
            <li>
                <a 
                    className="new" 
                    href="#" 
                    onClick={e => onReset()}>+ New Game
                </a>
            </li>
        </ul>
    </nav>
)

const mapDispatchToProps = dispatch => ({
        onShow: () => dispatch(toggleInfo()),
        onReset: () => dispatch(resetGame())
})

export default connect(null, mapDispatchToProps)(TopNav)

/* export default class TopNav extends React.Component {
 *     onNewGame(event) {
 *         event.preventDefault();
 *         if (this.props.onNewGame) {
 *             this.props.onNewGame();
 *         }
 *     }
 *
 *     onInfo(event) {
 *         event.preventDefault();
 *         if (this.props.onInfo) {
 *             this.props.onInfo();
 *         }
 *     }
 *
 *     render() {
 *         return (
 *         );
 *     }
 * }; */

