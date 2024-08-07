import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const OperationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="operationType" source="operationType" />
        <TextField label="result" source="result" />
        <TextField label="value1" source="value1" />
        <TextField label="value2" source="value2" />
      </SimpleShowLayout>
    </Show>
  );
};
