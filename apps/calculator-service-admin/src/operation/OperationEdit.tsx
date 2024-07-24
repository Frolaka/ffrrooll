import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  NumberInput,
} from "react-admin";

export const OperationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
