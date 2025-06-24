import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LogList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"logs"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="errDef" source="errDef" />
        <TextField label="errNo" source="errNo" />
        <TextField label="ID" source="id" />
        <TextField label="transId" source="transId" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
