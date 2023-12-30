import { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";

const Player: React.FC = () => {
  const { game, player } = useContext(AppContext);

  setTimeout(() => {
    if (!game.gameOver.is) {
      player.move.change();
    }
  }, game.frameDelay);

  useEffect(() => {
    document.addEventListener('keydown', player.direction.change);

    return () => {
      document.removeEventListener('keydown', player.direction.change);
    }
  }, [player.direction.current]);

  return (
    <div style={{ gridRow: player.positions.y, gridColumn: player.positions.x }} className="player"></div>
  );
};

export default Player;
