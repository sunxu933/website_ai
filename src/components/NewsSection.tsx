import { motion } from "framer-motion"
import { Calendar, ArrowUpRight } from "lucide-react"
import { newsData, type NewsItem } from "../data/news"

const tagColors: Record<string, string> = {
  "大模型": "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300",
  "开源": "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300",
  "AI工具": "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300",
  "AI视频": "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300",
  "AI政策": "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300",
  "AI应用": "bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300",
}

function NewsCard({ item, index }: { item: NewsItem; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden
        border border-gray-100 dark:border-gray-800
        hover:border-primary-200 dark:hover:border-primary-800
        hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-black/20
        hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image */}
      <div className="aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img src={item.imageUrl} alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${tagColors[item.tag] || "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"}`}>
            {item.tag}
          </span>
          <span className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {item.date}
          </span>
        </div>

        <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2
          group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2 leading-snug">
          {item.title}
        </h3>

        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 mb-4">
          {item.summary}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800">
          <span className="text-xs text-gray-400 dark:text-gray-500">{item.source}</span>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-primary-500 dark:text-primary-400
            opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            阅读更多
            <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </motion.article>
  )
}

export default function NewsSection() {
  return (
    <section id="news" className="relative py-24 sm:py-32 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-950 dark:to-gray-900/50">
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
            text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 rounded-full mb-4">
            Latest News
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
            AI 最新动态
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
            追踪全球人工智能领域的最新进展与行业趋势
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Featured card (first) */}
          {newsData.slice(0, 1).map((item, index) => (
            <NewsCard key={item.id} item={item} index={index} />
          ))}

          {/* Remaining cards */}
          {newsData.slice(1).map((item, index) => (
            <NewsCard key={item.id} item={item} index={index + 1} />
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium
            text-primary-600 dark:text-primary-400
            border border-primary-200 dark:border-primary-800
            rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20
            transition-colors duration-300">
            查看更多新闻
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
