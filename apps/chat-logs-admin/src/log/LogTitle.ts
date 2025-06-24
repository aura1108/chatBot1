import { Log as TLog } from "../api/log/Log";

export const LOG_TITLE_FIELD = "errDef";

export const LogTitle = (record: TLog): string => {
  return record.errDef?.toString() || String(record.id);
};
