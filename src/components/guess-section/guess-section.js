import React from 'react';
import {connect} from 'react-redux'
import {makeGuess} from '../../actions/index'
import GuessForm from './guess-form/guess-form';

import './guess-section.css';

export const GuessSection = ({feedback, onGuess}) => {
    return (
        <section>
            <h2 id="feedback">{feedback}</h2>
            <GuessForm onGuess={onGuess}/>
        </section>
    );
}

const mapStateToProps = state => ({
    feedback: state.feedback
})

const mapDispatchToProps = dispatch => ({
    onGuess: guess => dispatch(makeGuess(guess))
})

export default connect(mapStateToProps, mapDispatchToProps)(GuessSection)


