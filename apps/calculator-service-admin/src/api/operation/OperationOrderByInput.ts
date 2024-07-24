import { SortOrder } from "../../util/SortOrder";

export type OperationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  operationType?: SortOrder;
  result?: SortOrder;
  value1?: SortOrder;
  value2?: SortOrder;
};
