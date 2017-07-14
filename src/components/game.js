import React from 'react';

import Header from './header/header';
import GuessSection from './guess-section/guess-section';
import GuessCount  from './guess-count/guess-count';
import GuessList from './guess-list/guess-list';

export default() => (
    <div>
        <Header />
        <GuessSection />
        <GuessCount />
        <GuessList />
    </div>
)
/* export class Game extends React.Component {
 *
 *     newGame = () => {
 *         this.props.dispatch(resetGame());
 *     }
 *
 *     guess = guess => {
 *         this.props.dispatch(makeGuess(guess));
 *     }
 *
 *     render() {
 *         return (
 *             <div>
 *                 <Header onNewGame={this.newGame} />
 *                 <GuessSection feedback={this.props.feedback}
 *                     onGuess={this.guess} />
 *                 <GuessCount count={this.props.guesses.length} />
 *                 <GuessList guesses={this.props.guesses} />
 *             </div>
 *         );
 *     }
 * } */

/* const mapStateToProps = state => ({
 *     guesses: state.guesses,
 *     feedback: state.feedback,
 *     correctAnswer: state.correctAnswer
 * }) */

// export default connect(mapStateToProps)(Game)

