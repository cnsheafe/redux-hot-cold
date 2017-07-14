import React from 'react';
import {connect} from 'react-redux'
import './guess-list.css';

export const GuessList = ({guesses}) => {
    const guessList = guesses.map((guess, index) => (
        <li key={index}>
            {guess}
        </li>
    ))
    return (
        <ul id="guessList" className="guessBox clearfix">
            {guessList}
        </ul>
    )
}

const mapStateToProps = state => ({
    guesses: state.guesses
})

export default connect(mapStateToProps)(GuessList) 

