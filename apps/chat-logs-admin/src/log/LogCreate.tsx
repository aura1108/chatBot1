import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const LogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="errDef" source="errDef" />
        <TextInput label="errNo" source="errNo" />
        <TextInput label="transId" source="transId" />
      </SimpleForm>
    </Create>
  );
};
