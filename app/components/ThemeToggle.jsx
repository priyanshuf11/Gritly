"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useSidebar } from "@/components/ui/sidebar"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const { state } = useSidebar() // expanded | collapsed

  const isDark = theme === "dark"

  return (
    <Button
      variant="ghost"
      className="w-full justify-start gap-2"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
      {state === "expanded" && (
        <span>{isDark ? "Light mode" : "Dark mode"}</span>
      )}
    </Button>
  )
}
