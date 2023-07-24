export interface Iprops {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IAnswer {
  id: number;
  title: string;
  userId?: number;
}
