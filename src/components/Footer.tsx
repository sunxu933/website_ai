import { GitBranch, Globe, Heart } from "lucide-react"

export default function Footer() {
  const links = [
    { label: "关于我们", href: "#" },
    { label: "联系我们", href: "#" },
    { label: "隐私政策", href: "#" },
    { label: "使用条款", href: "#" },
  ]

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-10">
          {/* Top row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                AI Hub
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6">
              {links.map((link) => (
                <a key={link.label} href={link.href}
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors">
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a href="#" className="p-2 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
                aria-label="GitHub">
                <GitBranch className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
                aria-label="Website">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Bottom row */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-sm text-gray-400 dark:text-gray-500">
              © 2026 AI Hub. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500 flex items-center gap-1">
              Made with <Heart className="w-3.5 h-3.5 text-red-400" /> by AI Hub Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
