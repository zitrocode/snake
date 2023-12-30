import { useContext, useEffect } from 'react';
import './App.css';
import Game from './components/Game';
import AppContext from './context/AppContext';

const App: React.FC = () => {
  const { score, player, food } = useContext(AppContext);

  useEffect(() => {
    if (player.positions.y === food.positions.y) {
      if (player.positions.x === food.positions.x) {
        food.change();
        score.add();
      }
    }
  }, [player.positions]);

  return (
    <div className="container">
      <div className="game--board">
        <p>Score: {score.current}</p>

        <Game />
      </div>
    </div>
  )
};

export default App;
