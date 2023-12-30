import { useContext, useEffect, useState } from "react";
import Food from "./Food";
import Player from "./Player";
import AppContext from "../context/AppContext";
import Body from "./Body";
import GameOverMessage from "./GameOver";
import { IPlayerBody } from "../types/Body";

const Game: React.FC = () => {
  const { game, score, player } = useContext(AppContext);
  const [body, setBody] = useState<IPlayerBody[]>([]);


  useEffect(() => {
    if (score.current !== 0) {
      const newBody = [...body, { y: player.positions.y, x: player.positions.x }];
      setBody(newBody);
      return;
    }

    setBody([]);

  }, [score.current]);

  useEffect(() => {
    setBody((prevBody) => {
      const newBody = prevBody.map((_, index: number) => {
        if (index === 0) {
          return { y: player.positions.y, x: player.positions.x };
        }

        return { ...prevBody[index - 1] };
      });

      return newBody;
    });

    const crash = body.findIndex((part) => part.y === player.positions.y && part.x === player.positions.x);
    if (crash !== -1 && crash !== 0) {
      game.gameOver.end();
    }
  }, [player.positions])

  return (
    <>
      <div className="game">
        <Food />
        <Player />
        {body.map((square, index) => {
          return <Body key={index} y={square.y} x={square.x} />
        })}
      </div>

      {game.gameOver.is && <GameOverMessage />}
    </>
  )
};

export default Game;
