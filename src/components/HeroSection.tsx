import { motion } from "framer-motion"
import { ArrowDown, Sparkles } from "lucide-react"

export default function HeroSection() {
  const scrollToNews = () => {
    document.querySelector("#news")?.scrollIntoView({ behavior: "smooth" })
  }
  const scrollToModels = () => {
    document.querySelector("#models")?.scrollIntoView({ behavior: "smooth" })
  }

  const floatingOrbs = [
    { size: "w-64 h-64", color: "bg-primary-400/15", top: "top-1/4", left: "left-1/4", delay: "0s" },
    { size: "w-96 h-96", color: "bg-accent-400/10", top: "top-1/3", left: "right-1/4", delay: "1s" },
    { size: "w-48 h-48", color: "bg-primary-300/10", top: "bottom-1/4", left: "left-1/3", delay: "2s" },
    { size: "w-72 h-72", color: "bg-accent-300/8", top: "bottom-1/5", left: "right-1/3", delay: "1.5s" },
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/80 via-white to-accent-50/50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />

      {/* Floating gradient orbs */}
      {floatingOrbs.map((orb, i) => (
        <div
          key={i}
          className={`absolute ${orb.top} ${orb.left} ${orb.size} ${orb.color} rounded-full blur-3xl animate-pulse`}
          style={{ animationDelay: orb.delay }}
        />
      ))}

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{ backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium rounded-full
              bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-primary-200 dark:border-primary-800
              text-primary-700 dark:text-primary-300 shadow-sm"
          >
            <Sparkles className="w-4 h-4" />
            AI前沿资讯 · 一站式平台
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
          >
            <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600 bg-clip-text text-transparent">
              探索AI前沿
            </span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-200 mt-2 inline-block">
              连接智能未来
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-8 text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed"
          >
            汇聚全球AI最新动态 · 模型对比 · 工具大全 · 实战教程
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400 dark:text-gray-500"
          >
            {[
              { value: "50+", label: "AI 模型追踪" },
              { value: "100+", label: "精选工具" },
              { value: "每日更新", label: "行业动态" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-lg font-bold text-gray-700 dark:text-gray-300">{stat.value}</span>
                <span>{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button onClick={scrollToModels}
              className="group px-8 py-3.5 rounded-xl font-semibold text-white
                bg-gradient-to-r from-primary-500 via-primary-600 to-accent-600
                shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30
                hover:scale-105 active:scale-100 transition-all duration-300"
            >
              查看模型排行
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button onClick={scrollToNews}
              className="px-8 py-3.5 rounded-xl font-semibold text-gray-700 dark:text-gray-300
                bg-white/80 dark:bg-white/5 backdrop-blur-sm
                border border-gray-200 dark:border-gray-700
                hover:border-primary-300 dark:hover:border-primary-600
                hover:text-primary-600 dark:hover:text-primary-400
                hover:shadow-md hover:scale-105 active:scale-100 transition-all duration-300"
            >
              浏览AI新闻
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.8, duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-400 dark:text-gray-500">向下滚动</span>
          <ArrowDown className="w-5 h-5 text-primary-400 dark:text-primary-500" />
        </motion.div>
      </div>
    </section>
  )
}
