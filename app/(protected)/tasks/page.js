
"use client"

import { useState } from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"


export default function Tasks() {
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [open, setOpen] = useState(false)

  const handleCreateTask = () => {
    if (!title.trim()) return

    const newTask = {
      id: Date.now(),
      title,
      description,
    }

    setTasks((prev) => [...prev, newTask])
    setTitle("")
    setDescription("")
    setOpen(false)
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">

      {/* Task Column */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Tasks</CardTitle>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button>Create Task</Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Task</DialogTitle>
              </DialogHeader>

              <div className="space-y-4">
                <Input
                  placeholder="Task title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <Textarea
                  placeholder="Task description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <DialogFooter>
                <Button onClick={handleCreateTask}>
                  Save Task
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

        </CardHeader>

        <CardContent className="space-y-3">
          {tasks.length === 0 && (
            <p className="text-sm text-muted-foreground">
              No tasks yet.
            </p>
          )}

          {tasks.map((task) => (
            <Card key={task.id} className="p-3">
              <h3 className="font-medium">{task.title}</h3>
              {task.description && (
                <p className="text-sm text-muted-foreground">
                  {task.description}
                </p>
              )}
            </Card>
          ))}
        </CardContent>
      </Card>

    </div>
  )
}
