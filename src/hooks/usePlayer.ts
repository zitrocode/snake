import { useState } from "react";
import { IPlayer } from "../types/Player";

export enum Directions {
  Up = 'k',
  Down = 'j',
  Left = 'h',
  Right = 'l'
}

const usePlayer = (): IPlayer => {
  const [positionX, setPositionX] = useState<number>(15);
  const [positionY, setPositionY] = useState<number>(15);

  const [direction, setDirection] = useState<Directions>(Directions.Up);

  const handleResetPlayer = () => {
    setPositionY(15);
    setPositionX(15);

    setDirection(Directions.Up);
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === Directions.Up && direction !== Directions.Down) {
      setDirection(Directions.Up);
      return;
    }

    if (event.key === Directions.Down && direction !== Directions.Up) {
      setDirection(Directions.Down);
      return;
    }

    if (event.key === Directions.Left && direction !== Directions.Right) {
      setDirection(Directions.Left);
      return;
    }

    if (event.key === Directions.Right && direction !== Directions.Left) {
      setDirection(Directions.Right);
      return;
    }
  };


  const handleMovePlayer = () => {
    switch (direction) {
      case Directions.Up:
        if (positionY !== 0) {
          setPositionY(positionY - 1);
        }
        break;
      case Directions.Down:
        if (positionY !== 30) {
          setPositionY(positionY + 1);
        }
        break;
      case Directions.Left:
        if (positionX !== 0) {
          setPositionX(positionX - 1)
        }
        break;
      case Directions.Right:
        if (positionX !== 30) {
          setPositionX(positionX + 1)
        }
        break;

      default:
        break;
    };
  }

  return {
    positions: {
      x: positionX,
      y: positionY,
    },
    direction: {
      current: direction,
      change: handleKeyDown
    },
    move: {
      change: handleMovePlayer
    },
    reset: handleResetPlayer
  };
}

export default usePlayer;
