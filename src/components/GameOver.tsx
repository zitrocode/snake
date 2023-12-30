import { useContext } from "react";
import AppContext from "../context/AppContext";

const GameOverMessage: React.FC = () => {
  const {game, score, player, food} = useContext(AppContext);

  const handleResetGame = () => {
    score.reset();
    player.reset();
    food.change();

    game.gameOver.reset();
  }

  return (
    <div className="gameover--message">
      <div className="gameover--info">
        <h2 className="gameover--title">Game Over</h2>
        <p>You lost, try again</p>
      </div>
      <button className="gameover--button" onClick={handleResetGame}>Reset</button>
    </div>
  )
}

export default GameOverMessage;
