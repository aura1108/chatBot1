import { StringFilter } from "../../util/StringFilter";

export type LogWhereInput = {
  errDef?: StringFilter;
  errNo?: StringFilter;
  id?: StringFilter;
  transId?: StringFilter;
};
