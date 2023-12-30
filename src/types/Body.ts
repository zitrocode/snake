export type IPlayerBody = {
  y: number;
  x: number;
}

export interface IBody {
  parts: IPlayerBody[];
  add: (data: IPlayerBody[]) => void;
  // changePosition: (positions: IPlayerBody) => void;
  reset: () => void;
}
