export interface TutorialItem {
  id: string
  title: string
  description: string
  duration: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  category: string
  imageUrl: string
}

export const tutorialsData: TutorialItem[] = [
  {
    id: '1',
    title: '从零开始搭建ChatGPT应用',
    description: '使用OpenAI API在30分钟内构建你的第一个AI聊天应用，涵盖API调用、流式输出和对话管理。',
    duration: '30分钟',
    difficulty: 'beginner',
    category: 'API开发',
    imageUrl: 'data:image/svg+xml,%3csvg+xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22+width%3d%22400%22+height%3d%22250%22%3e%0a++%3crect+width%3d%22400%22+height%3d%22250%22+fill%3d%22%236366f1%22%2f%3e%0a++%3ctext+x%3d%22200%22+y%3d%22125%22+font-family%3d%22Arial%2csans-serif%22+font-size%3d%2218%22+fill%3d%22white%22+text-anchor%3d%22middle%22+dominant-baseline%3d%22middle%22+font-weight%3d%22bold%22%3eGPT+Guide%3c%2ftext%3e%0a%3c%2fsvg%3e',
  },
  {
    id: '2',
    title: 'LangChain实战：构建RAG知识库问答',
    description: '深入LangChain框架，从文档加载到向量存储再到检索增强生成，构建企业级知识库问答系统。',
    duration: '45分钟',
    difficulty: 'intermediate',
    category: '框架',
    imageUrl: 'data:image/svg+xml,%3csvg+xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22+width%3d%22400%22+height%3d%22250%22%3e%0a++%3crect+width%3d%22400%22+height%3d%22250%22+fill%3d%22%2310b981%22%2f%3e%0a++%3ctext+x%3d%22200%22+y%3d%22125%22+font-family%3d%22Arial%2csans-serif%22+font-size%3d%2218%22+fill%3d%22white%22+text-anchor%3d%22middle%22+dominant-baseline%3d%22middle%22+font-weight%3d%22bold%22%3eStable+Diffusion%3c%2ftext%3e%0a%3c%2fsvg%3e',
  },
  {
    id: '3',
    title: 'AI Agent开发指南：AutoGPT原理与实践',
    description: '了解AI Agent的核心工作原理，动手构建一个能自主执行任务的智能代理。',
    duration: '60分钟',
    difficulty: 'advanced',
    category: 'Agent',
    imageUrl: 'data:image/svg+xml,%3csvg+xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22+width%3d%22400%22+height%3d%22250%22%3e%0a++%3crect+width%3d%22400%22+height%3d%22250%22+fill%3d%22%23f59e0b%22%2f%3e%0a++%3ctext+x%3d%22200%22+y%3d%22125%22+font-family%3d%22Arial%2csans-serif%22+font-size%3d%2218%22+fill%3d%22white%22+text-anchor%3d%22middle%22+dominant-baseline%3d%22middle%22+font-weight%3d%22bold%22%3ePrompt+Engineering%3c%2ftext%3e%0a%3c%2fsvg%3e',
  },
  {
    id: '4',
    title: 'Stable Diffusion微调：DreamBooth全流程',
    description: '使用DreamBooth技术微调Stable Diffusion，生成个性化AI图像模型的完整教程。',
    duration: '45分钟',
    difficulty: 'intermediate',
    category: '图像',
    imageUrl: 'data:image/svg+xml,%3csvg+xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22+width%3d%22400%22+height%3d%22250%22%3e%0a++%3crect+width%3d%22400%22+height%3d%22250%22+fill%3d%22%238b5cf6%22%2f%3e%0a++%3ctext+x%3d%22200%22+y%3d%22125%22+font-family%3d%22Arial%2csans-serif%22+font-size%3d%2218%22+fill%3d%22white%22+text-anchor%3d%22middle%22+dominant-baseline%3d%22middle%22+font-weight%3d%22bold%22%3eLangChain%3c%2ftext%3e%0a%3c%2fsvg%3e',
  },
  {
    id: '5',
    title: 'Prompt Engineering大师课',
    description: '从基础到高级的提示工程技巧，包括思维链、少样本学习、角色扮演等方法。',
    duration: '25分钟',
    difficulty: 'beginner',
    category: '提示工程',
    imageUrl: 'data:image/svg+xml,%3csvg+xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22+width%3d%22400%22+height%3d%22250%22%3e%0a++%3crect+width%3d%22400%22+height%3d%22250%22+fill%3d%22%23ec4899%22%2f%3e%0a++%3ctext+x%3d%22200%22+y%3d%22125%22+font-family%3d%22Arial%2csans-serif%22+font-size%3d%2218%22+fill%3d%22white%22+text-anchor%3d%22middle%22+dominant-baseline%3d%22middle%22+font-weight%3d%22bold%22%3eCodex+CLI%3c%2ftext%3e%0a%3c%2fsvg%3e',
  },
  {
    id: '6',
    title: '使用Vercel AI SDK快速部署AI应用',
    description: '借助Vercel AI SDK，在React和Next.js项目中快速集成各种AI模型的流式对话功能。',
    duration: '20分钟',
    difficulty: 'beginner',
    category: '前端',
    imageUrl: 'data:image/svg+xml,%3csvg+xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22+width%3d%22400%22+height%3d%22250%22%3e%0a++%3crect+width%3d%22400%22+height%3d%22250%22+fill%3d%22%2306b6d4%22%2f%3e%0a++%3ctext+x%3d%22200%22+y%3d%22125%22+font-family%3d%22Arial%2csans-serif%22+font-size%3d%2218%22+fill%3d%22white%22+text-anchor%3d%22middle%22+dominant-baseline%3d%22middle%22+font-weight%3d%22bold%22%3eFine-Tuning%3c%2ftext%3e%0a%3c%2fsvg%3e',
  },
  {
    id: '7',
    title: 'LlamaIndex与向量数据库深度整合',
    description: '使用LlamaIndex连接Chroma、Pinecone等向量数据库，构建高性能语义搜索系统。',
    duration: '50分钟',
    difficulty: 'advanced',
    category: '数据',
    imageUrl: 'data:image/svg+xml,%3csvg+xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22+width%3d%22400%22+height%3d%22250%22%3e%0a++%3crect+width%3d%22400%22+height%3d%22250%22+fill%3d%22%23ef4444%22%2f%3e%0a++%3ctext+x%3d%22200%22+y%3d%22125%22+font-family%3d%22Arial%2csans-serif%22+font-size%3d%2218%22+fill%3d%22white%22+text-anchor%3d%22middle%22+dominant-baseline%3d%22middle%22+font-weight%3d%22bold%22%3eRAG%3c%2ftext%3e%0a%3c%2fsvg%3e',
  },
  {
    id: '8',
    title: 'AI模型部署：从HuggingFace到生产环境',
    description: '学习如何使用HuggingFace TGI、vLLM等工具将开源模型部署到生产环境。',
    duration: '40分钟',
    difficulty: 'intermediate',
    category: '部署',
    imageUrl: 'data:image/svg+xml,%3csvg+xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22+width%3d%22400%22+height%3d%22250%22%3e%0a++%3crect+width%3d%22400%22+height%3d%22250%22+fill%3d%22%2314b8a6%22%2f%3e%0a++%3ctext+x%3d%22200%22+y%3d%22125%22+font-family%3d%22Arial%2csans-serif%22+font-size%3d%2218%22+fill%3d%22white%22+text-anchor%3d%22middle%22+dominant-baseline%3d%22middle%22+font-weight%3d%22bold%22%3eAI+Agent%3c%2ftext%3e%0a%3c%2fsvg%3e',
  },
]

