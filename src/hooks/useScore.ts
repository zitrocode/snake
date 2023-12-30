import { useState } from "react";
import { IScore } from "../types/Score";

const useScore = (): IScore => {
  const [score, setScore] = useState<number>(0);

  const handleAddScore = (): void => {
    setScore(score + 1);
  }

  const handleResetScore = () => {
    setScore(0);
  }

  return {
    current: score,
    add: handleAddScore,
    reset: handleResetScore
  }
};

export default useScore;
