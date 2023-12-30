import { useContext, useEffect } from 'react';
import './App.css';
import Game from './components/Game';
import AppContext from './context/AppContext';

const App: React.FC = () => {
  const { game, score, player, food } = useContext(AppContext);

  useEffect(() => {
    if (player.positions.y === food.positions.y) {
      if (player.positions.x === food.positions.x) {
        food.change();
        score.add();
      }
    }

    if (player.positions.y === 0 || player.positions.y === 31) {
      game.gameOver.end();
      return;
    }

    if (player.positions.x === 0 || player.positions.x === 31) {
      game.gameOver.end();
      return;
    }
  }, [player.positions]);

  return (
    <div className="container">
      <div className="game--board">
        <div className="game--info">
          <p>Score: {score.current}</p>
          <p>Record: {score.record}</p>
        </div>

        <Game />
      </div>
    </div>
  )
};

export default App;
