import { motion } from "framer-motion"
import { Clock, BookOpen, ArrowRight } from "lucide-react"
import { tutorialsData, type TutorialItem } from "../data/tutorials"

const difficultyMap: Record<TutorialItem["difficulty"], { label: string; className: string }> = {
  beginner: { label: "入门", className: "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800" },
  intermediate: { label: "中级", className: "bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800" },
  advanced: { label: "高级", className: "bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800" },
}

function TutorialCard({ item, index }: { item: TutorialItem; index: number }) {
  const diff = difficultyMap[item.difficulty]
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group flex-shrink-0 w-80 snap-start
        bg-white dark:bg-gray-900 rounded-2xl overflow-hidden
        border border-gray-100 dark:border-gray-800
        hover:border-primary-200 dark:hover:border-primary-800
        hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img src={item.imageUrl} alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy" />
        <div className="absolute top-3 left-3">
          <span className={`inline-flex px-2.5 py-1 text-xs font-semibold rounded-full border ${diff.className}`}>
            {diff.label}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-xs text-gray-400 dark:text-gray-500">{item.category}</span>
        </div>

        <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2
          group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2 leading-snug">
          {item.title}
        </h3>

        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 mb-4">
          {item.description}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800">
          <span className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
            <Clock className="w-3.5 h-3.5" />
            {item.duration}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-primary-500 dark:text-primary-400
            opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            开始学习
            <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </motion.div>
  )
}

function TutorialCardMobile({ item, index }: { item: TutorialItem; index: number }) {
  const diff = difficultyMap[item.difficulty]
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden
        border border-gray-100 dark:border-gray-800
        hover:border-primary-200 dark:hover:border-primary-800
        hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-stretch">
        <div className="w-28 flex-shrink-0 bg-gray-100 dark:bg-gray-800">
          <img src={item.imageUrl} alt={item.title}
            className="w-full h-full object-cover"
            loading="lazy" />
        </div>
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className={`inline-flex px-2 py-0.5 text-xs font-semibold rounded-full border ${diff.className}`}>{diff.label}</span>
              <span className="text-xs text-gray-400 dark:text-gray-500">{item.category}</span>
            </div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 line-clamp-2 leading-snug
              group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {item.title}
            </h3>
          </div>
          <span className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500 mt-2">
            <Clock className="w-3 h-3" />
            {item.duration}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function TutorialSection() {
  return (
    <section id="tutorials" className="relative py-24 sm:py-32 bg-white dark:bg-gray-950">
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
            text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/30 rounded-full mb-4">
            Learn
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
            精选教程
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
            从入门到精通，系统的 AI 学习路径
          </p>
        </motion.div>

        {/* Desktop horizontal scrollable row */}
        <div className="hidden md:flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory
          scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {tutorialsData.map((item, index) => (
            <TutorialCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Mobile vertical stack */}
        <div className="md:hidden space-y-3">
          {tutorialsData.map((item, index) => (
            <TutorialCardMobile key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <button className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium
            text-primary-600 dark:text-primary-400
            border border-primary-200 dark:border-primary-800
            rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20
            transition-colors duration-300">
            浏览全部教程
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
