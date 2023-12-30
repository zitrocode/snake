export interface IPlayer {
  positions: {
    x: number;
    y: number;
  };
  direction: {
    current: string;
    change: (e: KeyboardEvent) => void;
  };
  move: {
    change: () => void;
  };
  reset: () => void;
}
