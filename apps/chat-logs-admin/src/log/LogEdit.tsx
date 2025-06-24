import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const LogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="errDef" source="errDef" />
        <TextInput label="errNo" source="errNo" />
        <TextInput label="transId" source="transId" />
      </SimpleForm>
    </Edit>
  );
};
