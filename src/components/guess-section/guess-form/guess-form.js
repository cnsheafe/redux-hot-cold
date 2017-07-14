import React from 'react';

import './guess-form.css';


export default class GuessForm extends React.Component {
    handleSubmit = event => {
        event.preventDefault()
        const val = event.target.elements['userGuess'].value
        this.props.onGuess(val)
    }
    render() {
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <label 
                    htmlFor="userGuess">Enter your Guess</label>
                <input 
                    type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                    placeholder={Math.round(Math.random() * 100) + 1} required/>
                <input 
                    type="submit" id="guessButton" 
                    className="button" name="submit" value="Guess"/>
            </form>
        )
    }
}

