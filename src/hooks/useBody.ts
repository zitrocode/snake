import { useEffect, useState } from "react";
import { IBody, IPlayerBody } from "../types/Body";

const useBody = (): IBody => {
  const [body, setBody] = useState<IPlayerBody[]>([]);

  // Añade nuevas partes al cuerpo
  const addBodyPart = (data: IPlayerBody[]) => {
    setBody(data);
  };

  // Resetea todas las partes del cuerpo
  const resetBody = () => setBody([]);

  // Cambia las posiciones de las partes del cuerpo
  const changePositionsBodyParts = (positions: IPlayerBody) => {
    setBody((prevBody) => {
      const newBody = prevBody.map((_, index: number) => {
        if (index === 0) {
          return { y: positions.y, x: positions.x };
        }

        return { ...prevBody[index - 1] };
      });

      return newBody;
    });
  };

  return {
    parts: body,
    add: addBodyPart,
    reset: resetBody,
  };
};

export default useBody;
