"use client"

import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

export default function TaskList({ tasks, onToggle }) {
  if (tasks.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        No tasks yet.
      </p>
    )
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <Card key={task.id} className="p-3 flex-row  items-baseline gap-3 ">
          <Checkbox
            checked={task.completed}
            onCheckedChange={() => onToggle(task.id)}
          />

          <div>
            <h3
              className={`font-medium  text-xl ${task.completed ? "line-through opacity-60" : ""
                }`}
            >
              {task.title}
            </h3>

            {task.description && (
              <p className="text-sm text-muted-foreground">
                {task.description}
              </p>
            )}
          </div>
        </Card>
      ))}
    </div>
  )
}
