"use client";

import {
  startOfYear,
  endOfYear,
  startOfWeek,
  endOfWeek,
  addDays,
  format,
} from "date-fns";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const activityLevels = [
  "bg-[var(--hm-0)]",
  "bg-[var(--hm-1)]",
  "bg-[var(--hm-2)]",
  "bg-[var(--hm-3)]",
  "bg-[var(--hm-4)]",
];

export default function Heatmap({ data }) {
  // Map date -> count
  const activityMap = data.reduce((acc, item) => {
    acc[item.date] = item.count;
    return acc;
  }, {});

  // Build full-year week grid
  const yearStart = startOfWeek(startOfYear(new Date()), { weekStartsOn: 0 });
  const yearEnd = endOfWeek(endOfYear(new Date()), { weekStartsOn: 0 });
  const targetYear = new Date().getFullYear();


  const weeks = [];
  let current = yearStart;

  while (current <= yearEnd) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      week.push(current);
      current = addDays(current, 1);
    }
    weeks.push(week);
  }

  function getLevel(count) {
    if (count === 0) return 0;
    if (count < 3) return 1;
    if (count < 6) return 2;
    if (count < 10) return 3;
    return 4;
  }

  return (
    <Card className="max-w-5xl mx-auto">
      <CardHeader>
        <CardTitle className="text-sm font-medium">
          Yearly Activity
        </CardTitle>
      </CardHeader>

      <CardContent>
        {/* Month labels */}
        <div className="flex mb-2 ml-6 space-x-[2px] text-xs text-muted-foreground">
          {weeks.map((week, wi) => {
            const firstDay = week[0];
            const prevWeek = weeks[wi - 1];

            const currentMonth = firstDay.getMonth();
            const currentYear = firstDay.getFullYear();

            const prevMonth =
              prevWeek ? prevWeek[0].getMonth() : null;

            const isNewMonth =
              wi === 0 || currentMonth !== prevMonth;

            // Only label months that belong to the target year
            const isInTargetYear = currentYear === targetYear;

            return (
              <div key={wi} className="w-3 text-xs text-muted-foreground">
                {isNewMonth && isInTargetYear
                  ? format(firstDay, "MMM")
                  : ""}
              </div>
            );
          })}

        </div>

        {/* Heatmap grid */}
        <div className="flex space-x-[2px]">
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col space-y-[2px]">
              {week.map((day, di) => {
                const dateKey = format(day, "yyyy-MM-dd");
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
      </CardContent>
    </Card>
  );
}
