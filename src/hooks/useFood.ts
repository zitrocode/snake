import { useState } from "react";
import { IFood } from "../types/Food";

const useFood = (): IFood => {
  const generateRandomInteger = (): number => {
    return Math.floor(Math.random() * 30) + 1
  };

  const [positionY, setPositionY] = useState<number>(generateRandomInteger());
  const [positionX, setPositionX] = useState<number>(generateRandomInteger());

  const handleChangePosition = () => {
    setPositionY(generateRandomInteger());
    setPositionX(generateRandomInteger());
  };

  return {
    positions: {
      y: positionY,
      x: positionX,
    },
    change: handleChangePosition
  }
}

export default useFood;
