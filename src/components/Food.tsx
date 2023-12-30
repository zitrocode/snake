import { useContext } from "react";
import AppContext from "../context/AppContext";

const Food: React.FC = () => {
  const { food } = useContext(AppContext);

  return (
    <div style={{ gridRow: food.positions.y, gridColumn: food.positions.x }} className="food"></div>
  );
};

export default Food;
