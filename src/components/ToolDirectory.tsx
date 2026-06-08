import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Search } from "lucide-react"
import { toolsData, toolCategories, type ToolItem } from "../data/tools"

function ToolCard({ tool, index }: { tool: ToolItem; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="group relative bg-white dark:bg-gray-900 rounded-2xl p-6
        border border-gray-100 dark:border-gray-800
        hover:border-primary-200 dark:hover:border-primary-800
        hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
    >
      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center text-2xl
        rounded-xl bg-gray-50 dark:bg-gray-800 mb-4
        group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 transition-colors">
        {tool.icon}
      </div>

      <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1.5
        group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {tool.name}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2">
        {tool.description}
      </p>
      <a
        href={tool.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-semibold
          text-primary-600 dark:text-primary-400
          hover:text-primary-700 dark:hover:text-primary-300
          transition-colors"
      >
        访问官网
        <ExternalLink className="w-3 h-3" />
      </a>
    </motion.div>
  )
}

export default function ToolDirectory() {
  const [activeCategory, setActiveCategory] = useState(toolCategories[0].key)

  const filteredTools = toolsData.filter(t => t.category === activeCategory)

  return (
    <section id="tools" className="relative py-24 sm:py-32 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase
            text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 rounded-full mb-4">
            Tools
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
            AI 工具大全
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
            精选各类 AI 工具，助你高效工作和创作
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {toolCategories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.key
                  ? "bg-primary-500 text-white shadow-lg shadow-primary-500/20 scale-105"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
              }`}
            >
              <span className="mr-1.5">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tool grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          >
            {filteredTools.map((tool, index) => (
              <ToolCard key={tool.id} tool={tool} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filteredTools.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-12 h-12 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
            <p className="text-gray-400 dark:text-gray-500">暂无该分类的工具</p>
          </div>
        )}
      </div>
    </section>
  )
}
