import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import ThemeToggle from "./ThemeToggle"
import type { Theme } from "../hooks/useTheme"

interface NavbarProps {
  theme: Theme
  toggleTheme: () => void
}

const navItems = [
  { label: "首页", href: "#hero" },
  { label: "新闻", href: "#news" },
  { label: "模型", href: "#models" },
  { label: "工具", href: "#tools" },
  { label: "教程", href: "#tutorials" },
]

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" onClick={(e) => { e.preventDefault(); handleNavClick("#hero") }}
            className="text-xl font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
            AI Hub
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <a key={item.href} href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                {item.label}
              </a>
            ))}
            <div className="ml-2">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl">
          <div className="px-4 py-3 space-y-1">
            {navItems.map(item => (
              <a key={item.href} href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
