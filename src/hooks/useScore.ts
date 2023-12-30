import { useState } from "react";
import { IScore } from "../types/Score";

const defaultHightScore = Number(localStorage.getItem('hight_score')) || 0;

const useScore = (): IScore => {
  const [score, setScore] = useState<number>(0);
  const [hightScore, setHightScore] = useState<number>(defaultHightScore);

  const handleAddScore = (): void => {
    const newScore = score + 1;

    if (newScore > hightScore) {
      setHightScore(newScore);
      localStorage.setItem('hight_score', String(newScore));
    }

    setScore(newScore);
  }

  const handleResetScore = () => {
    setScore(0);
  }

  return {
    current: score,
    record: hightScore,
    add: handleAddScore,
    reset: handleResetScore
  }
};

export default useScore;
