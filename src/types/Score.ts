export interface IScore {
  current: number;
  record: number;
  add: () => void;
  reset: () => void;
};
