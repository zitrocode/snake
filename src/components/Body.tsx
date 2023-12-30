type IBody = {
  y: number;
  x: number;
}

const Body: React.FC<IBody> = ({x, y}) => {
  return (
    <div style={{ gridRow: y, gridColumn: x }} className="player"></div>
  );
};

export default Body;
