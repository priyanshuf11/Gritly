
"use client"

import { useState } from "react"
import CreateTaskDialog from "@/app/components/CreateTaskDialog"
import TaskList from "@/app/components/TaskList"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Tasks() {
  const [tasks, setTasks] = useState([])

  const handleCreateTask = (title, description) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
    }

    setTasks((prev) => [...prev, newTask])
  }

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6 bg">

      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Tasks</h1>
        <CreateTaskDialog onCreate={handleCreateTask} />
      </div>

      {/* Task List Section */}
      <Card className="shadow-sm">
        <CardContent className="pt-6">
          <TaskList tasks={tasks} onToggle={toggleTask} />
        </CardContent>
      </Card>

    </div>
  )
}
