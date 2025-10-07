"use client";

import {
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear,
  startOfWeek,
  endOfWeek,
  addDays,
  format,
} from "date-fns";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const activityLevels = [
  "bg-gray-200",
  "bg-green-200",
  "bg-green-400",
  "bg-green-600",
  "bg-green-800",
];

export default function Heatmapb({ data }) {
  const activityMap = data.reduce((acc, item) => {
    acc[item.date] = item.count;
    return acc;
  }, {});

  const yearStart = startOfYear(new Date());
  const yearEnd = endOfYear(new Date());

  function getWeeksForMonth(date) {
    const monthStart = startOfMonth(date);
    const monthEnd = endOfMonth(date);

    // extend to full weeks (Sunday–Saturday)
    const rangeStart = startOfWeek(monthStart, { weekStartsOn: 0 });
    const rangeEnd = endOfWeek(monthEnd, { weekStartsOn: 0 });

    const weeks = [];
    let current = rangeStart;

    while (current <= rangeEnd) {
      const week = [];
      for (let i = 0; i < 7; i++) {
        week.push(current);
        current = addDays(current, 1);
      }
      weeks.push(week);
    }

    return weeks;
  }

  function getLevel(count) {
    if (count === 0) return 0;
    if (count < 3) return 1;
    if (count < 6) return 2;
    if (count < 10) return 3;
    return 4;
  }

  // Build all 12 months
  const months = [];
  let current = yearStart;
  while (current <= yearEnd) {
    months.push(new Date(current));
    current = addDays(endOfMonth(current), 1); // jump to next month
  }

  return (
    <Card className="w-4/6">
      <CardHeader>
        <CardTitle className="text-sm font-medium text-gray-700">
          Yearly Activity
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {months.map((monthDate, mi) => {
            const monthLabel = format(monthDate, "MMMM");
            const weeks = getWeeksForMonth(monthDate);

            return (
              <div
                key={mi}
                className="flex flex-col items-center min-w-max"
              >
                {/* Month label */}
                <h3 className="text-xs font-medium text-gray-600 mb-2">
                  {monthLabel}
                </h3>

                {/* Month heatmap */}
                <div className="flex space-x-[2px]">
                  {weeks.map((week, wi) => (
                    <div
                      key={wi}
                      className="flex flex-col space-y-[2px]"
                    >
                      {week.map((day, di) => {
                        const dateKey = format(day, "yyyy-MM-dd");

                        // show blank for days not in this month
                        if (format(day, "MM") !== format(monthDate, "MM")) {
                          return (
                            <div
                              key={di}
                              className="w-3 h-3 rounded-sm bg-transparent"
                            />
                          );
                        }

                        const count = activityMap[dateKey] ?? 0;
                        const level = getLevel(count);

                        return (
                          <div
                            key={di}
                            className={`w-3 h-3 rounded-sm ${activityLevels[level]}`}
                            title={`${dateKey}: ${count} activities`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
