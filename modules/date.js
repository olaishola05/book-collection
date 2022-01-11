import { DateTime } from '../luxon.js';

const currentDate = () => {
  const now = DateTime.now();
  return now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
};

export default currentDate;
