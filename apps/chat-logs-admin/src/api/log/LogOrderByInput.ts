import { SortOrder } from "../../util/SortOrder";

export type LogOrderByInput = {
  createdAt?: SortOrder;
  errDef?: SortOrder;
  errNo?: SortOrder;
  id?: SortOrder;
  transId?: SortOrder;
  updatedAt?: SortOrder;
};
