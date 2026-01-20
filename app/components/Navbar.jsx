import { ThemeToggle } from "./ThemeToggle"
const Navbar = () => {
  return (
    <header className="h-14 shrink-0 border-b flex items-center justify-between px-4">
      {/* Left: Search */}
      <div className="flex-1 max-w-md">
        <p>search box</p>
      </div>

      {/* Right: actions */}
      <div className="flex items-center gap-2">
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Navbar
