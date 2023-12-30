import { createContext, useState } from "react";

import { IScore } from "../types/Score";
import { IPlayer } from "../types/Player";
import { IFood } from "../types/Food";

import usePlayer from "../hooks/usePlayer";
import useFood from "../hooks/useFood";
import useScore from "../hooks/useScore";

interface IAppContext {
  game: {
    gameOver: {
      is: boolean;
      end: () => void;
      reset: () => void;
    };
    frameDelay: number;
  },
  score: IScore;
  player: IPlayer;
  food: IFood;
}

const AppContext = createContext<IAppContext>({} as IAppContext);

type IAppProvider = {
  children: React.ReactNode;
}
export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const FPS = 3
  const frameDelay = 1000 / FPS

  const [isGameOver, setIsGamerOver] = useState<boolean>(false);
  const handleGameOver = () => setIsGamerOver(true);
  const handleResetGameOver = () => setIsGamerOver(false);

  const player = usePlayer();
  const score = useScore();
  const food = useFood();

  return (
    <AppContext.Provider value={{
      game: {
        gameOver: {
          is: isGameOver,
          end: handleGameOver,
          reset: handleResetGameOver
        },
        frameDelay
      },
      score,
      player,
      food
    }}>{children}</AppContext.Provider>
  );
};

export default AppContext
