import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OperationWhereInput = {
  id?: StringFilter;
  operationType?: "Option1";
  result?: FloatNullableFilter;
  value1?: FloatNullableFilter;
  value2?: FloatNullableFilter;
};
