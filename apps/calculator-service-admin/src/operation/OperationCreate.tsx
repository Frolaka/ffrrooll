import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  NumberInput,
} from "react-admin";

export const OperationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="operationType"
          label="operationType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="result" source="result" />
        <NumberInput label="value1" source="value1" />
        <NumberInput label="value2" source="value2" />
      </SimpleForm>
    </Create>
  );
};
