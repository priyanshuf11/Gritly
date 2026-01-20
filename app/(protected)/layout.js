import Navbar from "@/app/components/Navbar"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarProvider,
  SidebarFooter
} from "@/components/ui/sidebar"
import Link from "next/link"
import { ThemeToggle } from "../components/ThemeToggle"

export default function ProtectedLayout({ children }) {
  return (
    <SidebarProvider>
      {/* Sidebar */}
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <div className="px-2 py-1 font-semibold">
            FocusFlow
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/dashboard">Dashboard</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/tasks">Tasks</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/kanban">Kanban</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <ThemeToggle />
        </SidebarFooter>
      </Sidebar>

      {/* Main content */}
      <SidebarInset className="flex flex-col h-screen">
        <Navbar />
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
