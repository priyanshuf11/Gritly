// dummyData.js
import { eachDayOfInterval, startOfYear, endOfYear, format } from "date-fns";

export const dummyData = eachDayOfInterval({
  start: startOfYear(new Date()),
  end: endOfYear(new Date()),
}).map((day) => ({
  date: format(day, "yyyy-MM-dd"),
  count: Math.floor(Math.random() * 12), // random between 0–11
}));
