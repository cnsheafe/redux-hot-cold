import React from 'react';
import {connect} from 'react-redux'
import './guess-count.css';


export const GuessCount = ({count}) => (
        <p>
            Guess #<span id="count">{count}</span>!
        </p>
)        

const mapStateToProps = state => ({
    count: state.guesses.length
})

export default connect(mapStateToProps)(GuessCount) 
