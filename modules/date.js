import { DateTime } from '../node_modules/luxon/build/es6/luxon.js';

export default function currentDate() {
  const now = DateTime.now();
  return now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
}
