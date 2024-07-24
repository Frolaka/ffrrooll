export type Operation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  operationType?: "Option1" | null;
  result: number | null;
  value1: number | null;
  value2: number | null;
};
