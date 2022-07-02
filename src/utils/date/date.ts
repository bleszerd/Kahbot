import { IGetDayDifferencePayload } from "./types";

const DAY_MILLIS = 86400000;

/**
 * @param payload
 * @returns difference between period (in days)
 */
export function getDateDifference(payload: IGetDayDifferencePayload): number {
  const { date1, date2 } = payload;

  const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());

  return Math.floor((utc2 - utc1) / DAY_MILLIS);
}
