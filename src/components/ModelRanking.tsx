import { motion } from "framer-motion"
import { Trophy, Medal, TrendingUp } from "lucide-react"
import { modelsData } from "../data/models"

function RankIcon({ rank }: { rank: number }) {
  if (rank === 1) return <Trophy className="w-5 h-5 text-yellow-500" />
  if (rank === 2) return <Medal className="w-5 h-5 text-gray-400" />
  if (rank === 3) return <Medal className="w-5 h-5 text-amber-600" />
  return <span className="w-5 h-5 flex items-center justify-center text-sm font-bold text-gray-400">{rank}</span>
}

function RankHighlight({ rank }: { rank: number }) {
  if (rank === 1) return "bg-yellow-50/80 dark:bg-yellow-900/10 border-l-yellow-400"
  if (rank === 2) return "bg-gray-50/50 dark:bg-gray-800/30 border-l-gray-300"
  if (rank === 3) return "bg-amber-50/50 dark:bg-amber-900/10 border-l-amber-400"
  return "border-l-transparent"
}

export default function ModelRanking() {
  return (
    <section id="models" className="relative py-24 sm:py-32 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase
            text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/30 rounded-full mb-4">
            Rankings
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
            模型排行榜
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
            MMLU 综合得分对比，持续追踪主流大语言模型性能
          </p>
        </motion.div>

        {/* Desktop table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="hidden md:block overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800
            shadow-sm bg-white dark:bg-gray-900"
        >
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50/80 dark:bg-gray-800/50 text-left">
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">#</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">模型</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">提供商</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">参数量</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  <span className="inline-flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    MMLU
                  </span>
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">类型</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {modelsData.map((model) => (
                <tr key={model.id}
                  className={`border-l-4 ${RankHighlight({ rank: model.rank })} hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors`}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <RankIcon rank={model.rank} />
                      <span className="font-semibold text-gray-900 dark:text-gray-100 tabular-nums">{model.rank}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-gray-900 dark:text-gray-100">{model.name}</span>
                  </td>
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-400 text-sm">{model.provider}</td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-md">
                      {model.parameters}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full max-w-[100px]">
                        <div className="h-1.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                          style={{ width: `${(model.mmluScore / 100) * 100}%` }} />
                      </div>
                      <span className="font-bold text-gray-900 dark:text-gray-100 tabular-nums">{model.mmluScore}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2.5 py-1 text-xs font-semibold rounded-full ${
                      model.type === "开源"
                        ? "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800"
                        : "bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800"
                    }`}>
                      {model.type}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-3">
          {modelsData.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className={`rounded-xl border p-5 ${RankHighlight({ rank: model.rank })} bg-white dark:bg-gray-900`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <RankIcon rank={model.rank} />
                  <span className="text-base font-bold text-gray-900 dark:text-gray-100">{model.name}</span>
                </div>
                <span className={`inline-flex px-2 py-0.5 text-xs font-semibold rounded-full ${
                  model.type === "开源"
                    ? "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                    : "bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                }`}>
                  {model.type}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
                <span>{model.provider}</span>
                <span className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-md">{model.parameters}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">MMLU</span>
                <div className="flex-1 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div className="h-1.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                    style={{ width: `${(model.mmluScore / 100) * 100}%` }} />
                </div>
                <span className="font-bold text-gray-900 dark:text-gray-100 tabular-nums">{model.mmluScore}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
